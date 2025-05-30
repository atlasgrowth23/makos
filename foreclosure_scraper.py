#!/usr/bin/env python3
"""
Alabama Public Notices Foreclosure Scraper
Handles session management, reCAPTCHA, and form submission
"""

import requests
import time
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import TimeoutException
import pandas as pd
from datetime import datetime, timedelta

class ForeclosureScraper:
    def __init__(self, headless=False):
        """Initialize the scraper with Chrome WebDriver"""
        self.base_url = "https://www.alabamapublicnotices.com"
        self.search_url = f"{self.base_url}/Search.aspx"
        
        # Setup Chrome options
        chrome_options = Options()
        if headless:
            chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--window-size=1920,1080")
        
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 30)
        
    def wait_for_recaptcha(self, timeout=300):
        """Wait for user to solve reCAPTCHA manually"""
        print("Please solve the reCAPTCHA in the browser window...")
        print("Waiting up to 5 minutes for completion...")
        
        start_time = time.time()
        while time.time() - start_time < timeout:
            try:
                # Check if reCAPTCHA is solved by looking for the response token
                recaptcha_response = self.driver.execute_script(
                    "return grecaptcha.getResponse();"
                )
                if recaptcha_response:
                    print("reCAPTCHA solved successfully!")
                    return True
                    
                # Alternative check - look for reCAPTCHA success indicators
                if self.driver.find_elements(By.CSS_SELECTOR, ".recaptcha-success"):
                    print("reCAPTCHA solved successfully!")
                    return True
                    
            except Exception:
                pass
                
            time.sleep(1)
            
        print("Timeout waiting for reCAPTCHA solution")
        return False
        
    def setup_search_form(self, county="Jefferson", keyword="foreclosure", 
                         start_date=None, end_date=None):
        """Setup the search form parameters"""
        try:
            # Navigate to search page
            print(f"Navigating to {self.search_url}")
            self.driver.get(self.search_url)
            
            # Wait for page to load
            self.wait.until(EC.presence_of_element_located((By.ID, "ctl00_MainContent_txtKeywords")))
            
            # Fill keyword field
            keyword_field = self.driver.find_element(By.ID, "ctl00_MainContent_txtKeywords")
            keyword_field.clear()
            keyword_field.send_keys(keyword)
            
            # Select county if dropdown exists
            try:
                county_select = Select(self.driver.find_element(By.ID, "ctl00_MainContent_ddlCounty"))
                county_select.select_by_visible_text(county)
                print(f"Selected county: {county}")
            except Exception as e:
                print(f"Could not select county: {e}")
            
            # Set date range if provided
            if start_date:
                try:
                    start_date_field = self.driver.find_element(By.ID, "ctl00_MainContent_txtStartDate")
                    start_date_field.clear()
                    start_date_field.send_keys(start_date)
                except Exception as e:
                    print(f"Could not set start date: {e}")
                    
            if end_date:
                try:
                    end_date_field = self.driver.find_element(By.ID, "ctl00_MainContent_txtEndDate")
                    end_date_field.clear()
                    end_date_field.send_keys(end_date)
                except Exception as e:
                    print(f"Could not set end date: {e}")
            
            return True
            
        except Exception as e:
            print(f"Error setting up search form: {e}")
            return False
    
    def handle_recaptcha_and_search(self):
        """Handle reCAPTCHA and submit search"""
        try:
            # Check if reCAPTCHA is present
            recaptcha_frames = self.driver.find_elements(By.CSS_SELECTOR, "iframe[src*='recaptcha']")
            
            if recaptcha_frames:
                print("reCAPTCHA detected - manual intervention required")
                if not self.wait_for_recaptcha():
                    return False
                    
            # Submit the search form
            search_button = self.driver.find_element(By.ID, "ctl00_MainContent_btnSearch")
            search_button.click()
            
            # Wait for results to load
            self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, "searchResults")))
            print("Search submitted successfully")
            return True
            
        except TimeoutException:
            print("Timeout waiting for search results")
            return False
        except Exception as e:
            print(f"Error during search submission: {e}")
            return False
    
    def extract_foreclosure_data(self):
        """Extract foreclosure notice data from search results"""
        foreclosures = []
        
        try:
            # Get the page source and parse with BeautifulSoup
            soup = BeautifulSoup(self.driver.page_source, 'html.parser')
            
            # Look for result containers
            results = soup.find_all(['div', 'tr'], class_=['searchResult', 'resultRow', 'notice'])
            
            if not results:
                # Try alternative selectors
                results = soup.find_all('div', string=lambda text: text and 'foreclosure' in text.lower())
                
            print(f"Found {len(results)} potential results")
            
            for i, result in enumerate(results):
                try:
                    foreclosure_data = self.parse_foreclosure_notice(result)
                    if foreclosure_data:
                        foreclosures.append(foreclosure_data)
                        print(f"Extracted foreclosure {i+1}: {foreclosure_data.get('property_address', 'Unknown')}")
                        
                except Exception as e:
                    print(f"Error parsing result {i}: {e}")
                    continue
                    
            # Try pagination if available
            try:
                next_button = self.driver.find_element(By.LINK_TEXT, "Next")
                if next_button.is_enabled():
                    print("Found pagination - processing next page")
                    next_button.click()
                    time.sleep(3)
                    foreclosures.extend(self.extract_foreclosure_data())
            except:
                print("No more pages to process")
                
        except Exception as e:
            print(f"Error extracting foreclosure data: {e}")
            
        return foreclosures
    
    def parse_foreclosure_notice(self, result_element):
        """Parse individual foreclosure notice"""
        data = {}
        
        try:
            text = result_element.get_text(strip=True)
            
            # Extract property address using common patterns
            import re
            
            # Look for addresses (number + street)
            address_pattern = r'\d+[A-Za-z]?\s+[A-Za-z0-9\s,.]+(Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd|Circle|Cir|Court|Ct|Place|Pl)'
            address_match = re.search(address_pattern, text, re.IGNORECASE)
            if address_match:
                data['property_address'] = address_match.group().strip()
            
            # Extract dates
            date_pattern = r'\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b'
            dates = re.findall(date_pattern, text, re.IGNORECASE)
            if dates:
                data['auction_date'] = dates[0]
                
            # Extract sale times
            time_pattern = r'\b\d{1,2}:\d{2}\s*(?:AM|PM|A\.M\.|P\.M\.)\b'
            times = re.findall(time_pattern, text, re.IGNORECASE)
            if times:
                data['auction_time'] = times[0]
                
            # Extract mortgage/loan amounts
            amount_pattern = r'\$[\d,]+\.?\d*'
            amounts = re.findall(amount_pattern, text)
            if amounts:
                data['loan_amount'] = amounts[0]
                
            # Extract property descriptions
            if 'described as' in text.lower():
                desc_start = text.lower().find('described as')
                desc_text = text[desc_start:desc_start+200]
                data['property_description'] = desc_text.strip()
            
            # Extract county info
            counties = ['Jefferson', 'Madison', 'Mobile', 'Montgomery', 'Tuscaloosa', 'Baldwin']
            for county in counties:
                if county.lower() in text.lower():
                    data['county'] = county
                    break
                    
            # Store full text for reference
            data['full_text'] = text
            data['extraction_date'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            
            return data if data.get('property_address') or 'foreclosure' in text.lower() else None
            
        except Exception as e:
            print(f"Error parsing notice: {e}")
            return None
    
    def save_to_csv(self, foreclosures, filename=None):
        """Save foreclosure data to CSV file"""
        if not filename:
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f'alabama_foreclosures_{timestamp}.csv'
            
        try:
            df = pd.DataFrame(foreclosures)
            df.to_csv(filename, index=False)
            print(f"Saved {len(foreclosures)} foreclosure notices to {filename}")
            return filename
        except Exception as e:
            print(f"Error saving to CSV: {e}")
            return None
    
    def run_scraper(self, county="Jefferson", keyword="foreclosure"):
        """Main scraper execution"""
        try:
            print("Starting Alabama Foreclosure Scraper...")
            
            # Setup search form
            if not self.setup_search_form(county=county, keyword=keyword):
                return []
                
            # Handle reCAPTCHA and submit search
            if not self.handle_recaptcha_and_search():
                return []
                
            # Extract foreclosure data
            foreclosures = self.extract_foreclosure_data()
            
            print(f"Successfully extracted {len(foreclosures)} foreclosure notices")
            return foreclosures
            
        except Exception as e:
            print(f"Error running scraper: {e}")
            return []
        finally:
            self.cleanup()
    
    def cleanup(self):
        """Clean up resources"""
        try:
            self.driver.quit()
        except:
            pass

def main():
    """Main execution function"""
    scraper = ForeclosureScraper(headless=False)  # Set to True for headless mode
    
    try:
        # Run the scraper
        foreclosures = scraper.run_scraper(
            county="Jefferson",  # Change as needed
            keyword="foreclosure"
        )
        
        if foreclosures:
            # Save to CSV
            filename = scraper.save_to_csv(foreclosures)
            
            # Display summary
            print(f"\nScraping Summary:")
            print(f"Total foreclosures found: {len(foreclosures)}")
            print(f"Data saved to: {filename}")
            
            # Show sample data
            if foreclosures:
                print(f"\nSample foreclosure:")
                sample = foreclosures[0]
                for key, value in sample.items():
                    if key != 'full_text':  # Skip full text for brevity
                        print(f"{key}: {value}")
        else:
            print("No foreclosure notices found")
            
    except KeyboardInterrupt:
        print("\nScraping interrupted by user")
    except Exception as e:
        print(f"Error in main execution: {e}")

if __name__ == "__main__":
    main()
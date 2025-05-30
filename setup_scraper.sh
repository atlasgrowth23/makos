#!/bin/bash

echo "Setting up Alabama Foreclosure Scraper..."

# Install Python dependencies
pip install -r requirements.txt

# Install Chrome browser if not present
if ! command -v google-chrome &> /dev/null; then
    echo "Installing Google Chrome..."
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google-chrome.list
    sudo apt-get update
    sudo apt-get install -y google-chrome-stable
fi

# Install ChromeDriver
pip install webdriver-manager

echo "Setup complete! Run the scraper with:"
echo "python foreclosure_scraper.py"
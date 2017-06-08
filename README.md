# About
This is the lab on Chrome Headless.

```sh
# install chrome-remote-interface
npm init --yes
npm install --save chrome-remote-interface 

# setting alias (Or choose one of them)
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
alias chrome-canary="/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary"
alias chromium="/Applications/Chromium.app/Contents/MacOS/Chromium"

# If your chrome >= v59.0

# Printing the DOM
# The --dump-dom flag prints document.body.innerHTML to stdout:
chrome --headless --disable-gpu --dump-dom https://www.chromestatus.com/

# Create a PDF
# The --print-to-pdf flag creates a PDF of the page:
chrome --headless --disable-gpu --print-to-pdf https://www.chromestatus.com/



# Else please install Chrome Canary
brew install Caskroom/versions/google-chrome-canary

# find Canary
sudo find / -type d -name "*Chrome Canary.app"

# maybe you got not installed
/Applications/Google Chrome Canary.app

# runing
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --headless --remote-debugging-port=9222 --disable-gpu https://chromium.org
```

</br></br>

__Getting Started with Headless Chrome__

chrome updates: https://developers.google.com/web/updates/2017/04/headless-chrome

wiki: https://github.com/cyrus-and/chrome-remote-interface/wiki/Async-await-example


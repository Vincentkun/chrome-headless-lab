# About
This is the lab on Chrome Headless.

```sh
# install Chrome Canary
brew install Caskroom/versions/google-chrome-canary

# find Canary
sudo find / -type d -name "*Chrome Canary.app"

# maybe you got not installed
/Applications/Google Chrome Canary.app

# runing
/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary --headless --remote-debugging-port=9222 --disable-gpu https://chromium.org
```

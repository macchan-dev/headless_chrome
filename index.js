const chromeLauncher = require('lighthouse/chrome-launcher/chrome-launcher');

async function launchChrome(headless = true) {
  const chrome = await chromeLauncher.launch({
    port: 9222,
    chromeFlags: [
      '--disable-gpu',
      '--enable-logging',
      headless ? '--headless' : '',
    ]
  });
  return chrome;
}

launchChrome(true).then(launcher => {
});
module.exports = [{
  name: 'Google',
  url: 'https://www.google.com',
  waitForSelector: 'input[name="q"]',
  execute() {
    document.querySelector('input[name="q"]').value = 'Percy';
  }
}]
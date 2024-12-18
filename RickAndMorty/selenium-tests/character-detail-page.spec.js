const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
  const options = new chrome.Options();
  options.addArguments('--disable-usb-discovery', '--headless', '--no-sandbox', '--disable-dev-shm-usage');

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Navegar a la pàgina de llistat de personatges
    await driver.get('http://localhost:4200/personatges');

    // Esperar que es carreguin les cartes de personatges
    await driver.wait(until.elementLocated(By.css('.character-card')), 10000);

    // Trobar la primera carta de personatge i fer clic
    let firstCharacterCard = await driver.findElement(By.css('.character-card'));
    let characterName = await firstCharacterCard.findElement(By.css('.character-name')).getText();
    console.log('Character name on card:', characterName);
    await firstCharacterCard.click();

    // Esperar que es carregui la pàgina de detalls del personatge
    await driver.wait(until.elementLocated(By.css('div')), 10000); // Espera que el contenidor existeixi
    let characterNameElement = await driver.findElement(By.css('.character-name'));
    await driver.wait(until.elementIsVisible(characterNameElement), 5000); // Assegura't que és visible

    // Obtenir i imprimir els detalls
    let detailCharacterName = await characterNameElement.getText();
    let detailCharacterStatus = await driver.findElement(By.css('.character-status')).getText();
    let detailCharacterSpecies = await driver.findElement(By.css('.character-species')).getText();
    let detailCharacterGender = await driver.findElement(By.css('.character-gender')).getText();

    console.log('Detail Character Name:', detailCharacterName);
    console.log('Detail Character Status:', detailCharacterStatus);
    console.log('Detail Character Species:', detailCharacterSpecies);
    console.log('Detail Character Gender:', detailCharacterGender);

    // Validacions
    if (characterName === detailCharacterName) {
      console.log('Test passed: Character name matches');
    } else {
      console.log('Test failed: Character name does not match');
    }

    if (detailCharacterStatus && detailCharacterSpecies && detailCharacterGender) {
      console.log('Test passed: Character details are displayed correctly');
    } else {
      console.log('Test failed: Character details are not displayed correctly');
    }
  } finally {
    await driver.quit();
  }
})();

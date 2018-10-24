const { password } = require('./config');

const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ devtools: false, slowMo: 0, headless: false })
    const page = await browser.newPage()
    await page.bringToFront()

    await page.goto('https://www.coolboard.fun/')

    await page.evaluate(() => console.log(`url is ${location.href}`));

    let boards = '.sc-bdVaJa > .ui > .ui > p > a:nth-child(2)';
    await page.waitForSelector(boards)
    await page.click(boards)

    await page.waitForSelector('.App > .sc-bdVaJa > .ui > p > a')
    await page.click('.App > .sc-bdVaJa > .ui > p > a')

    let auth0LockInputEmail = 'div > div > .auth0-lock-input-email > .auth0-lock-input-wrap > .auth0-lock-input';
    await page.waitForSelector(auth0LockInputEmail)
    await page.click(auth0LockInputEmail)

    await page.type(auth0LockInputEmail, 'skylab@nurfuerspam.de')
    let auth0LockInputPassword = 'div > div > .auth0-lock-input-password > .auth0-lock-input-wrap > .auth0-lock-input';

    await page.type(auth0LockInputPassword, password)

    await page.click('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > button > span');

    //const firstNameCookie = cookies.find(c => c.name === 'firstName' && c.value === user.firstName)
    await page.waitForNavigation()
    await page.waitForNavigation()

    await page.waitForSelector(boards)
    await page.click(boards)

    //boards list
    const CreateNewBoard_button = '.App > .sc-bdVaJa > .sc-bdVaJa > .ui > .ui';
    await page.waitForSelector(CreateNewBoard_button)
    await page.click(CreateNewBoard_button)

    // create new board
    let createNewBoard_boardNameInput = '.content > .ui > .required > .ui > input';
    await page.waitForSelector(createNewBoard_boardNameInput)
    await page.click(createNewBoard_boardNameInput)
    await page.type(createNewBoard_boardNameInput, 'autotest')

    let popupModalActionButton1 = '.dimmable > .ui > .ui > .actions > .ui:nth-child(1)';
    await page.waitForSelector(popupModalActionButton1)
    await page.click(popupModalActionButton1)

    // open first board
    let boardsList1stEntry = '.sc-bdVaJa > .sc-bdVaJa > .ui > div > a';
    await page.waitForSelector(boardsList1stEntry)
    await page.click(boardsList1stEntry)

    //add card
    await page.waitForSelector('.App > .sc-bdVaJa > .ui > div > .ui:nth-child(2)')
    await page.click('.App > .sc-bdVaJa > .ui > div > .ui:nth-child(2)')

    // edit card
    await page.waitForSelector('div > div > div > div > .compact')
    await page.click('div > div > div > div > .compact')

    await page.waitForSelector('div > div > div > div > .sc-bwzfXH')
    await page.click('div > div > div > div > .sc-bwzfXH')

    await page.waitForSelector('.ui > .content > .ui > .required > label')
    await page.click('.ui > .content > .ui > .required > label')

    await page.waitForSelector(createNewBoard_boardNameInput)
    await page.click(createNewBoard_boardNameInput)

    await page.waitForSelector('.ui > .content > .ui > .field > textarea')
    await page.click('.ui > .content > .ui > .field > textarea')

    await page.waitForSelector(popupModalActionButton1)
    await page.click(popupModalActionButton1)

    // new section
    await page.waitForSelector('.App > .sc-bdVaJa > .ui > div > .ui:nth-child(3)')
    await page.click('.App > .sc-bdVaJa > .ui > div > .ui:nth-child(3)')

    await page.waitForSelector('div:nth-child(2) > div > div > div > .ui > .ellipsis')
    await page.click('div:nth-child(2) > div > div > div > .ui > .ellipsis')

    await page.waitForSelector('body > div > .ui > .ui > .trash')
    await page.click('body > div > .ui > .ui > .trash')

    await page.waitForSelector('.sc-bdVaJa > .ui > div > div > a')
    await page.click('.sc-bdVaJa > .ui > div > div > a')


    await page.waitForSelector(boards)
    await page.click(boards)

    await page.waitForSelector('.App > .sc-bdVaJa > .ui > p > a')
    await page.click('.App > .sc-bdVaJa > .ui > p > a')

    await page.waitForSelector(auth0LockInputEmail)
    await page.click(auth0LockInputEmail)

    await page.type(auth0LockInputEmail, 'skylab@nurfuerspam.de')
    await page.type(auth0LockInputPassword, password)

    await page.click('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > button > span');
    await page.waitForNavigation()
    await page.waitForNavigation()

    await page.waitForSelector(boards)
    await page.click(boards)

    await page.waitForSelector(boardsList1stEntry)
    await page.click(boardsList1stEntry)

    //open card
    await page.waitForSelector('div > div > div > div > .sc-bwzfXH')
    await page.click('div > div > div > div > .sc-bwzfXH')

    await page.waitForSelector('.dimmable > .ui > .ui > .actions > .ui:nth-child(2)')
    await page.click('.dimmable > .ui > .ui > .actions > .ui:nth-child(2)')
//close
    await page.waitForSelector('.App > .sc-bdVaJa > .ui > div > .ui:nth-child(1)')
    await page.click('.App > .sc-bdVaJa > .ui > div > .ui:nth-child(1)')

    await page.waitForSelector('.App > .sc-bdVaJa > .ui > div > a:nth-child(1)')
    await page.click('.App > .sc-bdVaJa > .ui > div > a:nth-child(1)')

    await page.waitForSelector('.sc-bdVaJa > .sc-bdVaJa > .ui > div > .ui')
    await page.click('.sc-bdVaJa > .sc-bdVaJa > .ui > div > .ui')

    await page.waitForSelector('.App > .sc-bdVaJa > .sc-bdVaJa > .ui > span')
    await page.click('.App > .sc-bdVaJa > .sc-bdVaJa > .ui > span')

    await page.waitForSelector('.App > .sc-bdVaJa > .sc-bdVaJa > .ui > span')
    await page.click('.App > .sc-bdVaJa > .sc-bdVaJa > .ui > span')

    await page.waitForSelector('.sc-bdVaJa > .ui > div > div > a')
    await page.click('.sc-bdVaJa > .ui > div > div > a')


    await browser.close()
})()
class: center, middle

# Modern Testing in Javascript World

.footnote[Go directly to [project site](https://github.com/gnab/remark)]     
---
# Agenda
Javascript Testing Meetup Oct. 26, 2018 Munich

1. Let's talk about testing
2. Unit testing with Jest
  * Junit.js - What is Jest
  * Runner - How to use Jest 
  * CLI
  * CI, Coverage
  
3. pptr
  
3. Cypress - modern e2e testing

---

# testing? 
    Why? 
    
    Testing Ice Cone -> Trophy: "Pokal"
# Let’s start with Unit tests
---
class: center, middle

<img src="assets/jest.png" width="100%" />
---
# Runner U Jasmine
      - sandboxed
      - watch mode
---
# Code / BDD style

```javascript
describe('testing', () => {
    it('should work in bdd ', () => {
        expect("jest contains jasmine").toContain('jasmine'))
    })
)}
```
* based on jasmine
* `expect` built-in
* [Expect API](https://jestjs.io/docs/en/expect)

---
    - CI - junit-reporter
    - Coverage
    - Why Jest?
      - easy setup
      - docu
      - ide: webstorm/vscode
      - batteries included: package of … diff/parse/...
---
# How jest saves time:
## watch
- ONLY changed files !!!
- watch mode 
- superb meaningful error reports
    - filter ...
- How to ...
    - Code + spec in one folder or __test__
---
# typical use-cases
## async
---
# typical use-cases
## mocking: manual/mock functions
---
# typical use-cases
## matchers
---
# Snapshot testing
## not writing many  input/result  maps
~ replace many asserts/equals
~ ui component comparison
---
# Integration testing
- Why?
toilet door
---
class: center,middle
# End-to-end testing
---
class: right
### Trophy by Kent C. Dodds
<img src="assets/trophy-all.png" width="80%" />
---
class: middle
# pptr

- headless / with puppeteer

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

> What can I do?
Most things that you can do manually in the browser can be done using Puppeteer! Here are a few examples to get you started:
---
class: middle
Generate **screenshots** and **PDFs** of pages.

Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e. "SSR" (Server-Side Rendering)).

Automate form submission, UI testing, keyboard input, etc.

Create an up-to-date, automated testing environment. Run your tests directly in the latest version of Chrome using the latest JavaScript and browser features.

Capture a timeline trace of your site to help diagnose performance issues.

Test Chrome Extensions.

https://try-puppeteer.appspot.com/
---
class: middle
Puppeteer is a Node library which provides a high-level API to control Chromium over the DevTools Protocol.

WHY?
That said, you can use Puppeteer to run tests against Chromium, e.g. using the community-driven jest-puppeteer. While this probably shouldn’t be your only testing solution, it does have a few good points compared to WebDriver:
---
Puppeteer requires zero setup and comes bundled with the Chromium version it works best with, making it very easy to start with. At the end of the day, it’s better to have a few tests running chromium-only, than no tests at all.
Puppeteer has event-driven architecture, which removes a lot of potential flakiness. There’s no need for evil “sleep(1000)” calls in puppeteer scripts.
---
Puppeteer runs headless by default, which makes it fast to run. Puppeteer v1.5.0 also exposes browser contexts, making it possible to efficiently parallelize test execution.
---
Puppeteer shines when it comes to debugging: 

 * flip the “headless” bit to false, add “slowMo”, and you’ll see what the browser is doing. 

You can even open Chrome DevTools to inspect the test environment.

---

# ✨🎪 Dream team: Jest + puppeteer
* https://github.com/smooth-code/jest-puppeteer
* Can start a server
* Run your tests using Jest & Puppeteer 

``` json
{
  "preset": "jest-puppeteer"
}```

``` js
describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })
  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })
})
```
---
Nice Expect API available:


``` js
// Assert that a button containing text "Home" will be clicked
await expect(page).toClick('button', { text: 'Home' })
```

``` js
// Assert that current page contains 'Text in the page'
await expect(page).toMatch('Text in the page')
```
``` js
// submit a form
const inputElement = await page.$('input[type=submit]');
await inputElement.click();
```
...

---
class: center,middle,inverse
![cypress](assets/cypresslogo.png)

---
# Cypress - What is it?

A free, open source, locally installed Test Runner + Dashboard Service for recording your tests.
  
  Git: 1st commit **Jun 5, 2014**
  
  Public beta: **Oct 9, 2017**
    
 - Test-Runner in an Electron-App
 - bundled with mocha, jquery, sinon, chai
 - Controlling Chrome Browser via devtools
---
# Demo
  - Let check it out: 
  - How? ...
---
# Simple example
# more complex
---
# Some Features
     - Super Fast
     - dashboard
     - time-travel
     - recording screenshots/videos/DOM+events
     - devtools built-in
     - Debuggability
     - Spies, Stubs, and Clocks, for full control
     - Automatic Waiting
     - Consistent Results: Our architecture doesn’t use Selenium or WebDriver.
     - easy side-effects, e.g. DB reset, inject data
     - tighly integrated with Browser, e.g. cookies
---
# Missing/Limits
     - Limited to chrome
     - some specific browser features (?)
     - only javascript
     - no jest support
    https://docs.cypress.io/guides/references/trade-offs.html#Permanent-trade-offs-1
---
# Why soo coool?
     - Integration testing from user perspective
     - fast
     - easy: all stuff built-in
     - Network XHR interception/mock/spy
     - Parallel testing (easy scaling CI)
## Compared to selenium:
    - faster
    - autorun/rerun
    - all in one place
    - more stable, compared to wire protocol
---
# planned features / roadmap
[Upcoming-Features](https://docs.cypress.io/guides/references/roadmap.html#Upcoming-Features):

    - Cross Browser Support (Firefox, IE11) - #310
    - screen diffing
    - native events / mobile device support

---
# Extras, other topics

- Other advanced testing stuff
  - visual snapshot testing - with storybook / chromatest-loop
  - In-browser tests with selenium nightmare?

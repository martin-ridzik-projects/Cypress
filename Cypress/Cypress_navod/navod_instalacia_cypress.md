Pred inštaláciou je potrebné mať nainštalované aktuálne verzie: 

VisualStudioCode: https://code.visualstudio.com/

Node.js: https://nodejs.org/en/download

# 1.  Vytvorenie priečinka projektu
1.1 Na ploche vytvoríme priečinok s názvom: `Framework` 

1.2 Otvoríme VisualStudioCode → File → Open Folder → vyberieme priečinok `Framework`.

# 2.  Otvorenie terminálu 
2.1 V hornom menu klikneme na Terminal → New Terminal

2.2 Terminál sa otvorí v dolnej časti VS Code. Tu zadáme všetky príkazy. 

# 3.  Inicializácia `Node.js` projektu
Do terminálu zadáme prvý príkaz:  
`npm init`

package name: `framework_cypress` (bez veľkých písmen) --> (enter)

version: 1.0.0 --> (enter)

description: `Moj framework cypress` --> (enter) 

entry point: (index.js) --> (enter)

test command, git repository, keywords, author, license --> (nezadávame nič + enter)

> po tomto nastavení sa vytvorí v ľavom paneli VSC súbor `package.json`

> NEZATVARAME TERMINAL, bude potrebný na dalšie kroky!

# 4.  Inštalácia Cypress
Do terminálu zadáme druhý príkaz:
`npm install cypress --save-dev`

-  Vytvorí sa priečinok `node_modules` a súbor `package-lock.json`
  
- `node_modules` obsahuje všetky balíčky a závislosti projektu
  
- `package-lock.json` zabezpečuje rovnaké verzie balíčkov pre všetkých

# 5.  Prvé spustenie Cypress 
Do terminálu zadáme tretí príkaz:
`npx cypress open` 

- Otvorí sa Cypress v prehliadači
- 
- Klikneme na E2E Testing (Not Configured)
  
- Vyberieme prehliadač (Chrome) - Start E2E Testing in Chrome
  
- Klikneme na Scaffold example specs - Okay, I got it!
  
- Môžeme si pozrieť ukážky testov v priečinku 1-getting-started

# 6.  Štruktúra priečinkov vo VS Code
6.1 Po prvom spustení Cypressu sa vo VS Code zobrazí priečinok `cypress` 

`e2e` - tu budeme vytvárať testy 
`fixtures` - statické testovacie dáta 
`support` - CSS selektory a helper funkcie 

# 7.  Vytvorenie testovacích súborov
7.1 Pravým kliknutím na `e2e` - New Folder - názov `prvyPriecinokTest`

7.2 Vytvorenie súborov
- `prihlasenieTest.cy.js`
- `produktyTest.cy.js`

> Poznámka: .cy.js prípona je povinná, inak testy Cypress nezobrazí.

# 8.  Podpora a page object
8.1 Pravým klikom na `support` - New Folder - názov `strankaObjekty` 

8.2 Vytvorenie súborov 
- `prihlasenieStranka.js`
- `produktyStranka.js`

# 9. Projekt je pripravený 
> Cypress je nainštalovaný a nakonfigurovaný

> Môžeme začať písať testy do súboru prihlasenieTest.cy.js a produkty.cy.js

> Pre spustenie testov si znova otvoríme terminál a zadáme príkaz npx cypress open 




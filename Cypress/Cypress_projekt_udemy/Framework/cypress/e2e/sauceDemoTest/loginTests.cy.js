/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";          // import triedy LoginPage zo zložky support/pageObjects
import { ProductPage } from "../../support/pageObjects/productsPage";     // import triedy ProductPage zo zložky support/pageObjects

beforeEach(()=>{                                                          // beforeEach otvorí stránku pred každým testom 
cy.visit('https://www.saucedemo.com/');                                   // otvorí stránku
})


describe('Testing Login Page', ()=>{                                      // Popis testovacej sady: testovanie prihlasovacej stránky

    let loginPage = new LoginPage();                                      // loginPage je inštancia triedy LoginPage obsahujúca jej metódy a selektory
    let productsPage = new ProductPage();                                 // productsPage je inštancia triedy ProductPage obsahujúca jej metódy a selektory

    it('Login with correct credentials', ()=>{                            // Test: Prihlásenie so správnymi údajmi
        loginPage.enterUsername('standard_user');                         // vloží prihlasovacie meno do príslušného poľa
        loginPage.enterPassword('secret_sauce');                          // vloží heslo do príslušného poľa
        loginPage.clickLoginButton();                                     // klikne na tlačidlo prihlásenia
        productsPage.cartButtonExists();                                  // overí, či po prihlásení existuje tlačidlo košíka

    })

    it('Login with incorrect credentials', ()=>{                          // Test: Prihlásenie s nesprávnymi údajmi
        loginPage.enterUsername('standard_user');                         // vloží prihlasovacie meno do príslušného poľa
        loginPage.enterPassword('secret_sauce_wrong');                    // vloží nesprávne heslo do príslušného poľa
        loginPage.clickLoginButton();                                     // klikne na tlačidlo prihlásenia
        loginPage.loginPageElements.errorMessage().should('be.visible');  // overí, či sa po nesprávnom prihlásení zobrazí chybová hláška
        
   });

})
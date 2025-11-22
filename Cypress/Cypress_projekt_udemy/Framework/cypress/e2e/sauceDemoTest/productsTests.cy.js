/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";           // import triedy LoginPage zo zložky support/pageObjects
import { ProductPage } from "../../support/pageObjects/productsPage";      // import triedy ProductPage zo zložky support/pageObjects


describe('Test for page products', ()=>{                                   // Popis testovacej sady: Testovanie produktov na stránke

     let loginPage = new LoginPage();                                      // loginPage je inštancia triedy LoginPage obsahujúca jej metódy a selektory
     let productsPage = new ProductPage();                                 // productsPage je inštancia triedy ProductPage obsahujúca jej metódy a selektory
     it('Add one product into cart', ()=> {
        //cy.visit('https://www.saucedemo.com/');                          // otvorí stránku
        //loginPage.enterUsername('standard_user');                        // vloží prihlasovacie meno do poľa
        //loginPage.enterPassword('secret_sauce');                         // vloží heslo do poľa
        //loginPage.clickLoginButton();                                    // klikne na tlačidlo prihlásenia

        cy.loginToSauceApp('standard_user', 'secret_sauce');               // použitie vlastnej Cypress príkazovej metódy definovanej v commands.js na prihlásenie

        productsPage.addBackPackToCard();                                  // pridá položku "Backpack" do košíka
        productsPage.verifyBackPackRemoveButtonAppears();                  // overí, či sa po pridaní "Backpack" do košíka zobrazí tlačidlo "Remove"

        productsPage.elements.cartBadgeNumber().should('have.text', '1')   // overí, či sa počet položiek v košíku zobrazuje ako '1'
  
     })
});
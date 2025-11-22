/// <reference types="cypress" />

export class LoginPage {                                    // objekt obsahujúci selektory prvkov prihlasovacej stránky

    loginPageElements = {
        userNameInput: () => cy.get('#user-name'),          // pole pre zadanie používateľského mena (#id)
        passwordInput: () => cy.get('#password'),           // pole pre zadanie hesla (#id)
        loginButton: () => cy.get('#login-button'),         // tlačidlo prihlásenia (#id)
        errorMessage: () =>cy.get('[data-test="error"]')    // element chybovej hlášky pri nesprávnom prihlásení
};

enterUsername(username){
    this.loginPageElements.userNameInput().type(username);  // vloží zadané používateľské meno do poľa pre username
};

enterPassword(password){
    this.loginPageElements.passwordInput().type(password);  // vloží zadané heslo do poľa pre password
};

clickLoginButton(){
    this.loginPageElements.loginButton().click();           // klikne na tlačidlo prihlásenia
 }

login(username, password ){                                 // vykoná kompletné prihlásenie: zadá používateľské meno, heslo a klikne na tlačidlo prihlásenia
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
   }
}
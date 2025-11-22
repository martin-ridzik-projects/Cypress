/// <reference types="cypress" />

export class ProductPage {           // objekt obsahujúci selektory prvkov produktovej stránky
    elements = {
        backpackAddtoCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),  // tlačidlo pre pridanie "Backpack" do košíka
        backpackRemoveButton: () => cy.get ('[data-test="remove-sauce-labs-backpack"]'),         // tlačidlo pre odstránenie "Backpack" z košíka
        cartButton: () => cy.get('[data-test="shopping-cart-link"]'),                            // tlačidlo pre prechod do košíka
        cartBadgeNumber: () => cy.get('.shopping_cart_badge'),                                   // element zobrazujúci počet položiek v košíku (okrúhly znak nad košíkom)
    };

        cartButtonExists(){
            this.elements.cartButton().should("be.visible");            // overí, či je tlačidlo košíka viditeľné na stránke
        };

        addBackPackToCard(){
            this.elements.backpackAddtoCartButton().click();            // klikne na tlačidlo pridania "Backpack" do košíka
        };

        verifyBackPackRemoveButtonAppears(){
            this.elements.backpackRemoveButton().should('be.visible');  //  overí, či sa po pridaní "Backpack" do košíka zobrazí tlačidlo "Remove"
        };
};


/// <reference types="cypress" />

it('should choose an item to order', () => {
    cy.visit('https://huntingpony.com/');
    cy.get('[data-index="4"] > .header__collections-controls > .header__collections-link').click();
    cy.get('[data-product-id="339731548"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
    cy.wait(1000);
    cy.get('.add-cart-counter__btn').click();
    cy.wait(1000);
    cy.get('.add-cart-counter__detail').click();
    cy.get('.cart-controls > .button').click();
    cy.get('.decorated-title')
    cy.contains('Оформление заказа').should('be.visible');
});
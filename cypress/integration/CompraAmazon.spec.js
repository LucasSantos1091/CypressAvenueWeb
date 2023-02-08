/// <reference types="Cypress" />
//import loc from "../../support/locators.js";
const loc = require('../support/locators').LOCATORS;
beforeEach(function() {
    cy.visit('https://www.amazon.com.br/')
})

describe('Cenário01', function() {
    it('Adicionar um produto no carrinho', function() {
        cy.get(loc.Objeto).type('memoria ram');
        cy.get(loc.Pesquisa).click();
        cy.get(loc.Item01).click();
        cy.get(loc.BotaoCarrinho).click();
        cy.get(loc.FecharPedido).click();
        cy.contains('Subtotal (1 item)')


    })
})
describe('Cenário02', function() {
    it('adicionar o produto 3 e conferir valor total', function() {
        cy.get(loc.Objeto).type('memoria ram');
        cy.get(loc.Pesquisa).click();
        cy.get(loc.Item03).click();
        cy.get(loc.Valor).invoke('text').then(($value_1) => {
            cy.get(loc.BotaoCarrinho).click();
            cy.get(loc.ValorCarrinho).invoke('text').then(($value_2) => {
                expect($value_1).to.eq($value_2)
            })
        })
        cy.get(loc.FecharPedido).click();
        cy.contains('Subtotal (1 item)')
    })
})
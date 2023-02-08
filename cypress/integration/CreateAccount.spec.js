/// <reference types="Cypress" />

const Name = require('faker-br/lib/name');

//import loc from "../../support/locators.js";
const loc = require('../support/locators').LOCATORS;
beforeEach(function() {
    cy.visit('https://www.amazon.com.br/')
})

describe('Cenário03', function() {
    const faker = require('faker')
    let username = faker.name.findName()
    let email = faker.internet.email()
    let password = faker.internet.password()
    it('Criar uma nova conta', function() {
        cy.get(loc.CriarConta).click();
        cy.get(loc.BotaoConta).click();
        cy.get(loc.Nome).type(username);
        cy.get(loc.Email).type(email);
        cy.get(loc.Password).type(password);
        cy.get(loc.ConfirmPassword).type(password);



    })
})
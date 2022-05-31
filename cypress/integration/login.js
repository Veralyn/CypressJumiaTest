import{loginPage} from "../fixtures/selectors.js"

describe ("Given that i am on the loginPage", function(){
    beforeEach(function(){
        cy.visit("/")
    });

    it("I should be able to login with a valid email and password", function(){

        cy.get(loginPage.accountBtn).click()
        cy.get(loginPage.signInBtn).click()
        cy.get('.wrapper').click().get(loginPage.emailField).type(loginPage.emailText, {force: true})
        cy.get('.wrapper').click().get(loginPage.passwordField).type(loginPage.passwordText, {force: true})
        cy.get(loginPage.loginBtn).click()
        // cy.wait(3000)

    })


it("I should not be able to login with an invalid email and password", function(){

    cy.get(loginPage.accountBtn).click()
    cy.get(loginPage.signInBtn).click()
    cy.get('.wrapper').click().get(loginPage.emailField).type(loginPage.emailText, {force: true})
    cy.get('.wrapper').click().get(loginPage.passwordField).type(loginPage.passwordText, {force: true})
    cy.get(loginPage.loginBtn).click()
    // cy.wait(3000)

}) 


})
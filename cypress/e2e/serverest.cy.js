const faker = require('faker-br');
 
function geraPessoa(){
    var pessoa = {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        senha: 'abc123'
    }

    return pessoa
 }

describe('Cadastro de usuário adminstrador', () => {
    var pessoa = geraPessoa();
    
    it('Deve abrir o site', () => {
        cy.visit('https://front.serverest.dev/login')
    })

    it('Muda para a página de cadastro', () => {
        cy.get('[data-testid="cadastrar"]').click();
    })

    it('Preenche o formulário', () => {
        cy.get('[data-testid="nome"]').type(pessoa.nome);
        cy.get('[data-testid="email"]').type(pessoa.email);
        cy.get('[data-testid="password"]').type(pessoa.senha);
    })

    it('Marcar caixinha de administrador', () => {
        cy.get('[data-testid="checkbox"]').click();
    })

    it('Enviar formulário', () => {
        cy.get('[data-testid="cadastrar"]').click();
        cy.wait(6000) 
    })

})

describe('Cadastro de usuário normal', () => {
    var pessoa = geraPessoa();
    
    it('Deve abrir o site', () => {
        cy.visit('https://front.serverest.dev/login')
    })

    it('Muda para a página de cadastro', () => {
        cy.get('[data-testid="cadastrar"]').click();
    })

    it('Preenche o formulário', () => {
        cy.get('[data-testid="nome"]').type(pessoa.nome);
        cy.get('[data-testid="email"]').type(pessoa.email);
        cy.get('[data-testid="password"]').type(pessoa.senha);
    })

    it('Enviar formulário', () => {
        cy.get('[data-testid="cadastrar"]').click();
        cy.wait(6000) 
    })

})

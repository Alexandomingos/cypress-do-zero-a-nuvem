describe('Inobag|BackOffice', () => {
  beforeEach(() => {
    cy.visit('https://portal.smartlogweb.com')
  })

  it('Preenchimento de login com CNPJ', () => {
    // Habilita o campo de CNPJ
    cy.get('#ext-element-37').click()

    // Força preenchimento do CNPJ mesmo com máscara
    cy.get('#ext-element-55').then($input => {
      const el = $input[0];
      el.value = '07526557000100';
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      el.dispatchEvent(new Event('blur', { bubbles: true }));
    })

    // Preenche usuário e senha
    cy.get('#ext-element-68').type('monica.anderson', { delay: 100 }).blur()
    cy.get('#ext-element-80').type('LD%v+@zp2ME7DH*b', { delay: 100 }).blur()

    // Aguarda o botão estar habilitado e clica nele
    cy.get('button[data-componentid="ext-button-1"]')
      .should('not.be.disabled')
      .click({ force: true })
      cy.get('button[data-componentid="ext-button-5"]').click()


// Aguarda o elemento com as opções ficar visível
cy.get('#ext-element-226').click({ force: true });
     
  })

 
})

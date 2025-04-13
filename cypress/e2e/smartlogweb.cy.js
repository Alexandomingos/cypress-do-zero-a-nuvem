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

    // Adicionar uma separação
    cy.get('#ext-element-357').click()

 // Aguarda o botão do combo de separação aparecer e clica
cy.get('#ext-element-473', { timeout: 10000 }).should('be.visible').click({ force: true });

// Agora espera o combo com as opções aparecer
cy.get('#ext-element-641', {timeout: 15000 }).should('be.visible');

// Clica na opção "Manual"
cy.get('[id^="ext-simplelistitem"]').contains('Manual').click({ force: true });

// Insere o local da baixa
cy.get('#ext-expandtrigger-3 > .x-icon-el', {timeout: 10000 }).type('Moon').click();

// Insere o colobarador 
//cy.get('#ext-expandtrigger-4 > .x-icon-el').type('monica.anderson', { delay: 200 }).blur();
cy.get('#ext-element-504',  {timeout: 15000 }).type('Monica', { delay: 200 }).blur();
cy.get('[id^="ext-simplelistitem"]', { timeout: 10000 })
  .should('contain.text', 'Monica');

// Clica no botão +Adiconar Itens quando o mesmo for habilitado
cy.get('#ext-element-600').click();

  })

})
const { I } = inject();
 
Given('que estou logado na conta midway', () => {
  
  I.waitForElement('Abrir minha conta Midway', 20)
  // Botão Abrir minha conta Midway
  I.tap('Abrir minha conta Midway'); 

  // Notificação permitir
  I.waitForElement( '//android.widget.Button[2]', 5)
  I.tap('//android.widget.Button[2]'); 

  // Botão entrar
  I.tap('Entrar'); 
  
  // Campo CPF
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '71882988310');
  I.waitForElement('Continuar', 10)

  // Botão Continuar
  I.tap('Continuar')
  I.wait(10);

   //Campo Senha
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '102030');  
 
   //Botão Entrar
   I.tap('Entrar');
   I.wait(10); 

});

When('clico em depósito por boleto', () => {

    //Botão Depósito por boleto
    I.waitForVisible('Depósito por boleto',20);
    I.tap('Depósito por boleto');  

    I.wait(20);   

});

When('preencho campo qual o valor do depósito?', () => {

   // Campo qual o valor do depósito?
   I.waitForVisible('//android.view.ViewGroup//android.widget.EditText',5);
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '2.000,00');

   // Botão Gerar boleto
   I.waitForVisible('Gerar boleto',5);
   I.tap('Gerar boleto') 

   I.wait(10); 
   
});

Then('boleto gerado com sucesso', () => {
   
   //Validando Boleto gerado com sucesso
   I.waitForVisible('Boleto gerado com',5);
   I.waitForVisible('Sucesso!',5);

});  
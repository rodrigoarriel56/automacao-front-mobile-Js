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
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '92322397369');
  I.waitForElement('Continuar', 5)

  // Botão Continuar
  I.tap('Continuar')
  I.wait(5);

   //Campo Senha
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '102030'); 
 
   //Botão Entrar
   I.tap('Entrar');
   I.wait(10); 

});

When('clico em extrato', () => {

  //Botão Extrato
  I.tap('Extrato');
   
});

Then('movimentação do extrato é apresenta com sucesso', () => {
    
    I.waitForVisible('Conta simples', 20);
    I.waitForVisible('Extrato', 5); 

});  
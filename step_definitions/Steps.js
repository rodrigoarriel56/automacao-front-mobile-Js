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
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '11947458817');
  I.waitForElement('Continuar', 5)

  // Botão Continuar
  I.tap('Continuar')
  I.wait(5); 
  
  //Campo Senha
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '010203');
 
  //Botão Entrar
  I.tap('Entrar')
  I.wait(30); 

});

When('clico em saldo ', () => {

  
});

Then('movimentação da conta é apresenta com sucesso', () => {
  
});
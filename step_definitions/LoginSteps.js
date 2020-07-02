const { I } = inject();
 
Given('que estou na tela de login', () => {
  
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
  
  
});

When('clico em entrar', () => {

   //Campo Senha
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '102030'); 
 
  //Botão Entrar
  I.tap('Entrar');
  I.wait(10); 
 
  
});

Then('apresenta home do app midway', () => {
  
  I.waitForVisible('Bem-vindo à Midway!',10);    

});  
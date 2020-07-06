const { I } = inject();
 
Given('que estou logado na conta midway', () => {
  
  I.waitForElement('Abrir minha conta Midway', 20)
  // Botão Abrir minha conta Midway
  I.tap('Abrir minha conta Midway'); 

  // Notificação permitir
  I.waitForElement( '//android.widget.Button[2]', 5)
  I.tap('//android.widget.Button[2]'); 

  // Botão entrar
  I.waitForElement(`//android.view.ViewGroup/android.view.ViewGroup[2]`, 5)
  I.tap('Entrar'); 
  
  // Campo CPF
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '85497507000');
  I.waitForElement('Continuar', 20)

  // Botão Continuar
  I.tap('Continuar')
  I.wait(10);

   //Campo Senha
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '102030');  
 
   //Botão Entrar
   I.tap('Entrar');
   I.wait(10); 

});

When('clico em perfil da conta', () => {

    //Botão menu perfil 
    I.waitForVisible('//android.view.ViewGroup//android.widget.TextView[3]',20);
    I.tap('//android.view.ViewGroup//android.widget.TextView[3]');  

    I.wait(10);   

});

When('clico encerramento conta simples', () => {

    //Botão Encerrar conta simples
    I.waitForVisible('Encerrar conta simples', 5);
    I.tap('Encerrar conta simples');
  
    I.wait(10);
 
});

Then('conta simples encerrada com sucesso', () => {
    
    I.waitForVisible('Sair', 1);
    I.tap('Sair');
    I.wait(5);
  
});  
const { I } = inject();

Given('que estou logado na conta midway', () => {
  
  I.waitForElement('Abrir minha conta Midway', 20)
  // Botão Abrir minha conta Midway
  I.tap('//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]'); 

  // Notificação permitir
  I.waitForElement( '//android.widget.Button[2]', 5)
  I.tap('//android.widget.Button[2]'); 

  // Botão entrar
  I.waitForElement(`//android.view.ViewGroup/android.view.ViewGroup[2]`, 5)
  I.tap('Entrar'); 
  
  // Campo CPF
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '71882988310');  //gerarCPF(); //71882988310
  I.waitForElement('Continuar', 20)

  // Botão Continuar
  I.tap('Continuar')
  I.wait(20);

   //Campo Senha
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '102030'); 
 
   //Botão Entrar
   I.tap('Entrar');
   I.wait(20); 

});

When('clico em extrato', () => {

  //Botão Extrato
  I.tap('Extrato');

  I.wait(20);

  //Botão Entradas
  I.waitForVisible('Entradas', 3); 
  I.tap('Entradas');

   //Botão Saídas
  I.waitForVisible('Saídas', 3); 
  I.tap('Saídas');

  //Botão Futuro
  I.waitForVisible('Futuro', 3); 
  I.tap('Futuro');

});

Then('movimentação do extrato é apresenta com sucesso', () => {
    
    I.waitForVisible('Conta simples', 5);
    I.waitForVisible('Extrato', 5);  

});  
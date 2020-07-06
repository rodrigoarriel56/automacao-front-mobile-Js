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
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '71882988310');
  I.waitForElement('Continuar', 20)

  // Botão Continuar
  I.tap('Continuar')
  I.wait(5);

   //Campo Senha
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '102030'); 
 
   //Botão Entrar
   I.tap('Entrar');
   I.wait(10); 

});

When('clico em transferencia outros bancos', () => { 

  //Botão transferencia
  I.tap('Transferência');
  I.wait(10);  

  //Campos Instituição da conta 
  I.tap('Instituição da conta');

  //Campo pesquisar conta
  I.waitForVisible('//android.view.ViewGroup//android.widget.EditText',10) 
  I.fillField('//android.view.ViewGroup//android.widget.EditText', '336'); 

  //Clicar na Instituição
  I.waitForVisible('336 - BANCO C6 S.A.',5)
  I.tap('336 - BANCO C6 S.A.',5) 

   //Inserir Conta
   I.tap('Conta'); 
   I.waitForElement('//android.view.ViewGroup[3]//android.widget.EditText',5)
   I.fillField('//android.view.ViewGroup[3]//android.widget.EditText','1212273'); 
    
   //Botão Continuar
   I.tap('Continuar'); 
   I.wait(10);  

   //Campo Qual valor quer transferir
   I.fillField('//android.view.ViewGroup//android.widget.EditText', '100,00'); 
   I.tap('Continuar')
   I.wait(20);  
   
   //Confirma espera da data e clicar no botão confirmar
   I.waitForVisible('//android.view.ViewGroup//android.widget.EditText',30)
   I.tap('Continuar')

   //Idenficação do meu extrato
   I.waitForVisible('//android.view.ViewGroup//android.widget.EditText',10); 
   I.fillField('//android.view.ViewGroup//android.widget.EditText', 'Pagamento outros bancos');
   
});   

Then('transferência entre outros bancos efetuado com sucesso', () => {
  
  //Confirmar
  I.tap('Confirmar')  
  I.wait(20); 

});    
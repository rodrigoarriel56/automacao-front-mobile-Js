#language: pt

@Login
Funcionalidade: Login do usuário midway
  Como usuário do app Midway
  Rodrigo deseja fazer o login
  Para que ele possa acessar sua conta

  Contexto:
    Dado que "Rodrigo" acessa a tela de login do app midway

  @valido @Prioridade:alta
  Cenario: Acessar login usuário midway
    E que ele preenche corretamente seus dados
    Quando ele aciona a opção para entrar
    Entao deve ser apresentada a home do app midway
#language: pt
@OnboardingContaPagamento
Funcionalidade: Criação de conta pagamento

  Cenario: Validar a criação de conta pagamento
    Dado que aciono a opção parar abrir minha conta midway
    E aceito os termos de uso acionando a opção para entrar
    E preencho todos os campos solicitados corretamente acionando a opção continuar quando necessário
    E após aceitar a permissão de Biometria Facial tiro corretamente uma foto
    E informo corretamento o codigo de acesso (token) recebido por sms
    Quando cadastro uma nova senha corretamente
        
    # E preencho o campo cpf
    # E preencho o campo nome completo
    # E preencho o campo Como quer ser chamado
    # E preencho o campo Celular
    # E preencho o campo E-mailInicio
    # E preencho o campo Data de Nascimento
    # E aciono botao continuar
    # E preencho token
    # E preencho senha
    Então a conta pagamento deve ser criada com sucesso
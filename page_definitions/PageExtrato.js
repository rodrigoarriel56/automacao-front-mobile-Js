const { I } = inject();

module.exports = {
  // inserir o acionamento do botão extrato na home
  btnExtrato: {
    xpath: '//android.view.ViewGroup/android.view.ViewGroup[3]' 
  },

  // Link na tela de extrato que direciona para conta remunerada
  btnContaReminerada: {
    xpath: '//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]' 
  }

  

}
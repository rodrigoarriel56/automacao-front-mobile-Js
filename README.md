
## 1-) Rodar o Sh com as Dependencias:

Acessar o diretório por terminal e rodar o seguinte comando:
$ sh install_dependencies.sh

## 2-) Configurar seu Bash Profile:

Adicionar isso no seu ~/.bash_profile
```
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH/:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home)
#export PATH=${JAVA_HOME}/bin:$PATH
```

## 3-) Rodar o comando para salvar o bash profile:
Run: `$ source ~/.bash_profile`


Se rodar o appium-doctor e aparecer problema no bin, por favor descomentar a ultima linha do bin e rodar o comando do passo 3 novamente.

## Configuração
Certifique-se de que você tem CodeceptJS instalado. Você também precisará instalar Appium. Sugerimos usar appium-médico para verificar se o seu sistema está pronto para testes móveis.

npm i -g appium-doctor
Se tudo estiver bem, continue instalando o Appium. Se não, considere usar alternativas baseadas em nuvem como SauceLabs Ou BrowserStack. Os serviços em nuvem fornecem a appium hospedado com dispositivos móveis reais e emulados.

## Para instalar o Appium use npm:

npm i -g appium
Então você precisa preparar a aplicação para execução. Ele deve ser embalado em apk (para Android) ou .ipa (para iOS) ou zip.

Em seguida, é lançar o emulador ou conectar dispositivo físico. Uma vez preparados, inicie o Appium:

appium

Para executar o teste móvel, você precisa de um emulador de dispositivo (disponível com Android SDK ou iOS), dispositivo real conectado para testes móveis. Alternativamente, você pode executar Appium com emulador de dispositivo dentro do contêiner Docker.

## O CodeceptJS deve ser instalado com suporte ao webdriverio:

npm install codeceptjs webdriverio --save

## Configurando
Inicialize o CodeceptJS com comando:init

npx codeceptjs init


## 4-) Json para configurar o Appium Desktop:

Android:
{
  "platformName": "Android",
  "deviceName": "920110594119334a",
  "app": "C:\\GitMobile\\FrameworkMobile\\automationMobile\\App\\Android\\app-qa-release0.64.0.apk",
  "automationName": "uiautomator2"
}`

IOS:
 `{
  "app": "C:\\GitMobile\\FrameworkMobile\\automationMobile\\App\\iOS\\.ipa"",
  "platformName": "iOS",
  "platformVersion": "12.2",
  "deviceName": "iPhone X"
}`

## 5-) Execute todos os testes a partir do dir atual:

## Comando para executar teste: npx codeceptjs run

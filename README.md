### Iniciando a Automação de Testes com Appium. O Appium foi desenvolvido pelo mesmo grupo do Selenium, vou citar alguém em especial "Kazuaki MATSUO", apelido de KazuCocoa, como eu acompanho direto a comunidade ele é o cara que dar manutenção no Appium Client. Atualmente implementou várias novidades, uma delas é Opencv dentro do Appium.

#### Pre-conditions (Precisamos primeiro instalar as Ferramentas/Softwares):

JAVA - Linguagem de Programação que vamos usar.
JAVA - Version 8.1

-> Windows (https://www.java.com/pt_BR/) 
    Abra o Internet Explorer(ou seu navegador de preferencia) e acesse Java.com
	Clique no botão Download gratuito do Java e, depois, em Concordar e Iniciar o Download Gratuito.
 	Se for solicitada uma senha de administrador ou confirmação, digite a senha ou confirme.
	Na Barra de notificação, clique em Executar. Se for solicitada uma senha de administrador ou confirmação,
	digite a senha ou confirme.
	Selecione Instalar > Fechar.
	Se você estiver tendo problemas para instalar ou usar o Java, procure por respostas na Central de Ajuda do Java.
	 
Observação
	Em computadores com o Windows 8.1, o Java só funcionará no Internet Explorer para área de trabalho.

-> Linux (sudo apt-get install java)
	Altere o diretório para o local onde você gostaria que o JRE fosse instalado. cd / directory_path_name. Por exemplo, 
	para instalar o software no diretório /usr/java: ...
	Mova os binários de arquivo compactado . tar. ...
	Descompacte o tarball (arquivo compactado TAR) e instale o Java. Em processadores SPARC de 64 bits:
    
    
-> MAC (brew install java)
	Faça download do arquivo jre-8u65-macosx-x64.dmg.
	Revise e concorde com os termos do contrato de licença antes de fazer o download do arquivo.
	Clique duas vezes no arquivo .dmg para inicializá-lo
	Clique duas vezes no ícone do pacote para iniciar o Assistente de instalação

## Repositorio
-> Git (https://git-scm.com/downloads)

->Install nodejs (https://nodejs.org/en/download/)

## Repositorio

-> Git - Nosso projeto será versionado, ou seja o código fonte vai ser armazendo em versões (distributed version control system).  
-> Nodejs - O Appium Server é puro JavaScript e algumas partes em Java, algumas coisas estão em .jar como alguns drivers.  


## Appium-doctor
Verifica se todas as dependências do Appium são atendidas e se todas as dependências estão configuradas corretamente. Para instalar o appium-doctor basta colar no seu terminal:

npm install -g appium-doctor  # instalar o appium-doctor
```
Uma vez que o node.js, npm e o appium-doctor estão instalados, você pode usar o comando abaixo para verificar se todas as dependências do appium são atendidas:

appium-doctor             # verificar todas as dependencias necessárias para usar o appium
appium-doctor --android   # verificar as dependências somente para android
appium-doctor --ios       # verificar as dependências somente para ios
```

## Instalando o Appium

### Appium Server
O Appium posso dizer que é dividido em duas partes Client e Server. O Client que é a Biblioteca que vai desenvolver os comandos, a mesma é dividido em duas (appium_lib, appium_lib_core), appium_lib ela depende do appium_lib_core, e a appium_lib_core depede do selenium-webdriver. Podemos afirmar que existe várias dependencias uma vez instalada da forma errada vai dar problema no Appium.

Execute o comando abaixo para instalar o Appium:
```bash
npm install -g appium
```

Após o término, vamos iniciar o servidor do Appium. No linux é indicado usar o Sudo para dar as devidas permissões.

No Windows abra o terminal como Admin e digite o comamdo abaixo: 
```bash
appium
```

Linux:
```bash
sudo appium
```

> Para atualizar o Appium, você precisará executar `npm update -g appium`.

## Agora vamos ao Projeto de Fato:

### 1. Download Project

## 1-) Rodar o Sh com as Dependencias:

Acessar o diretório por terminal e rodar o seguinte comando:
$ sh install_dependencies.sh

## 2-) Configurar seu Bash Profile:

Adicionar isso no seu sudo vi ~/.bash_profile
```
export ANDROID_HOME=/Users/$(whoami)/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH/:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home)
#export PATH=${JAVA_HOME}/bin:$PATH
```

## 3-) Rodar o comando para salvar o bash profile:
Run: sudo vi ~/.bash_profile


Se rodar o appium-doctor e aparecer problema no bin, por favor descomentar a ultima linha do bin e rodar o comando do passo 3 novamente.

## Configuração
Certifique-se de que você tem CodeceptJS instalado. Você também precisará instalar Appium. Sugerimos usar appium-doctor para verificar se o seu sistema está pronto para testes móveis.

npm i -g appium-doctor

Se tudo estiver bem, continue instalando o Appium.

## Para instalar o Appium use npm:

npm i -g appium

Então você precisa preparar a aplicação para execução. Ele deve ser embalado em apk (para Android) ou .ipa (para iOS) ou zip.

Em seguida, é lançar o emulador ou conectar dispositivo físico. Uma vez preparados, inicie o Appium:

appium

Para executar o teste móvel, você precisa de um emulador de dispositivo (disponível com Android SDK ou iOS), dispositivo real conectado para testes móveis. Alternativamente, você pode executar Appium com emulador de dispositivo dentro do contêiner Docker.

## O CodeceptJS deve ser instalado com suporte ao webdriverio:

npm install codeceptjs webdriverio --save

ou 

npm install webdriverio

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

npx codeceptjs run

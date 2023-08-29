# TimerApp

O TimerApp é uma aplicação de contagem de tempo construída com React que permite ao usuário iniciar, pausar, adicionar um segundo ou parar o contador. Além disso, a aplicação exibe a contagem de tempo formatada em horas, minutos e segundos, considerando o fuso horário de São Paulo.

Funcionalidades
### Iniciar: 
Inicia a contagem do tempo, atualizando o contador a cada segundo.
#### Add Segundo: 
Adiciona um segundo à contagem atual após um atraso de 3 segundos.
#### Pausar: 
Pausa a contagem do tempo.
#### Parar: 
Pára a contagem do tempo e redefine o contador para zero.
#### Recursos Adicionais:
A aplicação também apresenta um alerta a cada 25 segundos e exibe a contagem de tempo no fuso horário de São Paulo (UTC-3).

## Como Usar
Clone este repositório para o seu ambiente local.
Instale as dependências necessárias utilizando o seguinte comando:
Copy code
```
npm install
```
Execute a aplicação com o comando:
```
npm start
```
Interaja com os botões na interface para controlar o contador.

### Estilização
A interface da aplicação é estilizada com CSS inline para proporcionar uma experiência de usuário agradável.

### Dependências
* React: Uma biblioteca JavaScript para criar interfaces de usuário.
* date-fns: Uma biblioteca para manipulação de datas em JavaScript.

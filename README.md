<h1 align="center"> SnapClima </h1>

<p align="center">
    Aplicação para consultar a <strong>condição climática</strong> da sua região em tempo real via <strong>API</strong>.
</p>



<p align="center">
    <img src="./preview.png" alt="Demonstração da Aplicação">
</p>

O projeto foi desenvolvido na imersão criada pelo <a href="https://www.instagram.com/brenocuper/">Breno Cuper</a>.

## 📚 Tecnologias Utilizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript
- Git e Github
- Weather API 

## 📡 O PROJETO

Visite o projeto <a href="https://gabrielratao.github.io/snapClima">online</a>.

<p>
    A aplicação utiliza a API forrnecida gratuitamente pela plataforma <strong>OpenWeather<a href="https://openweathermap.org/"></a>.</strong>
</p>


O projeto permite o usuário consultar em tempo real informações meteorológicas à partir da sua geolocalização. Além disso, há a opção de buscar manualmente, por meio de barra de pesquisa, por essas informações de qualquer cidade do planeta.

Ao acessar a aplicação pela primeira vez, o sistema solicitará permissão da localização do usuário. Caso o usuário permita, a informação (latitude e longitude) é utilizada pelo programa que faz um <strong>_request_</strong> à API e tem como <strong>_response_</strong> uma série de informações. 

Caso contrário, o usuário deve digitar a informação na barra de pesquisa, a qual é um input, e o pragrama identifica o <strong>_value_</strong> do elemento e realiza o _request_ pelo nome da cidade.

## 🔮 DADOS OBTIDOS NA API

A API da OpenWeather retorna diversas informações dentre as quais selecionamos:

- Data atual
- Nome da cidade e país
- Ícone da situação do clima
- Descrição do clima (nublado, ensolarado...)
- Velocidade do vento
- Sensação térmica
- Umidade
- Horário do nascer e pôr do sol

## MELHORIAS 

Eu adcionei algumas alterações no código desenvolvido em aula:

### Dois problemas identificados


<strong>1-</strong>

Após alguns testes nos dados, identifiquei que o horário do nascer e pôr do sol ficaram com uma falha na formatação.

Quando o minuto atual era menor que 10, por exemplo 19:08, o programa retornava 19:8. 

Com isso, adcionei uma condicional para ajustar esse valor.

<strong>2-</strong>

Por se tratar de uma API que busca dados globais, identifiquei que algumas cidades brasileiras possuem o mesmo nome de cidades estrangeiras. 

Com isso adcionei no nome da cidade pesquisa o seu país de origem, exemplo:

- Toronto, CA
- São Paulo, BR





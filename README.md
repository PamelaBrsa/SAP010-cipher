# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Instruções](#3-Instruções)
* [4. Protótipo](#5-protótipo)


***

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD


## 2. Resumo do projeto

Esse projeto foi desenvolvido para o bootcamp da Laboratória, onde aprendemos desenvolvimento web utilizando JavaScript vanilla, HTML e CSS.

O desenvolvimento foi pensado para usuários de gamers que disputam online e precisam enviar mensagens secretas para seus aliados, assim suas táticas de jogo não serão reveladas para os oponentes.



## 3. Instruções

O usuário digita no primeiro campo a mensagem que deseja que seja criptografada, em seguida escolhe o numero de delocamento, que vai do 1 ao 25 e clica no botão "criptografar".
A mensagem criptografada aparecerá no campo logo abaixo.
Para decodificar, o usuário copia o texto e insere no primeiro campo, coloca o mesmo numero de deslocamento para a mensagem criptografada, e clica no botão "descriptografar".
A mensagem descriptografada aparecerá no campo abaixo. 

## 4. Protótipo

image.png




# Questões Teóricas

## 1. Quais as partes principais de uma requisição HTTP?

+ Linha de solicitação(request line)

Na linha de solicitação existe uma estrutura, da seguinte forma "HTTP-METHOD URI HTTP-PROTOCOL", especificando o "METHOD" que basicamente é o tipo de ação a ser realizada, seja ler ou enviar alguma, exemplo: "GET OU POST", o "URI" é o endereço onde se está localizado, exemplo: "/note/create", e o protocolo que o mais comum é "HTTP/1.1", exemplo: POST /note/create HTTP/1.1

--------------------------------------

+ Cabeçalho da solicitação (Request header)

Os cabeçalhos da solicitação é onde fica os cabeçalhos para serem enviados na solicitação para fornecer informações, exemplo onde preciso enviar as informações do token para acessar a rota, "Authorization: Bearer eyJhbGciOiJIUzI1NiI"

--------------------------------------

+ Corpo (Body)

Normalmente se usa o body mais em POST ou PUT por exemplo, basicamente são os dados enviados para aquela rota, como por exemplo enviar dados de um formulario para um rota POST e salvar esses dados

--------------------------------------

## 2. Qual a diferença entre colocar um script dentro do "head" e no fim do "body"??

Colocar no fim do body garante que todo o conteudo da página seja carregado primeiro para depois executar os scripts, se for colocado dentro do head pode causar lentidão e complicar caso esteja pegando um elemento que ainda não foi carregado.

## 3. Qual a diferença entre display: block e display: inline-block ?

Elementos definidos com "display: block" permitem o redimensionamento tanto da largura quanto de sua altura, "mas não permitem elementos vizinhos ao seu lado", ja o "display: inline-block", é uma mistura do block com o inline, que vai permitir tanto elementos na mesma linha e o redimensionamento da largura e altura

## 4. É possível criar um site responsivo SEM media queries? Por que?

Não, pois é ele que vai definir as propriedades do elemento pelo tamanho especificado.

## 5. No Javascript, é obrigatório usar VAR para criar uma variável?

Não, existe a opçao do Let e Const, o "VAR" vai ser uma variavel global em qualquer parte do sistema portanto o valor dela pode ser alteravel, o "LET" é uma variavel especificada, que aquele valor so vai existir em um determinado contexto, como por exemplo dentro de uma condicional ou uma função, portanto seu valor so pode ser alteravel dentro daquilo, e o "CONST" aplica os dois conceitos anteriores, mas seu valor não pode ser alterado.

## 6. Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?

SIM, tem diferenças: 

+ Constructor

o "Arrow functions" não pode ser "constructors", então nao é possivel usar o operador "new"

--------------------------------------

+ Arguments

Arrow functions não possui o objeto array-like arguments.

var p = () => {
  return arguments;
}

p(); // ReferenceError: arguments is not defined

--------------------------------------

+ Nome de função

Arrows Functions não podem ser nomeadas explicitamente, elas acabam herdando o nome da variável onde foi criada.

--------------------------------------

+ Retorno

Arrow Functions permitem escrever em um modelo encurtado onde a última expressão analisada será o retorno da função quando é omitido as chaves {}.

--------------------------------------

## 7. Explique a lógica pra fazer uma paginação.

Vou especificar a quantidade de itens a ser exibido, por exemplo posts, e o conceito é que eu vou especificar a quantidade a ser exibido por página, de 10 em 10 por exemplo, 0 -> 10, 11 -> 21 ..., então em cada página vai exibir a quantidade de itens que eu especifiquei, e para saber a quantidade total de páginas pego o número total de registros / pela quantidade a ser exibida por página = total de páginas, 1000/10 = 100 páginas

## 8. Qual a melhor forma de armazenar uma imagem no banco de dados?

Posso criar uma pasta dentro do projeto com as imagens, e salvar o mesmo nome das imagens no banco de dados, quando eu quiser usar uma imagem especifica, posso buscar todos os nomes no banco de dados e pegar o nome da imagem que quero e usar esse nome para exibir no html por exemplo, ou tem a opçao da biblioteca MULTER, onde posso fazer upload da imagem, salvar esse nome no banco de dados e a imagem em uma pasta, e quando eu precisar usar aquela imagem, eu busco o seu nome para poder exibir.

## 9. No React, quantos useEffect eu posso usar?

## 10. Quais métodos de requisição preciso para criar um CRUD via API?

+ "GET", "POST", "PUT", "DELETE"

# <a href="https://github.com/FabioPenedo/notepadB7">Notepad (back end)</a> #

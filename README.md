1. Importações de Módulos
O código utiliza os seguintes componentes e hooks:
Hooks (useState): Utilizados para gerenciar o estado dos dados (números digitados e resultados) que mudam conforme o usuário interage.
Componentes de Interface:
View: Atua como um container (semelhante à div no HTML).
Text: Usado para exibir textos na tela.
TextInput: Campo de entrada onde o usuário digita os números.
TouchableOpacity: Botão que gera um efeito de transparência ao ser clicado.
2. Gerenciamento de Estados (State)
O componente utiliza diversas variáveis de estado para controlar o fluxo da calculadora:
n1 e n2: Armazenam os valores de entrada.
display: Controla o que está sendo mostrado como número atual na tela.
numeroAnterior: Armazena o valor que foi digitado antes de uma operação ser escolhida.
contador e valor: Variáveis auxiliares para cálculos e resultados.
3. Lógica de Funcionamento
Função calculo()
Esta função é o motor da calculadora. Ela realiza as seguintes etapas:
Conversão: Transforma as strings do display e numeroAnterior em números decimais usando parseFloat.
Processamento: Verifica qual operação foi selecionada (Soma, Subtração ou Divisão).
Resultado: Aplica a lógica matemática baseada na condição (if) correspondente.
Nota Técnica: No código atual, a variável operacao está declarada mas não recebe um valor dinâmico, o que precisará ser conectado aos botões para que o cálculo funcione corretamente.
4. Estrutura da Interface (Layout)
A interface está organizada em blocos visuais:
Entrada de Dados: Um TextInput configurado com keyboardType="numeric", garantindo que o usuário veja apenas o teclado numérico ao clicar na caixa.
Grade de Botões:
Operadores: Botões de +, - e : (divisão), estilizados com um fundo cinza (#A9A9A9).
Teclado Numérico: Botões de 0 a 9 (atualmente em desenvolvimento) posicionados dentro de um container com flexDirection: 'row', que organiza os elementos em linha.
5. Estilização (CSS-in-JS)
O objeto StyleSheet define a aparência do aplicativo:
botao: Define dimensões fixas (
), criando botões quadrados perfeitamente alinhados ao centro.
linha: Utiliza a propriedade gap: 30 para criar um espaçamento uniforme entre os botões e flexDirection: 'row' para alinhamento horizontal.
principal: Estilo aplicado ao container principal ou ao input para garantir preenchimento e centralização.
Próximos Passos Sugeridos
Para que o código se torne uma calculadora funcional, recomenda-se:
Conectar os números: Adicionar a função onPress nos botões numéricos para que eles preencham o estado n1 ou display.
Capturar a Operação: Criar uma função que defina se a conta será de mais, menos ou dividir antes de chamar a função calculo.

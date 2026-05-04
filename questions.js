window.QUESTIONS = [
  {
    "question": "[Cap5CODQ05] Fácil. Ao criar uma lista dinâmica encadeada, o professor ressaltou que o tipo abstrato normalmente é um ponteiro para ponteiro, inicializado com NULL.",
    "options": [
      "A - Informar que a lista possui um nó descritor.",
      "B - Transformar a lista em duplamente encadeada.",
      "C - Apagar o ponteiro li da memória.",
      "D - Indicar que a lista está vazia, sem nenhum nó encadeado.",
      "E - Indicar que já existe um primeiro nó reservado."
    ],
    "correctAnswerIndex": 3,
    "textAfterImage": "Qual é o significado de executar *li = NULL logo após a alocação?",
    "image": "assets/questions/q01-846a91aa2c.png"
  },
  {
    "question": "[Cap5CODQ10] Média. Uma aplicação que realiza muitas inserções no final da lista começou a usar nó descritor para melhorar o desempenho de determinadas operações.",
    "options": [
      "A - O campo qtd apenas, pois ele substitui todos os ponteiros.",
      "B - A ausência de ponteiros internos nos nós.",
      "C - O ponteiro inicio, pois ele sempre aponta para o elemento do meio.",
      "D - O fato de a lista deixar de ser linear",
      "E - O ponteiro final, pois evita percorrer toda a lista até o último nó."
    ],
    "correctAnswerIndex": 4,
    "textAfterImage": "Qual informação adicional do nó descritor tende a tornar mais eficiente a inserção no final da lista?",
    "image": "assets/questions/q02-54bb86a475.png"
  },
  {
    "question": "[Cap5CODQ08] Média. Durante a destruição de uma lista circular, a turma percebeu que não é possível usar a mesma condição de parada adotada em listas simplesmente encadeadas com final NULL.",
    "options": [
      "A - Porque em lista circular o último nó aponta novamente para o primeiro.",
      "B - Porque ela identifica quando o vetor auxiliar está cheio.",
      "C - Porque em listas circulares o início é sempre NULL.",
      "D - Porque ela substitui a necessidade de free.",
      "E - Porque uma lista circular sempre possui exatamente dois nós."
    ],
    "correctAnswerIndex": 0,
    "textAfterImage": "Por que a condição no->prox != *li é adequada nesse caso?",
    "image": "assets/questions/q03-56710f4e29.png"
  },
  {
    "question": "[Cap5EDQ02] Em uma aula prática, três grupos modelaram estruturas para organizar atendimentos. O Grupo A permitiu inserções e remoções em qualquer posição. O Grupo B permitiu inserção no final e remoção no início. O Grupo C permitiu inserção, acesso e remoção apenas no final. O professor destacou que, embora todas sejam variações do conceito de lista, elas obedecem regras diferentes de uso. Com base no capítulo, assinale a alternativa correta.",
    "options": [
      "A - O Grupo A modelou uma fila, o Grupo B uma lista convencional e o Grupo C uma árvore.",
      "B - O Grupo B modelou uma pilha e o Grupo C modelou uma fila.",
      "C - O Grupo A modelou uma lista convencional, o Grupo B uma fila FIFO e o Grupo C uma pilha LIFO.",
      "D - Os três grupos modelaram exatamente o mesmo tipo de lista, sem distinção conceitual.",
      "E - Fila e pilha não podem ser entendidas como formas particulares de organização linear."
    ],
    "correctAnswerIndex": 1
  },
  {
    "question": "[Cap5EDQ06] Durante a implementação de uma lista dinâmica encadeada, uma estudante questionou por que o início da lista não é representado apenas por um ponteiro simples. O professor explicou que, ao inserir ou remover elementos do começo, pode ser necessário alterar quem é o primeiro nó da lista. Com base no capítulo, assinale a alternativa correta.",
    "options": [
      "A - O ponteiro para ponteiro é necessário porque facilita mudar o primeiro elemento da lista alterando o conteúdo do ponteiro que guarda o início.",
      "B - Em listas encadeadas, o primeiro elemento jamais precisa ser alterado após a criação.",
      "C - O ponteiro para ponteiro só aparece em listas estáticas implementadas com arrays.",
      "D - O ponteiro para ponteiro é usado apenas para economizar memória, sem relação com o início da lista.",
      "E - O uso de ponteiro para ponteiro elimina a necessidade de alocação dinâmica dos nós."
    ],
    "correctAnswerIndex": 0
  },
  {
    "question": "[Cap4CODQ09] Um aluno escreveu o seguinte código no main.c, incluindo apenas o arquivo de interface do TAD.",
    "options": [
      "A - O código está correto apenas se o compilador for C++.",
      "B - O código está incorreto apenas por falta de malloc(), não pela declaração.",
      "C - O código está incorreto, porque um tipo opaco incompleto não pode ser instanciado diretamente sem sua definição completa.",
      "D - O código está correto, porque Ponto já é um tipo completo no cabeçalho.",
      "E - O código está correto porque todo typedef cria automaticamente uma struct completa."
    ],
    "correctAnswerIndex": 2,
    "textAfterImage": "Considerando que a definição completa de struct ponto está oculta em outro módulo, qual é a análise mais adequada?",
    "image": "assets/questions/q06-d8bbc6dbdf.png"
  },
  {
    "question": "[Cap4CODQ05] Ao revisar o código de atualização de coordenadas, um aluno analisou a função abaixo.",
    "options": [
      "A - Ela compara dois pontos e retorna a distância entre eles.",
      "B - Ela altera as coordenadas do ponto se o ponteiro for válido.",
      "C - Ela cria um novo ponto toda vez que é chamada.",
      "D - Ela só pode ser usada com o tipo FILE.",
      "E - Ela destrói o TAD e devolve as coordenadas antigas."
    ],
    "correctAnswerIndex": 0,
    "textAfterImage": "Qual alternativa descreve corretamente o comportamento dessa função?",
    "image": "assets/questions/q07-121d74d8ef.png"
  },
  {
    "question": "[Cap4CODQ10] Em um projeto de manutenção, a coordenadora decidiu alterar a representação interna de um TAD de ponto sem mudar as funções públicas do módulo. O código do usuário continuaria com chamadas como estas.",
    "options": [
      "A - A substituição de ponteiros por variáveis globais.",
      "B - A flexibilidade de alterar a implementação mantendo a mesma interface para o usuário.",
      "C - A impossibilidade de compilar arquivos separadamente.",
      "D - A obrigatoriedade de acesso direto aos campos internos.",
      "E - A eliminação de qualquer função de acesso."
    ],
    "correctAnswerIndex": 1,
    "textAfterImage": "Qual vantagem do uso de TAD está sendo explorada nessa situação?",
    "image": "assets/questions/q08-ed036e6a1f.png"
  },
  {
    "question": "[Cap3CODQ06] Fácil. Uma escola técnica quer usar counting sort para ordenar rapidamente notas inteiras em um intervalo pequeno. O programador resolveu inspecionar o vetor auxiliar após a etapa de contagem.",
    "options": [
      "A - {1, 2, 2, 0, 2, 0}",
      "B - {0, 2, 2, 1, 2, 0}",
      "C - {2, 1, 2, 0, 2, 0}",
      "D - {1, 2, 1, 1, 2, 0}",
      "E - {1, 1, 2, 0, 3, 0}"
    ],
    "correctAnswerIndex": 1,
    "textAfterImage": "Após o laço, qual será o conteúdo de cont?",
    "image": "assets/questions/q09-dae26c39f4.png"
  },
  {
    "question": "[Cap3CODQ08] Média. No merge sort, duas metades já ordenadas são intercaladas em um vetor temporário. Um estudante quer saber qual elemento deve ser copiado primeiro em uma situação específica.",
    "options": [
      "A - 5",
      "B - 4",
      "C - 12",
      "D - 18",
      "E - 21"
    ],
    "correctAnswerIndex": 1,
    "textAfterImage": "No primeiro passo da intercalação, qual valor será copiado para temp[0]?",
    "image": "assets/questions/q10-c75e678d9e.png"
  },
  {
    "question": "[Cap3CODQ02] Fácil. Em uma rotina de ordenação por seleção, o professor pediu que a turma observasse apenas a primeira iteração do algoritmo para entender como o índice do menor elemento é atualizado.",
    "options": [
      "A - 0",
      "B - 1",
      "C - 3",
      "D - 2",
      "E - 4"
    ],
    "correctAnswerIndex": 0,
    "textAfterImage": "Ao final do laço, qual valor estará armazenado em menor?",
    "image": "assets/questions/q11-6b65ec8573.png"
  },
  {
    "question": "[Cap3CODQ01] Fácil. Uma equipe está validando um algoritmo simples de ordenação para um módulo acadêmico. O programador decidiu acompanhar, em um vetor pequeno, o comportamento de uma passagem do bubble sort.",
    "options": [
      "A - {4, 23, 67, -8, 21}",
      "B - {4, -8, 23, 21, 67}",
      "C - {23, 4, 67, -8, 21}",
      "D - {-8, 4, 21, 23, 67}",
      "E - {4, 23, -8, 21, 67}"
    ],
    "correctAnswerIndex": 4,
    "textAfterImage": "Após a execução de bubblePass para o vetor informado, qual será o conteúdo do vetor?",
    "image": "assets/questions/q12-0a50923c63.png"
  },
  {
    "question": "[Cap1EDQ05] Durante o desenvolvimento de um simulador de atendimento, um aluno declarou variáveis locais dentro da função principal e em funções auxiliares. Ao terminar a execução de cada função, esses dados deixavam de existir automaticamente, sem a necessidade de uma liberação explícita de memória. A situação descrita exemplifica, predominantemente,",
    "options": [
      "A - funcionamento da heap, caracterizada por acesso sequencial e tamanho fixo.",
      "B - alocação dinâmica, pois toda variável declarada em função depende de ponteiros.",
      "C - uso da heap, em que variáveis locais são removidas manualmente.",
      "D - fragmentação de memória, típica de variáveis locais em escopo reduzido.",
      "E - funcionamento da stack, em que dados associados ao escopo são empilhados e removidos automaticamente ao final da execução."
    ],
    "correctAnswerIndex": 4
  },
  {
    "question": "[Cap1EDQ02] Em uma clínica, um sistema recebe o número do prontuário do paciente, consulta os dados cadastrados, verifica a agenda médica e exibe o primeiro horário disponível. Ao explicar esse processo para novos estagiários, a supervisora decidiu relacioná-lo às três partes clássicas de um procedimento computacional. Nesse caso, a ação de informar o número do prontuário, a etapa de consultar cadastro e agenda e a exibição do horário disponível correspondem, respectivamente, a",
    "options": [
      "A - entrada, saída e processamento.",
      "B - processamento, armazenamento e saída.",
      "C - saída, processamento e entrada.",
      "D - processamento, entrada e saída.",
      "E - entrada, processamento e saída."
    ],
    "correctAnswerIndex": 4
  },
  {
    "question": "[Cap4EDQ10] Dois grupos implementaram um TAD Ponto. O Grupo A expôs a estrutura interna no arquivo de interface e orientou os usuários a modificar livremente seus campos. O Grupo B adotou tipo opaco e obrigou toda manipulação a passar por funções específicas. Na avaliação do professor, o segundo modelo estava mais aderente aos objetivos do capítulo. Assinale a alternativa que melhor justifica essa conclusão.",
    "options": [
      "A - O Grupo B está mais alinhado ao capítulo porque elimina totalmente o uso de memória dinâmica.",
      "B - O Grupo A está mais alinhado ao capítulo, pois um TAD deve expor todos os detalhes para ser eficiente.",
      "C - O Grupo B está mais alinhado ao capítulo apenas porque usa mais arquivos no projeto.",
      "D - O Grupo B está mais alinhado ao capítulo porque evita o acesso direto indevido aos dados, reforça encapsulamento e separa uso de implementação.",
      "E - Não há diferença conceitual relevante entre os dois modelos, pois qualquer struct já é automaticamente um TAD completo."
    ],
    "correctAnswerIndex": 3
  },
  {
    "question": "[Cap4EDQ06] Uma equipe decidiu modularizar um TAD chamado Conta. No arquivo conta.h, seriam mantidos os protótipos das funções visíveis ao usuário. Já no arquivo conta.c, ficariam a definição interna do tipo e a implementação das funções. Um aluno perguntou qual era a lógica dessa separação. Assinale a alternativa correta.",
    "options": [
      "A - A modularização é usada apenas para programas gráficos, não para TADs em C.",
      "B - A modularização elimina a necessidade de recompilar qualquer parte alterada do sistema.",
      "C - A modularização separa interface e implementação, deixando no .h o que o usuário precisa conhecer e no .c os detalhes ocultos do TAD.",
      "D - O arquivo .h deve conter apenas o código de teste da aplicação final.",
      "E - O arquivo .c deve ser visível ao usuário, enquanto o .h permanece oculto."
    ],
    "correctAnswerIndex": 2
  },
  {
    "question": "[Cap3EDQ04] Em uma disciplina introdutória, a professora comparou o insertion sort ao modo como uma pessoa organiza cartas de baralho nas mãos: pega uma nova carta e a insere no local adequado, deslocando as demais quando necessário. Em seguida, perguntou em que situação esse algoritmo costuma ser especialmente interessante. Assinale a alternativa correta.",
    "options": [
      "A - Quando se deseja eliminar completamente o uso de memória adicional, como no merge sort externo.",
      "B - Quando o conjunto é pequeno ou já está parcialmente ordenado, pois o insertion sort tende a ter bom desempenho prático nesse cenário.",
      "C - Quando se quer garantir complexidade O(log n) em qualquer caso.",
      "D - Quando os dados são inteiros pequenos e concentrados em um intervalo reduzido.",
      "E - Quando os dados só podem ser processados em blocos de disco."
    ],
    "correctAnswerIndex": 2
  },
  {
    "question": "[Cap3EDQ03] Uma equipe de desenvolvimento precisa escolher entre bubble sort e selection sort para ordenar uma pequena lista de códigos de atendimento. Um dos programadores lembra que, embora ambos tenham comportamento quadrático no caso médio, o selection sort tende a ter melhor desempenho prático em diversas situações. A justificativa mais adequada para essa afirmação é que o selection sort",
    "options": [
      "A - tem melhor caso O(1), ao contrário do bubble sort.",
      "B - é estável por definição, enquanto o bubble sort nunca é estável.",
      "C - substitui automaticamente o uso de busca binária após a ordenação.",
      "D - não depende da ordem inicial dos elementos e, na prática, costuma envolver menos comparações do que o bubble sort.",
      "E - usa recursão para reduzir a quantidade de memória consumida."
    ],
    "correctAnswerIndex": 3
  },
  {
    "question": "[Cap2EDQ01] Uma empresa de mobilidade urbana está avaliando dois programas que calculam rotas entre bairros. O primeiro foi implementado e testado diretamente em um laboratório, com medições reais de tempo em uma máquina específica. O segundo ainda está sendo estudado apenas em termos conceituais, considerando como seu custo cresce quando o volume de dados aumenta, sem depender da linguagem usada nem do computador disponível. Com base nesse contexto, assinale a alternativa correta.",
    "options": [
      "Os dois casos exemplificam apenas análise matemática, pois tempo e memória nunca dependem do ambiente.",
      "O primeiro caso exemplifica análise matemática, e o segundo exemplifica análise empírica.",
      "Os dois casos exemplificam apenas análise empírica, pois todo algoritmo precisa ser executado para ser comparado.",
      "O segundo caso é inadequado, pois não é possível estudar algoritmos sem executar o código.",
      "O primeiro caso exemplifica análise empírica, e o segundo exemplifica análise matemática."
    ],
    "correctAnswerIndex": 4
  },
  {
    "question": "[Cap2EDQ08] Uma startup está comparando soluções para processar grandes volumes de dados. Em uma delas, o problema é resolvido dividindo repetidamente a entrada em partes menores, que são tratadas de forma independente e depois combinadas. Em outra, os dados são analisados aos pares por meio de dois laços aninhados. As classes de complexidade mais associadas a esses dois comportamentos são, respectivamente,",
    "options": [
      "A - O(log n) e O(n).",
      "B - O(n^2) e O(n log n).",
      "C - O(1) e O(log n).",
      "D - O(2^n) e O(n!).",
      "E - O(n log n) e O(n^2)."
    ],
    "correctAnswerIndex": 4
  },
  {
    "question": "[Cap1EDQ10] Considere as afirmações a seguir sobre alocação estática e dinâmica de memória em linguagem C. I. Dados alocados estaticamente tendem a ter tamanho definido antes da execução e podem ser usados sem ponteiros obrigatórios. II. Dados alocados dinamicamente ficam na heap, costumam ser acessados por ponteiros e exigem liberação manual. III. A stack é apropriada para armazenamento de blocos que independem do escopo e permanecem ativos até liberação explícita. IV. A heap pode ser mais adequada quando a quantidade de memória necessária não é conhecida previamente. Está correto apenas o que se afirma em",
    "options": [
      "A - II, III e IV.",
      "B - I e III.",
      "C - I, III e IV.",
      "D - II e III.",
      "E - I, II e IV."
    ],
    "correctAnswerIndex": 4
  },
  {
    "question": "[Cap3EDQ01] Uma empresa de varejo está reorganizando seu cadastro de produtos para acelerar consultas e relatórios. Durante a reunião técnica, um analista afirmou que \"ordenar\" significa apenas colocar números em ordem crescente. Outra analista observou que a ideia é mais ampla e depende da chave escolhida para comparação. Com base no Capítulo 3, assinale a alternativa correta.",
    "options": [
      "A - Toda ordenação é necessariamente decrescente quando aplicada a textos.",
      "B - Ordenar significa apenas rearranjar valores numéricos em ordem crescente.",
      "C - A chave de ordenação só existe quando os dados são do tipo struct.",
      "D - A ordenação coloca os elementos de uma sequência em uma ordem predefinida, com base em uma chave de comparação.",
      "E - A ordenação sempre exige que os dados sejam armazenados em arquivo externo."
    ],
    "correctAnswerIndex": 3
  },
  {
    "question": "[Cap4CODQ06] Em uma aplicação cartográfica, a equipe implementou a distância entre dois pontos.",
    "options": [
      "A - 7",
      "B - 1",
      "C - -1",
      "D - 4",
      "E - 5"
    ],
    "correctAnswerIndex": 0,
    "textAfterImage": "Se p1 = (0,0) e p2 = (3,4), qual valor essa função deverá retornar?",
    "image": "assets/questions/q23-2b1d05a160.png"
  },
  {
    "question": "[Cap4CODQ02] Durante a implementação do TAD Ponto, um grupo escreveu a função a seguir.",
    "options": [
      "A - Converter o TAD Ponto em um arquivo do tipo FILE.",
      "B - Criar dinamicamente um novo ponto e inicializar suas coordenadas.",
      "C - Ordenar dois valores reais antes de armazená-los.",
      "D - Liberar a memória ocupada por um ponto já existente.",
      "E - Esconder a função malloc() do compilador."
    ],
    "correctAnswerIndex": 2,
    "textAfterImage": "Considerando a lógica apresentada no capítulo, qual é a finalidade principal dessa função?",
    "image": "assets/questions/q24-b82fda4998.png"
  },
  {
    "question": "[Cap5EDQ04] Uma empresa pequena implementou sua primeira lista usando um vetor de tamanho fixo e um campo adicional para indicar quantas posições já estão ocupadas. O programador líder afirmou que essa escolha representa a forma mais simples de lista do capítulo, mas lembrou que ela traz vantagens e limitações bem específicas. Assinale a alternativa correta sobre essa implementação.",
    "options": [
      "A - Trata-se de uma lista dinâmica encadeada, em que cada elemento aponta para o próximo.",
      "B - Trata-se de uma lista sequencial estática, definida com array e campo qtd para indicar a parte ocupada.",
      "C - Trata-se de uma lista com nó descritor, obrigatoriamente composta por início, fim e quantidade.",
      "D - Trata-se de uma pilha, pois o vetor é sempre uma estrutura LIFO.",
      "E - Trata-se de uma lista circular, em que o último elemento aponta para o primeiro."
    ],
    "correctAnswerIndex": 2
  },
  {
    "question": "[Cap5EDQ07] Uma equipe implementou uma lista dinâmica encadeada circular guardando sempre a posição de início. Em testes de desempenho, percebeu que inserções e remoções no início e no final continuavam trabalhosas, pois era necessário localizar o último nó para preservar a circularidade. Um desenvolvedor propôs mudar apenas a forma de representar a lista, sem alterar a ideia de circularidade. Assinale a alternativa que traduz corretamente essa melhoria proposta no capítulo.",
    "options": [
      "A - Substituir a lista circular por um array estático de tamanho fixo.",
      "B - Guardar a posição de final da lista em vez da posição de início, reduzindo o custo lógico de certas operações sobre a circularidade.",
      "C - Trocar todos os ponteiros por índices inteiros, sem qualquer impacto na lógica.",
      "D - Converter a lista circular em pilha, pois pilhas sempre têm melhor desempenho.",
      "E - Eliminar o elo entre último e primeiro elemento, mantendo a lista circular apenas conceitualmente."
    ],
    "correctAnswerIndex": 1
  },
  {
    "question": "[Cap2EDQ07] Durante uma revisão técnica, três alunos receberam a mesma função custo e precisaram descrevê-la com notações assintóticas diferentes. O primeiro queria indicar um limite superior para o pior caso. O segundo, um limite inferior associado ao melhor caso. O terceiro, um limite firme, que enquadra a função simultaneamente por cima e por baixo. As notações adequadas, nessa ordem, são",
    "options": [
      "A - ?, O e o.",
      "B - O, ? e ?.",
      "C - ?, ? e O.",
      "D - O, ? e ?.",
      "E - ?, o e ?."
    ],
    "correctAnswerIndex": 1
  },
  {
    "question": "[Cap4EDQ02] Um laboratório de software decidiu substituir o acesso direto a determinadas estruturas por uma interface de funções. O objetivo era permitir que estagiários usassem o módulo sem conhecer seus detalhes internos, reduzindo erros de manipulação. O coordenador explicou que essa decisão estava alinhada a uma das principais vantagens do uso de TAD. Assinale a alternativa que melhor expressa essa vantagem.",
    "options": [
      "A - O TAD obriga o usuário a reimplementar as funções mais importantes do módulo.",
      "B - O TAD impede qualquer tipo de evolução da implementação ao longo do projeto.",
      "C - O TAD só é útil quando o programa possui um único arquivo-fonte.",
      "D - O TAD favorece encapsulamento, segurança e flexibilidade ao ocultar a implementação e expor apenas a interface.",
      "E - O TAD substitui completamente a etapa de compilação separada."
    ],
    "correctAnswerIndex": 3
  },
  {
    "question": "[Cap4EDQ01] Uma empresa de desenvolvimento está revisando a arquitetura de um sistema legado em C. Durante a discussão, um programador afirmou que um Tipo Abstrato de Dados é apenas uma estrutura struct com campos privados. Outra programadora discordou e lembrou que a ideia de TAD envolve não apenas os dados, mas também o conjunto de operações que definem seu comportamento. Com base no Capítulo 4, assinale a alternativa correta.",
    "options": [
      "A - Um TAD é um conjunto de dados estruturados e das operações que podem ser executadas sobre esses dados.",
      "B - Um TAD existe apenas quando os dados são armazenados em disco.",
      "C - Um TAD é apenas um sinônimo de vetor dinâmico em linguagem C",
      "D - Um TAD elimina a necessidade de funções de manipulação.",
      "E - Um TAD é definido exclusivamente pelo compilador, e não pelo programador."
    ],
    "correctAnswerIndex": 0
  },
  {
    "question": "[Cap3CODQ07] Média. Uma equipe analisa o comportamento da função de particionamento do quick sort. O objetivo é confirmar o invariante da etapa de separação antes das chamadas recursivas.",
    "options": [
      "A - O pivô sempre fica exatamente no meio aritmético do vetor.",
      "B - Os elementos à direita de p estão totalmente ordenados.",
      "C - Os elementos à esquerda de p estão totalmente ordenados.",
      "D - Todos os elementos à esquerda de p são menores ou iguais ao pivô, e os da direita são maiores que ele.",
      "E - Todos os elementos à esquerda de p são iguais ao pivô."
    ],
    "correctAnswerIndex": 3,
    "textAfterImage": "Após o particionamento, qual propriedade deve estar garantida em relação ao pivô na posição p?",
    "image": "assets/questions/q30-b427321786.png"
  },
  {
    "question": "[Cap3CODQ10] Média. Um professor propôs adaptar insertion sort para ordenar um vetor de alunos pelo nome, utilizando a função strcmp. A turma precisava interpretar corretamente a condição de comparação.",
    "options": [
      "A - Que v[j].nome vem depois de atual.nome no dicionário e, por isso, deve ser deslocado.",
      "B - Que atual.nome tem tamanho maior que v[j].nome.",
      "C - Que a ordenação se tornou decrescente automaticamente.",
      "D - Que v[j].nome vem antes de atual.nome no dicionário.",
      "E - Que os dois nomes são idênticos."
    ],
    "correctAnswerIndex": 0,
    "textAfterImage": "O que significa, nesse contexto, a condição strcmp(v[j].nome, atual.nome) > 0?",
    "image": "assets/questions/q31-cd0eefd133.png"
  },
  {
    "question": "[Cap5CODQ07] Média. Na remoção de um elemento específico de uma lista simplesmente encadeada, o programador usa dois ponteiros para tratar corretamente remoções no meio da estrutura.",
    "options": [
      "A - Permitir religar a lista quando o nó removido não está no início.",
      "B - Evitar o uso de free em C.",
      "C - Contar quantos elementos foram visitados.",
      "D - Transformar a busca em binária.",
      "E - Guardar o último elemento da lista para ordenação."
    ],
    "correctAnswerIndex": 0,
    "textAfterImage": "Qual é a função do ponteiro ant nesse algoritmo?",
    "image": "assets/questions/q32-570269eb62.png"
  },
  {
    "question": "[Cap5CODQ09] Média. Em uma lista duplamente encadeada, a equipe precisava inserir um novo nó entre dois nós já existentes sem perder a navegação em ambos os sentidos.",
    "options": [
      "A - A inserção dispensa memória dinâmica.",
      "B - Não há necessidade de ponteiros para inserir elementos.",
      "C - A lista passa a ordenar os dados automaticamente.",
      "D - Cada nó mantém referências para o anterior e para o próximo, facilitando ajustes de ligação.",
      "E - A lista pode ser acessada apenas do fim para o início."
    ],
    "correctAnswerIndex": 3,
    "textAfterImage": "Qual vantagem estrutural da lista duplamente encadeada fica evidente nesse trecho?",
    "image": "assets/questions/q33-53550e7896.png"
  }
];

Autor e Crédito Projeto desenvolvido pelos integrantes listados abaixo
Gabriel Augusto RM573120

Representação do Projeto
Fluxo de Funcionamento (arquitetura)
O sistema opera em um ciclo contínuo de engajamento e feedback. Veja abaixo a representação conceitual das telas e da árvore de decisão do menu:

[ Menu Principal ]
       │
       ├───► Option 1: Cadastrar Perfil / Ver Status (Saldo de Pontos)
       ├───► Option 2: Registrar Ação Sustentável (Básica / Média / Grande)
       ├───► Option 3: Resgatar Cupons e Benefícios (Mercado, Luz, Transporte)
       └───► Option 4: Sair do Sistema

Visualização Prática do Terminal (Mockup)
==================================================
           SPOTMYDEAL - SUSTENTABILIDADE          
==================================================
1. Registrar Ação Ecológica
2. Verificar Meu Perfil e Pontuação
3. Resgatar Recompensas (Cupons)
4. Sair
--------------------------------------------------
Escolha uma opção: 2

[STATUS DO PERFIL]
Usuário: Gabriel Ribeiro
Pontuação Atual: 24.500 pts
Ações validadas hoje: 3 ações
--------------------------------------------------
Retornando ao menu principal...

Como Executar o Projeto?
Certifique-se de ter o Python instalado em sua máquina. Ou use o google collab
Clone este repositório utilizando o terminal: git clone [https://github.com/Ribeirogab06/SpotMyDeal.git](https://github.com/Ribeirogab06/SpotMyDeal.git)
navegue até [index.hmtl
Execute.

Regras de Negócio Implementadas
1. Sistema de Pontuação (Gamificação)
A cada comprovante enviado (simulado via sistema), a pontuação é calculada de acordo com o impacto da ação:

Ação Básica: +200 pontos

Ação Média: +350 pontos

Ação Grande: +500 pontos

2. Catálogo de Cupons Disponíveis
O saldo acumulado pode ser trocado pelos seguintes benefícios integrados no código:

30% de Desconto em Mercado Parceiro: 20.000 pontos

R$ 50 em Crédito de Energia (Companhia Energética): 35.000 pontos

Passe Mensal em Transporte Público: 75.000 pontos

3. Sistema de Segurança e Validação
Menus protegidos contra entradas de texto inválidas (ValueError).

Bloqueio de resgate caso o usuário não possua pontos suficientes.

Estrutura em laço while impedindo o encerramento acidental do programa.

 Link Oficial do Repositório: https://github.com/Ribeirogab06/SpotMyDeal.git

Contato e Suporte: Caso tenha dúvidas sobre a execução do MVP, sugestões de melhoria ou precise de suporte técnico,
entre em contato através dos canais abaixo:
E-mail de Suporte: suporte.spotmydeal@gmail.com
Abertura de Issues: Clique aqui para abrir um chamado técnico diretamente no repositório do projeto.


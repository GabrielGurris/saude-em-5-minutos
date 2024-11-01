

// Arrays com vídeos e receitas
const videos = [
    "Videos/Video_1.mp4", // Segunda
    "Videos/Video_2.mp4", // Terça
    "Videos/Video_3.mp4", // Quarta
    "Videos/Video_4.mp4", // Quinta
    "Videos/Video_5.mp4", // Sexta
    "Videos/Video_6.mp4", // Sábado
    "Videos/Video_7.mp4"  // Domingo
];

const receitas = [
    {
        video: "Receitas/Bombom_de_Uva.mp4", // Segunda-feira
        title: "Bombom de Uva",
        description: `Ingredientes:
- 3/4 copo de leite em pó desnatado(60g)
- 30ml de água 
- Adoçante (opcional) 

Como fazer?
1. Adicione água aos poucos até formar uma massa 
2. Forme bombons com a uva dentro e passe no leite em pó para enfeitar.
`
    },
    {
        video: "Receitas/Panqueca_Saudavel.mp4", // Terça-feira
        title: "Panqueca Saudável",
        description: `Ingredientes:
- 1 ovo;
- 2csp cheia de farinha de aveia - 40g; 1/2 copo de leite desnatado ~ 120ml;
- 1/2ccafé de sal;
- Pimenta do reino a gosto.
- 150g da proteína que preferir (eu usei carne moida);
- 3/4 copo de extrato de tomate;
- 3csp de requeijão light (ou creme de ricota) - 459;
- 3 fatias de queijo de sua preferência.

Como fazer?
1. Bata no liquidificador o ovo, farinha de aveia, leite, sal e pimenta do reino;
2. Espalhe a massa em uma frigideira untada e espere descolar do fundo da panela. Reserve as massas;
3. Recheie as massas como preferir, eu usei extrato de tomate e carne moída refogada, feche-as em formato de panqueca e volte-as para a frigideira;
4. Coloque extrato de tomate, requeijão e o queijo por cima das panquecas;
5. Tampe a frigideira e espere o queijo derreter.
Rendimento: 3 panquecas grandes
`
    },
    {
        video: "Receitas/Rap10.mp4", // Quarta-feira
        title: "Rap10",
        description:` Ingredientes:
- 1 rap10
- 1 fatia (15g) de queijo mussarela
- 1 colher de sopa rasa (15g) de requeijão light
- 1,5 colher de sopa (30g) de frango desfiado
- Orégano à gosto

Como fazer?
1. Molhe o rap10 dos 2 lados, bem rápido;
2. Disponha o rap10 em um prato e coloque o recheio;
3. Dobre a massa ao meio;
4. Com a ponta de um garfo amasse as bordas, para fechar;
5. Pincele gema por cima da massa;
6. Leve na air fryer a 160-200•C por 5 a 7 minutos.
`        
    },
    {
        video: "Receitas/Salada_de_Macarrão.mp4", // Quinta-feira
        title: "Salada de Macarrão",
        description: `Ingredientes:
- 1 ½ quilo de Massa
- 3 Latas de Atum (ou outra proteína de sua preferência)
- 3 colheres de sopa de maionese
- 1 colher de sopa de mostarda
- 1 lata de milho
- 3 Talos de Aipo
- 2 Cenouras
- ½ Xícara de Cebolinha
- ½ Limao
- Sal e Pimenta a gosto

Como fazer?
1. Corte os legumes.
2. Em uma tigela junte todos os ingredientes e misture.
`
    },
    {
        video: "Receitas/Smoothie.mp4", // Sexta-feira
        title: "Smoothie",
        description: `Ingredientes:
- 1 iogurte natural 
- 1 banana congelada 
- 1 maracujá 
- 10 gotas de adoçante

Como fazer?
1. Bata tudo no liquidificador por 5 minutos.
`
    },
    {
        video: "Receitas/Sorvete_de_Morango.mp4", // Sábado
        title: "Sorvete de Morango",
        description: `Ingredientes:
- 1 Caixinha de morango congelado
- 1 Unidade de logurte Natural
- 1 Colher de Sopa de Leite em pó

Como fazer?
1. Coloque o morango, o iogurte e o leite em pó no processador e bata até chegar em ponto de sorvete.
2. Coloque morangos picados para decorar (opcional)
`
    },
    {
        video: "Receitas/Toasty_de_Ovos.mp4", // Domingo
        title: "Toasty de Ovos",
        description: `Ingredientes:
- 2 ovos
- 1 colher de sopa de requeijão light
- ½ cenoura
- Salsinha e cebolinha a gosto
- Sal a gosto
- Orégano a gosto
- Chimichurri a gosto
- Pimenta-do-reino a gosto
- 2 pães de forma 
- 2 fatias de muçarela

Como fazer?
1. Passo a passo no video
`
    }
];

// Cálculo da ingestão de água
function calcularIngestaoAgua() {
    const diaDaSemana = new Date().getDay(); // 0 (Domingo) a 6 (Sábado)
    let quantidadeAgua;

    // Definindo a quantidade de água por dia (em litros)
    switch(diaDaSemana) {
        case 0: // Domingo
            quantidadeAgua = 2.5;
            break;
        case 1: // Segunda
            quantidadeAgua = 2.0;
            break;
        case 2: // Terça
            quantidadeAgua = 1.8;
            break;
        case 3: // Quarta
            quantidadeAgua = 2.2;
            break;
        case 4: // Quinta
            quantidadeAgua = 2.0;
            break;
        case 5: // Sexta
            quantidadeAgua = 1.5;
            break;
        case 6: // Sábado
            quantidadeAgua = 2.5;
            break;
    }

    document.getElementById("agua-intake").textContent = `Você deve beber aproximadamente ${quantidadeAgua} litros de água hoje.`;
}

const diaDaSemana = new Date().getDay();

// Função para definir a receita e o vídeo do dia
function definirConteudoDoDia() {
    document.getElementById("video-source").src = videos[1];
    document.getElementById("video").querySelector("video").load(); // Carrega o vídeo correto
}

// Definir receita e vídeo com base no dia da semana
function definirReceitaDoDia() {
    const receitaDoDia = receitas[1];

    // Define o vídeo e o texto da receita
    document.getElementById("recipe-video").src = receitaDoDia.video;
    document.getElementById("recipe-title").textContent = receitaDoDia.title;
    document.getElementById("recipe-description").textContent = receitaDoDia.description;
}

function calcularIngestaoAgua() {
    // Obtém o valor do peso do usuário
    const peso = document.getElementById("peso").value;

    // Verifica se o peso é válido (não vazio e maior que zero)
    if (peso && peso > 0) {
        // Calcula a quantidade de água recomendada em litros
        const quantidadeAgua = (peso * 0.035).toFixed(2);

        // Exibe o resultado
        document.getElementById("agua-intake").textContent = `Você deve beber aproximadamente ${quantidadeAgua} litros de água por dia.`;
    } else {
        // Mensagem de erro caso o peso não seja válido
        document.getElementById("agua-intake").textContent = "Por favor, insira um peso válido.";
    }
}


// Chama as funções ao carregar a página
window.onload = function() {
    calcularIngestaoAgua();
    definirConteudoDoDia();
    definirReceitaDoDia();
};

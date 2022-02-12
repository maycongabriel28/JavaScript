// Criar função para executar comando do botão
function preco(){
    let res = document.getElementById('resultado')
    let ant = Number(prompt('Qual é o preço anterior do produto?'))
    let atual = Number(prompt('Qual é o preço atual do produto?'))

    if(ant == atual){
        res.innerHTML = `
        <p>
            <strong>
                Analisando os valores informados
            </strong>
        </p>
        <p>
            O produto custava R$${ant.toFixed(2).replace('.',',')} e agora custa R$${atual.toFixed(2).replace('.',',')}.
        </p>
        <p>
            Não houve nenhuma alteração no valor do produto.
        </p>
        `
    }else if(ant > atual){ // Preço abaixou
        res.innerHTML = `
        <p>
            <strong>
                Analisando os valores informados
            </strong>
        </p>
        <p>
            O produto custava R$${ant.toFixed(2).replace('.',',')} e agora custa R$${atual.toFixed(2).replace('.',',')}.
        </p>
        <p>
            Hoje o produto está mais <mark id='barato'>barato</mark>.
        </p>
        <p>
            O preço caiu R$${(ant-atual).toFixed(2).replace('.',',')} em relação ao preço anterior.
        </p>
        <p>
            Uma variação de ${(((ant-atual)/atual)*100).toFixed(2).replace('.',',')}% para baixo.
        </p>
        `
    }else {
        res.innerHTML = `
        <p>
            <strong>
                Analisando os valores informados
            </strong>
        </p>
        <p>
            O produto custava R$${ant.toFixed(2).replace('.',',')} e agora custa R$${atual.toFixed(2).replace('.',',')}.
        </p>
        <p>
            Hoje o produto está mais <mark id='caro'>caro</mark>.
        </p>
        <p>
            O preço aumentou R$${(atual-ant).toFixed(2).replace('.',',')} em relação ao preço anterior.
        </p>
        <p>
            Uma variação de ${(((atual-ant)/ant)*100).toFixed(2).replace('.',',')}% para cima.
        </p>
        `
    }


}
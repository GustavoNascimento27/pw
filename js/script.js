const numeroaleatorio = parseInt(Math.random() *100+1)
console.log(numeroaleatorio)
const somjogada = new Audio('js/stock.mp3')
const erro = new Audio('js/buzzer.mp3')
const numerorepetido = new Audio('js/ohoh.mp3')

/* manipulando elementos html */
const botaojogar = document.querySelector('#jogar') // botao jogar 
const caixaTexto = document.querySelector('#txtNumero')
const jogadasanteriores = document.querySelector('.vezes')
const jogadasrestantes = document.querySelector('.numChances')
const recomecar = document.querySelector('.resultados')
const avisos = document.querySelector('.avisos')

// criando elemento html 

const paragrafo = document.createElement('p')

// criando um vetor pra armazenar os numeros jogadods 

 
const numerosjogados = []
// variavel contadora

let minhasjogadas = 1

// variavel para poder jogar
let playgame = true

if(playgame){
    botaojogar.addEventListener('click',function(e){ //funcao anonima (function expression) que vai receber como parametro o botao (e)
        e.preventDefault() //removendo a ação de envio do botão jogar numero 
        let tentativa = parseInt(caixaTexto.value) //variavel que vai receber um numero inteiro da caixa de texto
        validachances(tentativa) //chamando uma funçao
        console.log(tentativa)
    })
}
function validachances(num){
    if (isNaN(num)){
        erro.play()
        alert('Atenção, digite apenas valores numericos entre 1 e 100')
        caixaTexto.value = ""
        caixaTexto.focus()
    }
    else if(num <1 || num > 100){
        erro.play()
        alert(`o numero ${num} não é válido. informe apenas valores numericos entre 1 e 100`)
        caixaTexto.value = ""
        caixaTexto.focus()
    }
    else if(numerosjogados.includes(num)){
        numerorepetido.play()
        alert(`o numero ${num} ja foi jogado. Informe outro valor numérico.`)
        caixaTexto.value = ""
        caixaTexto.focus()
    }
    else{
        numerosjogados.push(num)
        somjogada.play()
        if(minhasjogadas === 6 && num != numeroaleatorio){
            displayJogadas(num)
                textoMsg(`Game over !! o numero secreto era ${numeroaleatorio}`)
                fimjogo()
            
        }
        else{
            displayJogadas(num)
            checarjogadas(num)
        }
    }
    function displayJogadas(num){
        caixaTexto.value= ""
        caixaTexto.focus()
        jogadasanteriores.innerHTML += `${num}, `
        minhasjogadas++
        jogadasrestantes.innerHTML = `${7 - minhasjogadas}`
    }
}
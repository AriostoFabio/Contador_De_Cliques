let resposta = document.getElementById('numCliques')
let click = 0

//Contador de Cliques
function AddClick(){
click++
resposta.innerHTML=`Voce clicou ${click} vezes`
}

//Reinicia a Contagem
function ResetClick(){
    click = 0
    resposta.innerHTML = 'Contador Zerado'

}
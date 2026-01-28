// L = comp do condutor[m]
// A = area da seção transversal[mm²]
// mat = material => resistividade do material => ro
// se for cobre = 0.017
// se for aluminio = 0.028

function calcularResistencia(L, A, Mat){
return (Mat * L) / A

}
// atribui um valor do material
// se for cobre = 0.017
// se for aluminio = 0.028

function vertipomat(mat){
const cobre = 0.017
const aluminio = 0.028
if(mat === 'cobre'){
    return cobre
}else if(mat === 'aluminio'){
    return aluminio
}else{
    return 'material inválido'
}
}
    let resposta = document.getElementById('resposta')
    let calcular = document.getElementById('calcular')

    calcular.addEventListener('click', ()=>{
        let material = document.getElementById('material').value
        let resistencia = 0.0
        let comprimento = Number(document.getElementById('comprimento').value)
        let area = Number(document.getElementById('area').value)

    
        let mat = vertipomat(material)
        console.log(mat)
    
        resistencia = calcularResistencia(comprimento, area, mat)
        console.log(`A resistencia do condutor é ${resistencia.toFixed(3)} Ω`)

        resposta.innerHTML = ''
        resposta.innerHTML += `A resistencia do condutor é ${resistencia.toFixed(3)} Ω`
        resposta.style.fontSize = '2rem'
        resposta.style.fontWeight = 'bold'
        resposta.style.fontFamily = 'Verdana'

        resposta.innerHTML += '<hr>'
    })

 
    // a função principal foi substituida por uma arroe function () =>
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

function principal(){
    let material = 'cobre' // cobre, aluminio
    let resistencia = 0.0
    let comprimento = 1000
    let area = 6.0

    let resposta = ''

    let mat = vertipomat(material)
    console.log(mat)

    resistencia = calcularResistencia(comprimento, area, mat)
    console.log(`A resistencia do condutor é ${resistencia.toFixed(3)} Ω`)
    
}
 
principal()
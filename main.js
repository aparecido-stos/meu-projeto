function verificar(){

  var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano){
     alert('[Erro] verifique os dados e tente novamente!')
   } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     if (fsex[0].checked) {
       genero = 'Homem'
     } else if (fsex[1].checked) {
       genero = 'Mulher'
     }
     res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
   }
 }
 



































//window.confirm("Gostou?")
//var n1 = Number(window.prompt("Digite um numero?"))
//var n2 = Number(window.prompt("Digite outro numero?"))
//var s = n1+n2 
//window.alert(`a soma entre os valores ${n1} mais ${n2} o resultado é ${s}`)

/*var nome = String(window.prompt ("Digite seu nome"))
var idade = Number(window.prompt ("Digite sua idade"))
var nota = Number(window.prompt ("Digite sua nota"))
window.alert (`O aluno ${nome} com a idade ${idade} tirou a nota ${nota}`)
*/

/*var idade = Number(window.prompt("Digite sua idade"))
var resultado = idade >= 18 ?'maior' :'menor'

window.alert (`sua idade é ${resultado} que 18`)
*/
/*var a = 5 + 3
var b = a - 4
var c = a + b / 2
window.alert(`Seu valor é ${c}`)
*/

/*var resultado = 5*5 >= 2 ?'maior' :'menor'
window.alert(`Seu valor é ${resultado}`)
*/
          //EXEMPLO VELOCIDADE

/*var vel = Number(prompt ("sua velocidade"))

if (vel > 60){
  alert(`Sua velocidade atual é: ${vel} Km/h \n Você ultrapassou a velocidade permitida MULTADO`)
} else{
  alert(`Sua velocidade atual é: ${vel} Km/h \n Dirija sempre usando cinto de segurança!`)
}
*/
      // EXEMPLO IDADE

/*var idade = Number(prompt("Sua idade?"))
if (idade < 16){
  alert(`Sua idade é ${idade} não vota!`)
}
  else if(idade < 18 || idade >= 67){
    alert(`Sua idade é ${idade} voto opcinal!`)
  }
  else{
    alert(`Sua idade é ${idade} voto obrigatorio!`)
  }
  */
  
              //EXEMPLO TEMPO
  
 /* var agora = new Date()
  var hora = agora.getHours()
    if (hora < 12){
  alert(`Agora são exatamente ${hora} horas Bom dia!`)
    }
  else if (hora <= 18){
  alert(`São exatamente ${hora} horas Bom tarde!`)
  }
  else{
  alert(`São exatamente ${hora} horas Bom noite!`)
  }
  */
            //DIAS DA SEMANA
            
  /*var agora = new Date()
  var diasem = agora.getDay()
    console.log(diasem)
    
    switch(diasem){
    case 0:
      alert('domingo')
      break
      case 1:
        alert('segunda')
      break
      case 2:
        alert('terça')
      break
      case 3:
        alert('quarta')
      break
      case 4:
        alert('quinta')
      break
      case 5:
        alert('sexta')
      break
      case 6:
        alert('sabado')
      break
      default:
        alert('Erro')
    }
*/

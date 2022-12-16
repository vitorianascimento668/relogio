let ponteiroSeg = document.querySelector('.ponteiro--segundos')
let ponteiroMinutos = document.querySelector('.ponteiro--minutos')
let ponteiroHoras = document.querySelector('.ponteiro--horas')
var data = ''
var horas = ''
var minutos = ''
var segundos = ''


function atualizaRelogio(){
     data = new Date
     horas = data.getHours()
     minutos = data.getMinutes()
     segundos = data.getSeconds()
}
function relogioDigital(){
    atualizaRelogio()
    document.querySelector('.numeros-digital').innerHTML = `${horas} : ${minutos} : ${segundos}`
}
function relogioAnalogico (){
    ponteiroSeg.style.transform = `translateY(-50%) rotate(${segundos*6}deg)`
    ponteiroMinutos.style.transform = `translateY(-50%) rotate(${minutos * 6}deg)`
    ponteiroHoras.style.transform = `translateY(-50%) rotate(${horas * 30}deg)`

}
setInterval(atualizaRelogio, '100')
setInterval(relogioDigital, '100')
setInterval(relogioAnalogico, '100')



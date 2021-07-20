const obj_btn_corte = document.querySelector('#btn_corte')
const obj_btn_barba = document.querySelector('#btn_barba')
const obj_btn_corte_barba = document.querySelector('#btn_corte_barba')
const obj_caption_orcamento = document.querySelector('#tab_orcamento caption')

let obj_total = 0

obj_btn_corte.addEventListener('click', FunSomaCorte)
obj_btn_barba.addEventListener('click', FunSomaBarba)
obj_btn_corte_barba.addEventListener('click', FunSomaCorteBarba)

function FunSomaCorte()
{

    obj_total += 40

    obj_caption_orcamento.innerText = 'R$' + obj_total + ',00'

}

function FunSomaBarba()
{

    obj_total += 20

    obj_caption_orcamento.innerText = 'R$' + obj_total + ',00'

}

function FunSomaCorteBarba()
{

    obj_total += 50

    obj_caption_orcamento.innerText = 'R$' + obj_total + ',00'

}
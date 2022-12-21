
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.myContainer')

const cards = document.querySelectorAll(".card")

container.addEventListener("scroll",checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight/5*4

    cards.forEach(Element=>{
        const containerTop = Element.getBoundingClientRect().top

        if(containerTop < triggerBottom){
           // Element.style.background = "darkgreen"
            Element.classList.add('show')
        }else{
           // Element.style.background = "#ff506d"
            Element.classList.remove('show')
        }
    })
}

open.addEventListener("click",()=>container.classList.add('show-nav'))
close.addEventListener("click",()=>container.classList.remove('show-nav'))
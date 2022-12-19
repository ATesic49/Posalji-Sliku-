const nav=document.querySelectorAll(".nav a")
nav.forEach(a =>{
a.addEventListener('mouseover',()=>{
a.classList.add('hovered')
})
a.addEventListener('mouseleave',()=>{
    a.classList.remove('hovered')
    })  
})

const pitanja = document.querySelectorAll('.pitanja')
const tex = document.querySelectorAll('.tex')
const span = document.querySelectorAll('.pitanja span')
 for (let i = 0; i < pitanja.length; i++) {




    pitanja[i].addEventListener('click',()=>{
        


         if (span[i].innerHTML==='+'){
             span[i].innerHTML='-'
         }else{
             span[i].innerHTML='+'
         }
         if (tex[i].style.display === 'block'){
            setTimeout(()=>{
                tex[i].style.display = 'none'

            },250)
         } else{
            tex[i].style.display = 'block'
         }
         if (tex[i].style.maxHeight){
            tex[i].style.maxHeight = null
         } else{
            tex[i].style.maxHeight = tex[i].scrollHeight + 'px'
         }
    })  
 }

pitanja.forEach(pitanje=>{
    pitanje.addEventListener('mouseover',()=>{
        pitanje.classList.add('hovered')
    })
    pitanje.addEventListener('mouseleave',()=>{
        pitanje.classList.remove('hovered')
    })
})


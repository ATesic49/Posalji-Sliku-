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

 for (let i = 0; i < pitanja.length; i++) {

    pitanja[i].addEventListener('click',()=>{
        pitanja[i].classList.toggle('white')
       if (tex[i].classList.value==='tex visible' || tex[i].classList.value==='tex dissapear visible' ){
        console.log('a')
        tex[i].classList.toggle('dissapear')

        setTimeout(() => {
        tex[i].classList.toggle('visible')
    }, 500);
        
       }else{
        tex[i].classList.toggle('visible')
        tex[i].classList.remove('dissapear')


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


  const link=document.querySelectorAll(".nav a")
        link[3].classList.add('active')



        const inputFiles = document.querySelector("#images")
        const cena = document.querySelector('#cena')
        const brKop = document.querySelector("#brKop")
    const dimenzije = document.querySelector('select')
const zaSlike = document.querySelector('.zaslike')

        inputFiles.addEventListener('change',()=>{
        console.log(inputFiles.value)
           for (let index = 0; index < inputFiles.files.length; index++) {
            const broj = inputFiles.files[index];
        zaSlike.innerHTML = `${inputFiles.files.length} files selected `
            
           }
           if (inputFiles.files.length === 1 ){
        zaSlike.innerHTML = `${inputFiles.files.length} file selected `
            
           }
           
            const broj = inputFiles.files.length*brKop.value*dimenzije.value
            cena.innerHTML =broj

        })
        brKop.addEventListener('change',()=>{
            const broj = inputFiles.files.length*brKop.value*dimenzije.value
            cena.innerHTML =broj
        })
    dimenzije.addEventListener('change',()=>{
        const broj = inputFiles.files.length*brKop.value*dimenzije.value
        cena.innerHTML =broj

    })


        const naruciCena = document.querySelector('.naruci-cena')
        const naruciSliku = document.querySelector('.naruciSliku')
        const iskljuciSliku = document.querySelector('.iskljuciSliku')
        const container = document.querySelector('.container')
        const containerAfter = window.getComputedStyle(container,'::after') 
        naruciSliku.addEventListener('click',()=>{  
            naruciCena.classList.add('flex')
            container.style.setProperty('--displayAfter-','flex')

        })
        iskljuciSliku.addEventListener('click', ()=>{
            
            naruciCena.classList.remove('flex')
            container.style.setProperty('--displayAfter-','none')

        })


        let inputTel = document.querySelector('#brojTel')
        let inputTelValue = inputTel.value
        setInterval(()=>{
            if (inputTel.value.replace(/[^\d]/g,'').length<4){
                inputTelValue = `+381`
                return inputTel.value = inputTelValue
            }
        },5)
        
inputTel.addEventListener('keydown',(p)=>{
    let inputTel = document.querySelector('#brojTel')
    let inputTelValue = inputTel.value
    inputTel.value = inputTelValue
    const phoneNumber = inputTel.value.replace(/[^\d]/g,'')
    if (p.key === 'Backspace'){
        return null
    }
    if (!inputTelValue) return inputTel.value = inputTelValue
    if (phoneNumber.length<3){
        inputTelValue = `(+${phoneNumber.slice(0,3)})`

        return inputTel.value = inputTelValue
    }
    if(phoneNumber.length<5){

        inputTelValue = `(+${phoneNumber.slice(0,3)})-${phoneNumber.slice(3,5)}`
        return inputTel.value = inputTelValue
    }
    if(phoneNumber.length<8){
        inputTelValue = `(+${phoneNumber.slice(0,3)})-${phoneNumber.slice(3,5)}-${phoneNumber.slice(5,8)}`
        return inputTel.value = inputTelValue
    }
    if(phoneNumber.length<11){
        inputTelValue = `(+${phoneNumber.slice(0,3)})-${phoneNumber.slice(3,5)}-${phoneNumber.slice(5,8)}-${phoneNumber.slice(8,10)}`
        return inputTel.value = inputTelValue
}
if(phoneNumber.length<13){
    inputTelValue = `(+${phoneNumber.slice(0,3)})-${phoneNumber.slice(3,5)}-${phoneNumber.slice(5,8)}-${phoneNumber.slice(8,10)}-${phoneNumber.slice(10,12)}`
    return inputTel.value = inputTelValue
}



})


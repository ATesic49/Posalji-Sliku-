  const link=document.querySelectorAll(".nav a")
        console.log(link)
        link[3].classList.add('active')

        function testTelefona(){
        const inputTel = document.querySelector('#brojTel')
            console.log(inputTel.value)
            if (!inputTel.value) return inputTel.value
            else{
                console.log(inputTel.value.lenght)
            }
            // if(inputTel.value.lenght < 3) return inputTel.value
            // if(inputTel.avlue.lenght < 7) {
            //     inputTel.value = `inputTel.value.slice(0,3)`
            // }
        }
        


        const inputFiles = document.querySelector("#images")
        const cena = document.querySelector('#cena')
        const brKop = document.querySelector("#brKop")
        inputFiles.addEventListener('change',()=>{
            const broj = inputFiles.files.length*20*brKop.value
            cena.innerHTML =broj

        })
        brKop.addEventListener('change',()=>{
            const broj = inputFiles.files.length*20*brKop.value
            cena.innerHTML =broj
        })


        const naruciCena = document.querySelector('.naruci-cena')
        const naruciSliku = document.querySelector('.naruciSliku')
        const iskljuciSliku = document.querySelector('.iskljuciSliku')
        naruciSliku.addEventListener('click',()=>{  
            naruciCena.classList.add('flex')
        })
        iskljuciSliku.addEventListener('click', ()=>{
          
            naruciCena.classList.remove('flex')
        })
        console.log(naruciSliku)
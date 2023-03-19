let scrollbtn = document.querySelector('.title .btn')
let scrollHadeth = document.querySelector('.hadeth')
let boxsoura=document.querySelector('.containerSoura')

scrollbtn.addEventListener('click',()=>{
   scrollHadeth.scrollIntoView({
    behavior:"smooth"
   })
})



let headActive = document.querySelector('header')
window.addEventListener('scroll',function(){
   
window.scrollY >100?headActive.classList.add('active'):headActive.classList.remove('active')
})


let prev = document.querySelector('.hadeth .buttons .prev')
let next = document.querySelector('.hadeth .buttons .next')
let number = document.querySelector('.hadeth .number')
let box = document.querySelector('.hadeth .box')
let index =0
hadethChange()
function hadethChange(){
    fetch('https://api.hadith.gading.dev/books/bukhari?range=1-300')
    .then(response => response.json()).
    then(data =>{


next.addEventListener('click',()=>{
    index == 299 ?index =0 :index++
    getHadeth()
})
prev.addEventListener('click',()=>{
    index==0?index =299:index--
    getHadeth()
})

        getHadeth()
        function getHadeth(){
            let Hadeths=data.data.hadiths
            box.innerText =Hadeths[index].arab
            number.innerText = `300 - ${index+1}`
        }
        
      
    })
}
// section
let section = document.querySelectorAll("section")
let link = document.querySelectorAll("header ul li") 

link.forEach((e)=>{
e.addEventListener('click',function(){

    document.querySelector('header ul li.active').classList.remove('active')
    e.classList.add('active')
    let target = e.dataset.filter
    section.forEach((ele)=>{
        if(ele.classList.contains(target)){
            ele.scrollIntoView({
                behavior:"smooth"
               })
        }
    })
})
})
// quaran api---
fetch('https://api.alquran.cloud/v1/meta').
then(res =>res.json())
.then((data)=>{
    getsoura()
function getsoura(){
    for(let i=0;i<114;i++){

  let soura = data.data.surahs.references[i].name
 
  let souraArabic = data.data.surahs.references[i].englishName
//   console.log(souraArabic)
  boxsoura.innerHTML += `<div class="box">
  <h4>${soura}</h4>
  <h4>${souraArabic }</h4>
</div>`

}
let boxpop = document.querySelectorAll(".containerSoura .box ")
let popup = document.querySelector('.pop_up')
let container_pop=document.querySelector('.container_pop')
aboxpop.forEach(function(e,i){
   e.addEventListener('click',function(){
    fetch(`https://api.alquran.cloud/v1/surah/${i + 1}/ar.alafasy`)
    .then(res=>res.json())
    .then((data)=>{
        let ayats=data.data.ayahs
        container_pop.innerHTML=' '
        ayats.forEach((aya)=>{
            popup.classList.add('active')
            container_pop.innerHTML += `<p class="aye">${aya.text} - (${aya.numberInSurah})</p>`

        })
        let close = document.querySelector('.close')
        close.addEventListener('click',function(){
            popup.classList.remove('active')
        })

    })
   })
})
   }


})

// ayatpopup--

// salhtime--
let content=document.querySelector('.content')
let time = document.querySelector('.time')
let title = document.querySelector(".salah .card .title")
fetch('./json/api.json')
.then(res=>res.json())
.then((data)=>{
    let name = data.name
    let time = data.time
    name.forEach((e,i)=>{
       content.innerHTML += `<div class="card">
       <div class="circle">
           <svg>
               <circle cx="100" cy="100" r="100"></circle>
           </svg>
           <p>${name[i]}</p>
       </div>
       <div class="title">${time[i]}</div>
   </div>`
    })
})
// salhtime--
// scrollup-
let up = document.querySelector('.up')

window.onscroll =  function(){
    if(this.scrollY >=1000) {
        up.style.display = 'block'

    
    }
    else{
        up.style.display = 'none'
    }
}
up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

// scrollup-

let header_ul = document.querySelector('header ul')
let bars = document.querySelector(".bars")
bars.addEventListener('click',function(){
    if(header_ul.classList.contains('active')){
        header_ul.classList.remove('active')
    }
    else{
        header_ul.classList.add('active')
    }
  
})
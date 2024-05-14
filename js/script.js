// let x =1;    recursiv funktion

// let stop;

// function rec () {
//     console.log(x++)
//     if(x < 11){
//         rec()
//     }

//     stop = setTimeout(() => {
//         console.log(x++)
//         rec()
//         if (x< 11){
//             clearInterval
//         }
//     }, 1000);
// }
// rec ()


let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

function clock (){
    let time = new Date();
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    console.log(sec)

    hours.innerHTML = hour
    minutes.innerHTML = sec

    if(min < 10){
        minutes.innerHTML = "0" + min
    }else{
        minutes.innerHTML = min
    }




    if(hour < 10){
        hours.innerHTML = "0" + hour
    }else{
        hours.innerHTML = hour
    }
    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);
}
clock() 



// // tabs
let tabsItem = [...document.querySelectorAll('.tabsItem')];
let tabsContentItem = [...document.querySelectorAll('.tabsContentItem ')]

for (let i = 0; i<tabsItem.length ; i++){
    tabsItem[i].addEventListener('click',function (){

        for (let k= 0; k <tabsContentItem.length; k++) {
            tabsContentItem[k].classList.remove('active')
            tabsItem[k].classList.remove('active')
            
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}


// // secundamer

let stopwatchBtn = document.querySelector('.stopwatch__btn')
let stopwatchHours = document.querySelector('.stopwatch__hours')
let stopwatchMinutes = document.querySelector('.stopwatch__minutes')
let stopwatchSeconds = document.querySelector('.stopwatch__seconds')
let tabsLinkSpan = document.querySelector('.tabsLink__span')
let miliSecund = 0
let secund = 0
let min = 0
let hour = 0
let timer

stopwatchBtn.addEventListener('click', function(){
    if(stopwatchBtn.innerHTML == "start"){
        stopwatchBtn.innerHTML = "stop"
        timer = setInterval( () =>{
            miliSecund++
            stopwatchSeconds.innerHTML= miliSecund % 100
            if (miliSecund == 100){
                secund ++
                stopwatchMinutes.innerHTML = secund % 60
                miliSecund = 0
            }
            if (secund == 60){
                 min ++
                 stopwatchHours.innerHTML = min
                 secund = 0 
            }
        },10);
        tabsLinkSpan.classList.add('active')
    }else if(stopwatchBtn.innerHTML == "stop"){
        stopwatchBtn.innerHTML = "clear"
        clearInterval(timer)
        tabsLinkSpan.classList.remove('active')
        tabsLinkSpan.classList.add('active_clear')
    }else if(stopwatchBtn.innerHTML == "clear"){
        tabsLinkSpan.classList.remove('active_clear')
        stopwatchBtn.innerHTML = "start"
        miliSecund = 0
        secund = 0
        min = 0
        stopwatchSeconds.innerHTML = miliSecund
        stopwatchMinutes.innerHTML = secund
        stopwatchHours.innerHTML = min
    }   
})







/*
  Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в
              соответсвии с правилавми ниже:

  1. Написать кастомные события которые будут менять статус 
  светофора:
  - start: включает зеленый свет
  - stop: включает красный свет
  - night: включает желтый свет, который моргает с 
  интервалом в 1с.
  И зарегистрировать каждое через addEventListener на 
  каждом из светофоров.

  2.  Сразу после загрузки на каждом светофоре вызывать 
  событие night, для того,
      чтобы включить режим "нерегулируемого перекрестка" 
      (моргающий желтый).

  3.  По клику на любой из светофоров нунжо включать на нем 
  поочередно красный (не первый клик)
      или зеленый (на второй клик) цвет соотвественно.
      Действие нужно выполнить только диспатча событие 
      зарегистрированое в пункте 1.

  4.  + Бонус: На кнопку "Start Night" повесить сброс всех 
  светофоров с их текущего
      статуса, на мигающий желтые.
      Двойной, тройной и более клики на кнопку не должны 
      вызывать повторную
      инициализацию инвервала.
*/

const doButton = document.getElementById('Do');

const c_trafficLight = document.querySelectorAll('.trafficLight')

var g_trafficLight__circle = document.querySelectorAll('.trafficLight__circle:nth-child(3)');
var y_trafficLight__circle = document.querySelectorAll('.trafficLight__circle:nth-child(2)');
var r_trafficLight__circle = document.querySelectorAll('.trafficLight__circle:nth-child(1)');

console.log(g_trafficLight__circle);
console.log(c_trafficLight);

let nightMode = new CustomEvent ('nightMode', {
    detail: {
     orangecolor : "rgb(255,174,66)",
     greycolor: 'grey'
    }
  })

let startMode = new CustomEvent ('startGreen', {
    detail: {
     greencolor : 'green'
    }
  })

let stopMode = new CustomEvent ('stopRed', {
    detail: {
     redcolor : 'red'
    }
  })

document.addEventListener('DOMContentLoaded',function(){
      c_trafficLight.forEach(function(light){
       light.dispatchEvent(nightMode);
    })
})


doButton.addEventListener('click',function(){
    c_trafficLight.forEach(function(light){
       light.dispatchEvent(nightMode);
    })
})

c_trafficLight.forEach(function(light,index,array){
    var clickred = 0;
    var clickgreen = 0;
    var changeColor;
    var red_circle = document.querySelector(`#v${index+1} .trafficLight__circle:nth-child(1)`);
    var yellow_circle = document.querySelector(`#v${index+1} .trafficLight__circle:nth-child(2)`);  
    var green_circle = document.querySelector(`#v${index+1} .trafficLight__circle:nth-child(3)`);
    
  light.addEventListener('click', function(e){
        light.dispatchEvent(stopMode);
        light.dispatchEvent(startMode);
   });

  light.addEventListener('nightMode', function(event){
      clearInterval(changeColor);
    let {orangecolor,greycolor} = event.detail;
    console.log(event.detail);
    red_circle.style.background = greycolor;
    green_circle.style.background = greycolor;
    yellow_circle.style.background = orangecolor;  
    
    changeColor = setInterval(Flash, 1000);
    
    function Flash(){
     yellow_circle.style.background = yellow_circle.style.background == greycolor? orangecolor:greycolor;
     }
  
   })

  light.addEventListener('stopRed', function(e){
    
    function stopFlash(){
      if(yellow_circle.style.background == 'grey'){
        clearInterval(changeColor);
      }
      else {yellow_circle.style.background = 'grey';
        clearInterval(changeColor);}
    }
    stopFlash();

    //  let red_circle = document.querySelector(`#v${index+1} .trafficLight__circle:nth-child(1)`);
    
     clickred +=1; 
     let {redcolor} = e.detail;
     
      if(clickred %2 !== 0){
        red_circle.style.background = redcolor;
        console.log(index,clickred);
     }
  })

  light.addEventListener('startGreen', function(e){
    // let green_circle = document.querySelector(`#v${index+1} .trafficLight__circle:nth-child(3)`);
    clickgreen +=1;    
    let {greencolor} = e.detail;
     if(clickgreen % 2 == 0) {
        green_circle.style.background = greencolor;
     }
  })

});
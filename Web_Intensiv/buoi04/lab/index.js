// Bai tap clock
var timer1;
var ele1 = document.getElementById('time1');

function start1(){
    var sec1 = 0;

    timer1 = setInterval(()=>{
        ele1.innerHTML = '00:' + sec1;
        sec1 ++;
    },1000);
}

function stop1() {
  clearInterval(timer1);
}

var timer2;
var ele2 = document.getElementById('time2');

function start2(){
    var sec2 = 0;

    timer2 = setInterval(()=>{
        ele2.innerHTML = '00:' + sec2;
        sec2 ++;
    },1000);
}

function stop2() {
  clearInterval(timer2);
}

var timer3;
var ele3 = document.getElementById('time3');

function start3(){  
    var sec3 = 0;

    timer3 = setInterval(()=>{
        ele3.innerHTML = '00:' + sec3;
        sec3 ++;
    },1000);
}

function stop3() {
  clearInterval(timer3);
}

var timer4;
var ele4 = document.getElementById('time4');

function start4(){
    var sec4 = 0;

    timer4 = setInterval(()=>{
        ele4.innerHTML = '00:' + sec4;
        sec4 ++;
    },1000);
}

function stop4() {
  clearInterval(timer4);
}

var timer5;
var ele5 = document.getElementById('time5');

function start5(){
    var sec5 = 0;

    timer5 = setInterval(()=>{
        ele5.innerHTML = '00:' + sec5;
        sec5 ++;
    },1000);
}

function stop5() {
  clearInterval(timer5);
}
function stopAll() {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    clearInterval(timer4);
    clearInterval(timer5);
  }  

// Bai kiem tra 
// Bai 9
var m = [1,2,3,4,5,6,'hh','9',80,100];

var mSquared =  m.filter((item)=>{
    a = ['hh', '9']
        return !a.includes(item)
});
console.log(mSquared);

// Bai 10:
var lyric = ["High knowledge, high return"];
const newLyric = lyric.map(name => name.toLowerCase());

console.log(newLyric);
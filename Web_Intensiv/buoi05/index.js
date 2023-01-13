class Clock {
    constructor(){
        this.time = new Date();
    }

    print_time1(){
        let span = document.createElement('span')
        span.innerHTML = this.time;
    
        document.getElementById('time1').appendChild(span)
    }
    print_time2(){
        let span = document.createElement('span')
        span.innerHTML = this.time;
    
        document.getElementById('time2').appendChild(span)
    }
    print_time3(){
        let span = document.createElement('span')
        span.innerHTML = this.time;
    
        document.getElementById('time3').appendChild(span)
    }
    print_time4(){
        let span = document.createElement('span')
        span.innerHTML = this.time;
    
        document.getElementById('time4').appendChild(span)
    }
    print_time5(){
        let span = document.createElement('span')
        span.innerHTML = this.time;
    
        document.getElementById('time5').appendChild(span)
    }

    printAll(){
        let span1 = document.createElement('span')
        span1.innerHTML = this.time;
    
        document.getElementById('time1').appendChild(span1)

        let span2 = document.createElement('span')
        span2.innerHTML = this.time;
        document.getElementById('time2').appendChild(span2)
        
        let span3 = document.createElement('span')
        span3.innerHTML = this.time;
    
        document.getElementById('time3').appendChild(span3)

        let span4 = document.createElement('span')
        span4.innerHTML = this.time;
        document.getElementById('time4').appendChild(span4)

        let span5 = document.createElement('span')
        span5.innerHTML = this.time;
        document.getElementById('time5').appendChild(span5)
    }
}

var clock1 = new Clock();
var clock2 = new Clock();
var clock3 = new Clock();
var clock4 = new Clock();
var clock5 = new Clock();

class MyHeader extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallBack(){
        this.innerHTML = `
        <div id="myheader"><h1>Heder is not here</h1></div>
        `;
    }
}

customElements.define("my-header", MyHeader)
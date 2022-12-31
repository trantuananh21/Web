// Bai tap Clock
class Clock {
    constructor(){
        this.time = new Date();
    }

    update_time(){
        this.time = new Date();
    }

    print_time(){
        let h1 = document.createElement('h1')
        h1.innerHTML = this.time;

        document.getElementById('time').appendChild(h1)
    }
}
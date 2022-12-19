// Bài 1
class Animal {
    constructor(name){
        this.name = name;
    }
}

class Rabit extends Animal{
    constructor(name,created){
        super(name);
        this.created = Date.now();
    }
}

let rabit = new Rabit('White Rabit');
alert(rabit.name);

// Bài 2
class Clock {
    constructor(template){
        this.template = template;
    }   
    render(){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        
        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h',hours)
        .replace('m',minutes)
        .replace('s',secs)

        console.log(output);
    }

    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(),1000);
    }
}

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };


// Bài 3:
class PhanSo{
    constructor(tu, mau){
        this.tu = tu,
        this.mau = mau;
    }

    nhap(){
        return `Nhap lan luot tu va mau cua phan so : ${this.tu} & ${this.mau}`;
    }

    xuat(){
        return `${this.tu} / ${this.mau}`;
    }

    kiemTra(){
        if(this.tu == 0 || this.mau == 0)
            return false;
        else
        return true;
    }

    static cong(a,b){
        const c = a.tu * b.mau + b.tu * a.mau;
        const d = a.mau * b.mau;

        return [
            Math.hypot(c),
            Math.hypot(d)
        ] 
    }
    static tru(a,b){
        const e = a.tu * b.mau - b.tu * a.mau;
        const f = a.mau * b.mau;

        return [
            Math.hypot(e),
            Math.hypot(f)
        ] 
    }
    static nhan(a,b){
        const g = a.tu * b.tu;
        const h = a.mau * b.mau;

        return [
            Math.hypot(g),
            Math.hypot(h)
        ] 
    }
    static chia(a,b){
        const i = a.tu * b.mau;
        const j = a.mau * b.tu;

        return [
            Math.hypot(i),
            Math.hypot(j)
        ] 
    }
};

let phanSo1 = new PhanSo(5,9);
let phanSo2 = new PhanSo(0,0);
let phanSo3 = new PhanSo(8,3);

console.log(phanSo1.nhap());
console.log(phanSo1.xuat());
console.log(phanSo2.kiemTra());
console.log(PhanSo.cong(phanSo3,phanSo1));
console.log(PhanSo.tru(phanSo3,phanSo1));
console.log(PhanSo.nhan(phanSo3,phanSo1));
console.log(PhanSo.chia(phanSo3,phanSo1));
banTuan = {
    name: "Tuan",
    age: 15,
    className: '9A',
}

// class la mot tap hop cua phan tu co chung thuoc tinh
banPhu = {
    name: "Phu",
    age: 17,
    className: '11B2',
}
banMinh = {
    name: "Minh",
    age: 17,
    className: '11B2',
}
banNhat = {
    name: "Nhat",
    age: 17,
    className: '11B2',
}
// 3 doi tuong nay thuoc class student

class student {
    constructor(name,age, className){
        this.name = name;
        this.age = age;
        this.className = className;
    }
}
// contructor tao mot doi tuong thuoc lop student
// doi tuong nay thuoc lop student
// gan cac gia tri cho doi tuong
// tra ve doi tuong

// class la khuon duc
// bien truyen vao la nguyen lieu duc
// object la do dc duc ra
// ke thua la duc them lan nua, hay gan them

var banNam = new student('Nam','18','12A5')
console.log(banNam);

// nguoi co tuoi, nam sinh, gioi tinh
// giao vien ke thua con nguoi va co them lop day
// canh sat ke thua con nguoi va them chuc vu 

// 1000 giao vien
// 1000 canh sat
// them gioi tinh

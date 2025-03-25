// 10_class.js

// 1) 생성자 함수 (이름이 대문자로 시작.)
function User(name, age, city) {
  // 필드
  this.name = name;
  this.age = age;
  this.city = city;
  //메서드
  this.getInfo = function () {
    return `${this.name}, ${this.age}, ${this.city}`;
  }
}

let hong = new User('Hong', 30, 'Daegu');
console.log(hong.getInfo());

let kim = new User('kim', 25, 'Jeju');
console.log(kim.getInfo());

// class
class Emp {
  //생성자
  constructor(id, name, dept) {
    // 해당 클래스가 가지는 필드 등록
    this._id = id; // 언더바(_)를 넣어주면 private(프라이빗)로 선언하겠다. (숨겨진 필드)
    this._name = name;
    this._dept = dept;
  }


  // get & set
  get id() { // id는 setter가 없기 때문에 변경할 수 없다.
    return this._id;
  }

  set name(name) { // name 은 읽고 변경이 가능 (get,set 존재)
    this._name = name;
  }

  get name() {
    return this._name;
  }


  // 메서드.
  setDept(dept) {
    this._dept = dept;
  }
  getDept() {
    return this._dept;
  }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200; // id는 변경되지 않음. setter가 없음.
kang.name = 'kang';
kang.setDept('Marketing');
console.log(kang);
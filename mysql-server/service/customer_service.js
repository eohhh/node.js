// service (Business)
// service/customer_service.js (주방), 화면의 기능구현
// require를 안함.
const mariaDB = require('../mapper/mapper.js');

// 전체조회
const findAll = async () => {
  let list = await mariaDB.query('selectAll');
  return list;
};

// 단건조회
const findById = async (custId) => { // (custId) 사용자가 선택해서 넘겨줘야함 (1,2...)
  let info = (await mariaDB.query('selectById', custId))[0]; // 단건조회는 배열로 값을 주기 때문에 [0]으로 처리해준다.
  return info;
};

// 등록
const addCustomer = async (custInfo) => { // 객체 => 배열로 바꿔서 받아야함.
  let columnlist = ['name', 'email', 'phone', 'address'];
  let addInfo = converterAray(custInfo, columnlist);
  let result = await mariaDB.query('insertInfo', addInfo);
  return result;
};

// 객체 => 배열로 바꾸는 과정
const converterAray = (target, list) => { // 객체안에 여러개의 필드가 있는데 내가 원하는 필드만 배열로 만듦.
  // target = {no : 1, name : 'hong', email : 'h@goog'};
  let aray = [];
  for(let field of list) {
    let val = target[field]; // target['name']
    aray.push(val); // 'hong' 을 push로 배열에 넣음.
  }
  return aray; // ['hong'...] 
}


// 수정
const modifyCustomerInfo = async (custInfo, custId) => {
  let updateInfo = [custInfo, custId];
  let result = await mariaDB.query('updateInfo', updateInfo);
  return result;
};

// 삭제
const removeCustomerInfo = async (custId) => {
  let result = await mariaDB.query('deleteInfo', custId); // 단건조회와 거의 일치함.
  return result;
};


module.exports = { // 외부에서 쓰기 위해서 exports 안에 넣어준다.
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo,
}
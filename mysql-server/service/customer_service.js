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
const addCustomer = () => {};

// 수정
const modifyCustomerInfo = () => {};

// 삭제
const removeCustomerInfo = () => {};


module.exports = { // 외부에서 쓰기 위해서 exports 안에 넣어준다.
  findAll,
  findById,
  addCustomer,
  modifyCustomerInfo,
  removeCustomerInfo,
}
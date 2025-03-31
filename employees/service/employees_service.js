// employees_service.js
const mariaDB = require('../mapper/emp_mapper.js');

// 전체조회
const findAll = async () => {
    let list = await mariaDB.query('selectAll');
    return list;
};

// 단건조회
const findById = async(empId) => {
    let info = (await mariaDB.query('selectById', empId))[0]
    console.log(empId);
    console.log(info)
    return info;
};

// 등록
const addEmployees = async (empInfo) => {
    let columnlist = ['first_name', 'last_name', 'email', 'ip_address'];
    let addInfo = converterAray (empInfo, columnlist);
    let result = await mariaDB.query ('insertInfo', addInfo);
    return result;
};

// 객체를 배열로 (등록과정)
const converterAray = (target, list) => {
    let aray = [];
    for(let field of list) {
        let val = target[field];
        aray.push(val);
    }
    return aray;
}

// 수정
const modifiyEmployeesInfo = async (empInfo, empId) => {
    let updateInfo = [empInfo, empId];
    let result = await mariaDB.query('updateInfo', updateInfo)
    return result;
};

// 삭제
const removeEmployeesInfo = async (empId) => {
    let result = await mariaDB.query('deleteInfo', empId);
    return result;
};

module.exports = {
    findAll,
    findById,
    addEmployees,
    converterAray,
    modifiyEmployeesInfo,
    removeEmployeesInfo,
}
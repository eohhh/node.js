// employees_router.js
const express = require('express');
const router = express.Router();
const empService = require('../service/employees_service.js');

// 전체조회
router.get('/employees', async(req, res) => {
    let empList = await empService.findAll();
    res.send(empList);
});

// 단건조회
router.get('/employees/:id', async (req, res) => {
    let empId = req.params.id;
    let empInfo = await empService.findById(empId);
    console.log(empInfo);
    res.send(empInfo);
});

// 등록
router.post('/employees', async (req, res) => {
    let addEmp = req.body;
    let result = await empService.addEmployees('insertInfo', addEmp);
    return result;
});

// 수정
router.put('employees/:id', async (req,res) => {
    let empId = req.params.id;
    let empInfo = req.body;
    let result = await empService.modifiyEmployeesInfo(empInfo, empId);
    res.sned(result);
});

router.delete('/empoyees/:id', async (req, res) => {
    let empId = req.params.id;
    let result = await empService.removeEmployeesInfo(empId);
    res.send(result);
});

module.exports = router;
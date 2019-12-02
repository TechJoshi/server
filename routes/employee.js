const express = require('express');
const db = require('../db')
const utils = require('../utils')

const router = express.Router();

router.get('/',(request,response)=>{
    const connection = db.connect();
    const statement= `select * from employee`;
    connection.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data)); 
    })
})

router.post('/',(resuest,response)=>{
    const {name,address} = request.body;
    const connection = db.connect();
    const statement = `insert into employee(name,address) values ('${name}','${address}')`;
    connection.query(statement,(error,data)=>{
        response.send(utils.createResult(error,data))
    })
})

module.exports = router; 
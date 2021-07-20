const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

let payments = [
    { id: '1', date: '01.07.2021', text: 'Внесена сумма', amount: 1130, },
    { id: '2', date: '21.06.2021', text: 'Внесена сумма', amount: 1130, },
    { id: '3', date: '02.05.2021', text: 'Внесена сумма', amount: 1500, },
    { id: '4', date: '11.04.2021', text: 'Внесена сумма', amount: 1130, },
    { id: '5', date: '07.03.2021', text: 'Внесена сумма', amount: 1130, },
    { id: '6', date: '02.02.2021', text: 'Внесена сумма', amount: 1100, },
    { id: '7', date: '02.01.2021', text: 'Внесена сумма', amount: 900, },
    { id: '8', date: '11.12.2020', text: 'Внесена сумма', amount: 50, },
    { id: '9', date: '05.11.2020', text: 'Внесена сумма', amount: 800, },
    { id: '10', date: '01.10.2020', text: 'Внесена сумма', amount: 1100, },
    { id: '11', date: '02.09.2020', text: 'Внесена сумма', amount: 1130, },
    { id: '12', date: '11.08.2020', text: 'Внесена сумма', amount: 920, },
    { id: '13', date: '05.07.2020', text: 'Внесена сумма', amount: 800, },
    { id: '14', date: '01.06.2020', text: 'Внесена сумма', amount: 100, },
]

let balanse = 10.05;

const getPayments = async ( req, res) => {
    res.status(200).send({
        messange: 'OK',
        data: payments
    })
}

const getBalance = async ( req, res) => {
    res.status(200).send({
        messange: 'OK',
        data: balanse
    })
}

const UpdateBalance = async ( req, res) => {

    balanse = balanse +  +req.body.amount;
    payments.push( { id: uuidv4(), date:  moment().format("DD.MM.YYYY"), text: 'Внесена сумма', amount: req.body.amount} )
    res.status(200).send({
        messange: 'Счет пополнен',
        data: balanse
    })
    
}


module.exports ={
    getPayments,
    getBalance,
    UpdateBalance
}
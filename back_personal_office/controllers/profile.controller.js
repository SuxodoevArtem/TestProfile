let user = {
    contractNumber: 291000691423,
    addres: 'ул. Мира, 11, кв. 17',
    tarifid: '1',
    datepayment: '22.07.2021',
    usetrafic: '328'
}

const getProfile = async ( req, res) => {
    res.status(200).send({
        messange: 'OK',
        data: user
    })
}

const selectTarif = async ( req, res) => {
    let selectedTarif = req.body.tarifid;
    console.log(selectedTarif)
    user.tarifid = selectedTarif;

    res.status(200).send({
        messange: 'OK',
        data: user
    })
}

module.exports ={
    getProfile,
    selectTarif
}
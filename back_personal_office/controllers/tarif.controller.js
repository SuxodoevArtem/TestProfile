let tarifs = [
    {
        id: '1',
        name: 'SuperL_88',
        internet: 500,
        tvcountt: 50,
        cost: 1130
    },
    {
        id: '2',
        name: 'SuperL_108',
        internet: 1000,
        tvcountt: 60,
        cost: 1499
    },
    {
        id: '3',
        name: 'SuperL_220',
        internet: 2000,
        tvcountt: 80,
        cost: 1730
    },
    {
        id: '4',
        name: 'SuperTV_12',
        internet: 1000,
        tvcountt: 150,
        cost: 1420
    },
    {
        id: '5',
        name: 'NotTv_99',
        internet: 1500,
        tvcountt: 0,
        cost: 800
    }
]

const getTarifs = async ( req, res) => {
    res.status(200).send({
        messange: 'OK',
        data: tarifs
    })
}

const getUserTarif = async (req, res) => {
  
    res.status(200).send({
        messange: 'OK',
        data: tarifs.filter(item => item.id == '1')
    })
}

module.exports ={
    getTarifs,
    getUserTarif
}
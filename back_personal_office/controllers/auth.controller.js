const jwt = require('jsonwebtoken');

const login = async ( { body: { email, password } }, res) => {
    console.log( email, password);

    if(email == 'user@yandex.ru' && password == "23e1s21df"){
        const token = jwt.sign({ userId: 1,
            email: email },
            'q"e6|,C`dn;(CihBFfoiZ]QN2N9/L8', 
            { expiresIn: 86400 }
        );

        res.status(200).send({
            messange: 'Пользовтаель залогинен',
            token: token
        })
        
    }else{
        res.status(403).send({
            error: 'Невреный пароль или email'
        })
    }
    
}

const logout = async ( req, res) => {
    
}

module.exports ={
    login,
    logout
}
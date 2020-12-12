const userModel = require('../Models/User')
var jwt = require('jsonwebtoken');


if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

module.exports = {
    registerController: (req, res, next) => {
        //Getting data from post
        const { name, email, password} = req.body;

        console.log(name, email, password);

        // Making a newEmp
        var newEmp = userModel({ name, email, password})

        // Inserting newEmp into database
        newEmp.save(function(err, emp) {
            if (err) throw err;
            res.redirect('/login')
        })
    },
    loginController: (req, res, next) => {
        const { email, password } = req.body

        var checkUserName = userModel.findOne({$and: [ {email, password} ]})
        checkUserName.exec((err, result) => {
            console.log(result)
            if(err || !result) {
                return res.status(400).json({
                    error : "Email Password does not exist"
                })
            } 

           res.json({result})
        })
            
        // userModel.find({$and: [{email: "hk824778@gmail.com"},{password: '12'}]}, (err, user) => {
        //     console.log(user)
        //     if(err || !user) {
        //         console.log('error')
        //         res.json({error : 'Error in Pass'})
        //     }

        //     res.json(user)
        // })
     
    },
    
}
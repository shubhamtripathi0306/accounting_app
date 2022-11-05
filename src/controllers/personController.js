let User = require('../model/personalDetailsModel')

let userRegistration = async (req,res)=>{

try {

    let data = req.body

    let user = await User.create(data)

    res.status(201).send({message:true,data:user})
    
} catch (error) {

    res.status(500).send(error)
    
}

}


module.exports = {userRegistration}

let Company = require('../model/companyModel')
let uploadFile = require('../utils/aws')

let companyRegistration = async (req,res)=>{

try {

    let data = req.body
    const files = req.files;

    
    let Img = await uploadFile(files[0]);
    data.companyLogo = Img;

    let user = await Company.create(data)

    res.status(201).send({message:true,data:user})
    
} catch (error) {

    res.status(500).send(error)
    
}

}


module.exports = {companyRegistration}

const User = require("../MongoDB/UserSchema.js");

const getDonars = async (req,res)=>{
    const {bloodGroup,country,organ} = req.query;
    if(bloodGroup || country || organ){
        const response = await User.find({bloodGroup,country,organ});
        res.send(response);
    }else{
        const response = await User.find();
        res.send(response);
    }
}

module.exports = {getDonars};
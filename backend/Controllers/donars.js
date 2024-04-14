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

const getDonarDetails = async (req,res)=>{
    const {id} = req.query;
    console.log(id);
    const response = await User.findById(id);
    res.send(response);
};

const filterDonars = async (req,res)=>{
        const {bloodGroup,city,organ} = req.query;
        const response = await User.find({$and:[{city:(city || undefined)},{bloodGroup:bloodGroup || undefined}]});
        res.send(response);
}


module.exports = {getDonars,getDonarDetails,filterDonars};
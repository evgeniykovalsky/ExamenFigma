const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    if(req.method==="OPTIONS"){
        next();
    }
    try{
        const  token=req.headers.authorifzation.split(' ')[1];//Bearer lk;dfljl;ksdjfslfj
        console.log(token);
        if(!token){
            return res.status(401).json({message:"Не авторизован"})
        }
        const decoded=jwt.verify(token, process.env.SECRET_KEY);
        req.user=decoded;
        next();
    }
    catch(e){
                 res.status(401).json({message:"Не авторизован"});
    }
}
const {validateToken}= require("../utils/auth")

exports.checkForToken = function(req,res,next){
    const token = req.cookies["token"];
    if(!token) return next();
    try{
        const userPayload = validateToken(token);
        req.user = userPayload;
        next();
    }catch (err){
        next();

    }
};

exports.onlyGrantAccessTo = function(role){
    return function(req,res,next){
        const token = req.cookies["token"];
        if(!token) return res.redirect('/');
        try{
            const userPayload = validateToken(token);
            if(userPayload.role == role){
                next();

            } else {
                res.redirect("/");
            }
            req.user = userPayload;
            next();
        }catch (err){
            next();
    
        }
    }
}
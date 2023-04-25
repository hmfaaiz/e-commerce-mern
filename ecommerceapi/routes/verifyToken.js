const jwt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;

    if (authHeader){
        const token=authHeader.split(' ')[1];
        
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if (err)
            return res.status(403).json("Token is not valid");
          
            req.user=user;
            
            
            next();
        })
  
    }else{
        //when authheader not present means token not given then this execute
        
        return res.status(403).json("You are not authenticated");
    }
};


const verifyTokenAutherization=(req,res,next)=>{
    verifyToken(req,res,()=>{

        //req.user.id info of who is login,req.params.id whic is pass in url,
        // (===means change own info otherwise admin can change any user info)
        if(req.user.id===req.params.id || req.user.isAdmin){
            
            next(); 
        }
        else{
            res.status(401).json("You are not allowed to do");
        }
    })
}

const verifyTokenAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            
            next(); 
        }
        else{
            res.status(401).json("You are not allowed to do");
        }
    })
}
module.exports={verifyToken,verifyTokenAutherization,verifyTokenAdmin};



import jwt from "jsonwebtoken"
export function identifyUser(req,res,next){
     const token = req.cookies.token;
     if(!token){
        return(res.status(401).json({
            message:"Unauthorized: No token provided"
        }))
     }
     let decoded
     try {
      decoded = jwt.verify(token,process.env.JWT_SECRET)
     } catch (error) {
      return res.status(401).json({
          message: "Unauthorized: Invalid token",
        });
     }

     req.user = {id:decoded.id}
next()
    
}
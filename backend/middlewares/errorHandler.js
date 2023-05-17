const {constants}=require('../constants')

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode : 500;
    switch(statusCode)
    {
        case constants.NOT_FOUND:
            res.json({title :"Not Found ",message:err.message,stacktrace:err.stack});
            break;
        case constants.VALIDATION_ERROR:
            res.json({title :"Validation Failed ",message:err.message,stacktrace:err.stack});
            break;
        case constants.UNAUTHORIZED_ERROR:
            res.json({title :"Unauthorized  ",message:err.message,stacktrace:err.stack});
            break;
        case constants.FORBIDDEN_ERROR:
            res.json({title :"Forbidden",message:err.message,stacktrace:err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title :"Server Error",message:err.message,stacktrace:err.stack});
            break;
        default:
            console.log("No Error! All GOOD") ;
            break;  
    }
   
}
module.exports=errorHandler
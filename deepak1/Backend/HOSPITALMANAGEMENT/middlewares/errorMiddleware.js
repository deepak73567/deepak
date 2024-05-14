class ErrorHandler extends Error{// ErrorHandler is a class exists in js
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

export const errorMiddleware=(err,req,res,next)=>{
     err.message=err.message || "Internal Server Error";
     err.statusCode=err.statusCode || 500;

     if(err.code==11000){ // for example if any user create email with matching those email whih is already exist in database
        const message=`Dublicate ${Object.keys(err.keyValue)} Entered`;
        err=new ErrorHandler(message,400);
     }
     if(err.name ==="jsonWebTokenError"){
        const message="JSON Web Token is invalid ,try again";
        err=new ErrorHandler(message,400);

     }
     if(err.name ==="TokenExpiredError"){
        const message="JSON Web Token is Expired,Try again";
        err=new ErrorHandler(message,400);

     }
     if(err.name ==="CastError"){//when entered datatype is not matched
        const message=`Invalid ${err.path}`;
        err=new ErrorHandler(message,400);

     }
    
    
     const errorMessage=err.errors ? Object.values(err.errors).map((error)=>error.message).join(" "): err.message;

     return res.status(err.statusCode).json({
        success:false,
        message:errorMessage,
     });
};

export default ErrorHandler;
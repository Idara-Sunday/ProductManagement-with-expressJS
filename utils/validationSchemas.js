 const createUserValidationSchema ={
    email:{
    notEmpty:{
        errorMessage:"email field must not be empty"
    },
    isString:{
        errorMessage:"Email must be a string"
    }
    },
    
    password:{
        isString:true,
        isLength:{
            options:{
                min:3,
                max:6
            },
            errorMessage:"Password must be at least 3 to 6 characters"
        }
    }
}

module.exports = {
    createUserValidationSchema
}
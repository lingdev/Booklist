const jwtToken = require("../../services/jwtToken")

module.exports = {

    friendlyName: 'User login',

    description: ' user login page for registered User ',
    inputs: {
       
        email: {
            type: "string",
            required: true,
        },
        
        password: {
            type: "string",
            required: true,
        },
     
    },
  
    fn: async function (inputs) {
        try{

        
        var userDetail = await User.findOne({
            email: inputs.email,
        })
        if(userDetail == undefined){
            return this.res.badRequest({
                error:"Invalid Login "

            })
        }
        if(userDetail.password !==inputs.password)
        {
            return this.res.badRequest({
                error:" Wrong Password   "

            }) 
        }
        userDetail.token=jwtToken.sign(userDetail)
        return userDetail
    }

    catch(error)
    {
    }

    }
}
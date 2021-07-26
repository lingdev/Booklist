module.exports = {

    friendlyName: 'Edit User Detail ',

    description: 'User Detail for edit  User Detail ',
    inputs: {
        firstName: {
            type: "string",
            required: true,
        },
        lastName: {
            type: "string",
        },
        email: {
            type: "string",
            required: true,
        },
        mobileNumber: {
            type: "string",
            required: true,
        },
        address: {
            type: "string",
            required: true,
        },
        

    },
  
    fn: async function (inputs) {

       await User.updateOne({
           where:{
               id:this.req.user.id
           }
        }).set({
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            mobileNumber: inputs.mobileNumber,
            address: inputs.address,
            
        })

          return (200, {
            success: true
          });

    }
}
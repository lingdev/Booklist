module.exports = {

    friendlyName: 'User Detail ',

    description: 'User Detail for registeration  ',
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
        password: {
            type: "string",
            required: true,
        },
        confirmPassword: {
            type: "string",
            required: true,
        },

    },
  
    fn: async function (inputs) {

       await User.create({
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email,
            mobileNumber: inputs.mobileNumber,
            address: inputs.address,
            password: inputs.password,
            confirmPassword: inputs.confirmPassword,
        })

          return (200, {
            success: true
          });

    }
}
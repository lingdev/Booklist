module.exports = {

    attributes: {
        firstName: {
            type: "string",required: true,
        },
        lastName: {
            type: "string",
        },
        email: {
            type: 'string',required: true, unique: true
        },
        mobileNumber: {
            type: "string", required: true,unique: true,
        },
        address: {
            type: "string",required: true,
        },
        password: {
            type: "string", required: true,
        },
        confirmPassword: {
            type: "string",required: true,
        },

    }
}

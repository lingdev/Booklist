
module.exports = {

    friendlyName: 'Get single user Detail ',

    description: 'User Detail for registered User  ',

    fn: async function () {

        var profileDetail=await User.findOne({
            where:{
                id:this.req.user.id
            }
        })
        return profileDetail
    }
    }
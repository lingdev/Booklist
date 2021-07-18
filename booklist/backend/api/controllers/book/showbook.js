
module.exports = {

    friendlyName: 'Book Detail ',

    description: 'Book Detail for Booklist ',

    fn: async function () {

        var bookDetails=await Createbook.find()
        return bookDetails
    }
    }
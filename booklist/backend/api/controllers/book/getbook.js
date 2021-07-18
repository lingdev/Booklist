
module.exports = {

    friendlyName: 'Book detail',

    description: 'Book detail enter to user and Create book  list ',
    inputs: {

        bookId: {
            type: "number",
            required: true,
        },

    },

    fn: async function (inputs) {
        try {
            var bookDetail = await Createbook.findOne({
                id: inputs.bookId,
            })
            return bookDetail
        }
        catch (error) {
        }

    }
}
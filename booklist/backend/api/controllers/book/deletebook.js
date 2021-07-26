
module.exports = {

    friendlyName: 'Delete book ',

    description: 'Delete Book Detail By User ',

    inputs: {

        bookId: {
            type: "number",
            required: true,
        },

    },

    fn: async function (inputs) {
        try {
             await Createbook.destroyOne({
                id: inputs.bookId,
            })
            return (200, {
                success: true
            });
        }

        catch (error) {
        }

    }
}
module.exports = {

    friendlyName: 'Enter Book Detail ',

    description: 'Book Detail  enter by user  ',
    inputs: {
        bookName: {
            type: "string",required: true,
        },
        authorName: {
            type: "string",required: true,
        },
        publishedYear: {
            type: 'string',required: true,
        },
        language: {
            type: "string", required: true,
        },
        keywords: {
            type: "string",
        },
        price: {
            type: "string", required: true,
        },
        totalPages: {
            type: "string",required: true,
        },
        edition: {
            type: "string",
        },
        publisher: {
            type: "string",required: true,
        },
        description: {
            type: "string",required: true,
        },
    },
  
    fn: async function (inputs) {

       await Createbook.create({
            bookName: inputs.bookName,
            authorName: inputs.authorName,
            publishedYear: inputs.publishedYear,
            language: inputs.language,
            price: inputs.price,
            totalPages: inputs.totalPages,
            edition: inputs.edition,
            publisher: inputs.publisher,
            description: inputs.description,
        })

          return (200, {
            success: true
          });

    }
}
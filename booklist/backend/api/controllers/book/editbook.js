module.exports = {

    friendlyName: 'Edit book Details ',

    description: 'Book Detail for Edit book Details  ',
    
    inputs:  {
        
        bookId: {
            type: "number",required: true,
        },
        bookName: {
            type: "string",
        },
        authorName: {
            type: "string",
        },
        publishedYear: {
            type: 'string',
        },
        language: {
            type: "string", 
        },
        keywords: {
            type: "string",
        },
        price: {
            type: "string", 
        },
        totalPages: {
            type: "string",
        },
        edition: {
            type: "string",
        },
        publisher: {
            type: "string",
        },
        description: {
            type: "string",
        },
    },
  
    fn: async function (inputs) {

       await Createbook.updateOne({
           where:{
               id:inputs.bookId
           }
        }).set({
            bookName: inputs.bookName,
            authorName: inputs.authorName,
            publishedYear: inputs.publishedYear,
            language: inputs.language,
            keywords:inputs.keywords,
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
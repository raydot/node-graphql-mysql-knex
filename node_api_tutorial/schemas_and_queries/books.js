// "FYI, we're using that funky code at the top
// to take advantage of JavaScript's closure capabilities
// in order to only have to import the buildSchema function from
// GraphQL once."

module.exports = (buildSchema) => {
	return {
		booksSchema: buildSchema(`
			type Book {
				id: ID
				name: String
				isbn: String
			}
			type Query {
				books(id: ID): [Book]
			}`
		),
		booksQuery: `
			{
				books {
					name
					isbn
				}
			} `
	}
};
db.Users.drop();
db.Users.insertMany([
    {
        _id: 1,
        "name": "Joe Smith",
        "email": "jsmith@gmail.com",
        "age": 40,
        "admin": false
    },
    {
        _id: 2,
        "name": "Jen Ford",
        "email": "jford@gmail.com",
        "age": 45,
        "admin": true
    },
    {
        _id: 3,
        "name": "Russell",
        "email": "russ@gmail.com",
        "age": 32,
        "admin": true
    }
])

db.Quotes.drop();
db.Quotes.insertMany([
    {
        _id: 1,
        uploadedByUser: 1,
        "quote": "Your self-image is the result of all you have given your subconscious mind as a database, so regardless of your background, what you are willing to become is the only reality that counts.",
        "author": "Paul J. Meyer"
    },
    {
        _id: 2,
        uploadedByUser: 1,
        "quote": "Think about it: if you were running a multi-million dollar company, and your database of customer information was stolen, would you want to tell your clients? No. Most companies did not until the laws required them to. It's in the best interest of organisations - when they're attacked and information is stolen - to tell nobody.",
        "author": "Kevin Mitnick"
    },
    {
        _id: 3,
        uploadedByUser: 1,
        "quote": "Information is not knowledge, and knowledge is not wisdom. Reading - even browsing - an old book can yield sustenance denied by a database search. Patience is a virtue, gluttony a sin.",
        "author": "James Gleick"
    },
    {
        _id: 4,
        uploadedByUser: 2,
        "quote": "Blockchain technology represents a generational opportunity to mutualize database infrastructure across entities within financial services. What that translates into is an enormous cost-saving, risk-reducing, and capital-enhancing opportunity.",
        "author": "Blythe Masters"
    },
    {
        _id: 5,
        uploadedByUser: 3,
        "quote": "So when you do your family tree and Margaret Cho does hers, and... Wanda Sykes and John Legend... we're adding to the database that scholars can then draw from to generalize about the complexity of the American experience. And that's the contribution that family trees make to broader scholarship.",
        "author": "Henry Louis Gates"
    }
])

const readDatabase = require("./utils");

readDatabase('./database.csv').then((data) => {
    
    console.log(data);
}).catch((err) => {
    console.log(err.message);
})
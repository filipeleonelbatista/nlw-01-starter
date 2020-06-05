const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// db.serialize(() => {

//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)


//     // // const query = `
//     // //             INSERT INTO places (
//     // //                 image, 
//     // //                 name,
//     // //                 address, 
//     // //                 address2, 
//     // //                 state, 
//     // //                 city, 
//     // //                 items
//     // //             ) VALUES (?,?,?,?,?,?,?);
//     // //         `
//     // // const values = [
//     // //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     // //     "Colectoria",
//     // //     "Tv. Itacolomi dois, Santa cruz",
//     // //     "N° 343",
//     // //     "Rio Grande do Sul",
//     // //     "Gravataí",
//     // //     "Resíduos Eletronicos, Lâmpadas",
//     // // ]

//     // const query = `
//     //             INSERT INTO places (
//     //                 image, 
//     //                 name,
//     //                 address, 
//     //                 address2, 
//     //                 state, 
//     //                 city, 
//     //                 items
//     //             ) VALUES (?,?,?,?,?,?,?);
//     //         `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
//     //     "Pappersider",
//     //     "Tv. Itacolomi dois, Santa cruz",
//     //     "N° 343",
//     //     "Rio Grande do Sul",
//     //     "Gravataí",
//     //     "Resíduos Eletronicos, Lâmpadas",
//     // ]

//     // db.run(query, values, function(err){
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // })    

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // })

//     // // db.all(`SELECT name FROM places`, function(err, rows){
//     // //     if (err) {
//     // //         return console.log(err)
//     // //     }

//     // //     console.log("Aqui estão seus registros")
//     // //     console.log(rows)
//     // // })

// })
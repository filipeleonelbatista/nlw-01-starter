const express = require('express');
const server = express();

const db = require("./database/db");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server.get('/', (req, res) => {
    return res.render("index.html")
})

server.get('/create-point', (req, res) => {
    return res.render("create-point.html")
})

server.post('/savepoint', (req, res) => {
    const data = req.body

    const query = `
                    INSERT INTO places (
                        image, 
                        name,
                        address, 
                        address2, 
                        state, 
                        city, 
                        items
                    ) VALUES (?,?,?,?,?,?,?);
                `
    const values = [
        data.image,
        data.name,
        data.address,
        data.address2,
        data.state,
        data.city,
        data.items,
    ]

    db.run(query, values, function (err) {
        if (err) {
            console.log(err)
            return res.render("create-point.html", { error: true })
        }

        console.log("Cadastrado com sucesso")
        console.log(this)


        return res.render("create-point.html", { saved: true })
    })

})

server.get('/search', (req, res) => {
    const search = req.query.search

    if (search === ""){
        return res.render("search-results.html", { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total })
    })

})

server.listen(3000);


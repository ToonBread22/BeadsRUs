const express = require('express')
const app = new express()
const db = require('better-sqlite3')('database.db')

app.use(express.static('./client/build'))
app.use(express.json())

app.get('/beads',(req,res) => {
    const query = db.prepare("SELECT * FROM beads")
    const beads = query.all()
    res.json({
        beads
    })
})

app.post("/checkout",(req,res) => {
    const {beadId} = req.body
    const query = db.prepare("UPDATE beads SET available = 0 WHERE id = ?")
    const result = query.run(beadId)
    console.log(`checked out ${result.changes} bead(s)`)
    res.json({
        didCheckOut: result.changes > 0 ? true : false,
        beadId
    })
})

app.listen(3000,() => {
    console.log("server started")
})
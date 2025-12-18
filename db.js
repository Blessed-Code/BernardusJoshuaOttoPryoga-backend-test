const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: '188.166.219.160',
    port: 5432, // default Postgres port
    database: 'master'
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}
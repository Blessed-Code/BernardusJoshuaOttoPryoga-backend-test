const db = require('../db')

exports.GetLastPendidikanMurid = async () => {
    try {
            const result = await db.query(`
                select p.id_murid , m."name" , p.status as pendidikan_terakhir, m.time_create ,p.time_create as time_update
                from murid m 
                join pendidikan p on m.id = p.id_murid 
                where p.id = any (
                    select p1.id
                    from pendidikan p1
                    where p1.id_murid = m.id
                    order by time_create desc
                    limit 1
                )
        `)
            return result.rows
        } catch (error) {
            return error
        }
}
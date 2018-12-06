const database = require('../database-connection')

module.exports = {
    list() {
        return database('player').select()
    },
    read(id) {
        return database('player').select().where('id', id).first()
    },
    getPlayerByEmail(email) {
        return database('player').select().where('email', email).first()
    },
    create(player) {
        return database('player').insert(player).returning('*').then(record => record[0])
    },
    update(id, player) {
        return database('player').where('id', id).update(player, '*').then(record => record[0])
    },
    delete(id) {
        return database('player').where('id', id).del()
    }
}
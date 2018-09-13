const database = require('../database-connection')

module.exports = {
    list() {
        return database('character').select()
    },
    read(id) {
        return database('character').select().where('id', id).first()
    },
    create(character) {
        return database('character').insert(character).returning('*').then(record => record[0])
    },
    update(id, character) {
        return database('character').where('id', id).update(character, '*').then(record => record[0])
    },
    delete(id) {
        return database('character').where('id', id).del()
    }
}
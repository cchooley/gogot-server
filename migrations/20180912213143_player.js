exports.up = function (knex, Promise) {
    return knex.schema.createTable('player', (table) => {
        table.increments('id').primary(),
        table.text('name'),
        table.text('aka'),
        table.integer('picksMade'),
        table.boolean('active'),
        table.string('image')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('player')
};
exports.up = function (knex, Promise) {
    return knex.schema.createTable('character', (table) => {
        table.increments('id').primary(),
            table.text('name'),
            table.text('aka'),
            table.text('gender'),
            table.text('playedBy'),
            table.integer('timesPicked'),
            table.boolean('eligible'),
            table.boolean('alive'),
            table.string('avatar'),
            table.string('proPic')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('character')
};
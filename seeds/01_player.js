const authUtils = require('../utils/auth')

exports.seed = function (knex, Promise) {
  return knex('player').del().then(() => {
    return knex('player').insert([{
        id: 1,
        name: 'Conor Hooley',
        aka: 'Hooleyfinger',
        email: 'conor@hotmail.com',
        password: authUtils.hashPassword('one'),
        image: 'img1.jpg',
        picksMade: 0,
        active: true
      },
      {
        id: 2,
        name: 'Brady Smith',
        aka: 'Lord Dumbbeard',
        email: 'brady@hotmail.com',
        password: authUtils.hashPassword('two'),
        image: 'img1.jpg',
        picksMade: 0,
        active: true
      },
      {
        id: 3,
        name: 'Stasia Vinnedge',
        aka: 'Stable Stasia',
        email: 'stasia@hotmail.com',
        password: authUtils.hashPassword('three'),
        image: 'img1.jpg',
        picksMade: 0,
        active: true
      }
    ]);
  }).then(() => {
    return knex.raw('ALTER SEQUENCE player_id_seq RESTART WITH 4;');
  });
};
exports.seed = function (knex, Promise) {
  return knex('character').del().then(() => {
    return knex('character').insert([{
        id: 1,
        name: 'Brienne of Tarth',
        aka: 'The Maid of Tarth, Brienne the Beauty, Brienne the Blue',
        titles: '',
        dob: '280 AC',
        gender: 'female',
        playedBy: 'Gwendoline Christie',
        eligible: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/y8dcb258',
        proPic: 'https://tinyurl.com/y8pq2dkt'
      },
      {
        id: 2,
        name: 'Sandor Clegane',
        aka: 'The Hound, Dog',
        titles: '',
        dob: '270 AC',
        gender: 'male',
        playedBy: 'Rory McCann',
        eligible: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/y8yl2xrw',
        proPic: 'https://tinyurl.com/ybhhqt6h'
      },
      {
        id: 3,
        name: 'Bronn',
        aka: 'Ser Bronn of the Blackwater, Lord Stokeworth',
        titles: 'Ser, Lord Protector of Stokeworth',
        dob: '264 AC',
        gender: 'male',
        playedBy: 'Jerome Flynn',
        eligible: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/ycyaadtg',
        proPic: 'https://tinyurl.com/ydxjahgg'
      }
    ]);
  }).then(() => {
    return knex.raw('ALTER SEQUENCE character_id_seq RESTART WITH 4;');
  });
};
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
        image: 'https://tinyurl.com/y8dcb258',
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
        image: 'https://tinyurl.com/y8yl2xrw',
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
        image: 'https://pm1.narvii.com/6364/646e420104989f1ef03bbd4fd0c7e4667bb3bf20_128.jpg',
      }
    ]);
  }).then(() => {
    return knex.raw('ALTER SEQUENCE character_id_seq RESTART WITH 4;');
  });
};
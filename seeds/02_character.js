exports.seed = function (knex, Promise) {
  return knex('character').del().then(() => {
    return knex('character').insert([{
        id: 1,
        name: 'Brienne of Tarth',
        aka: 'The Maid of Tarth, Brienne the Beauty, Brienne the Blue',
        playedBy: 'Gwendoline Christie',
        eligible: true,
        alive: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/y8dcb258',
        proPic: 'https://tinyurl.com/y8pq2dkt'
      },
      {
        id: 2,
        name: 'Sandor Clegane',
        aka: 'The Hound, Dog',
        playedBy: 'Rory McCann',
        eligible: true,
        alive: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/y8yl2xrw',
        proPic: 'https://tinyurl.com/ybhhqt6h'
      },
      {
        id: 3,
        name: 'Bronn',
        aka: 'Ser Bronn of the Blackwater, Lord Stokeworth',
        playedBy: 'Jerome Flynn',
        eligible: true,
        alive: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/ycyaadtg',
        proPic: 'https://tinyurl.com/ydxjahgg'
      },
      {
        id: 4,
        name: 'Jon Snow',
        aka: 'Aegon Targaryen, Lord Snow, The Bastard of Winterfell, King Crow, The Prince That Was Promised, The White Wolf',
        playedBy: 'Kit Harrington',
        eligible: true,
        alive: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/yalgzpkd',
        proPic: 'https://tinyurl.com/y7wgxfps'
      }, {
        id: 5,
        name: 'Daenerys Targaryen',
        aka: 'Queen of the Andals, the Rhoynar, and the First Men (claimant), Protector of the Seven Kingdoms(claimant), Khaleesi of the Great Grass Sea, Lady of Dragonstone, Queen of Meereen(formerly) Daenerys of the House Targaryen, the First of Her Name, Daenerys Stormborn, Dany, The Unburnt, The Breaker of Chains, The Mother of Dragons, Mhysa, The Queen Across the Sea, The Silver Queen, The Dragon Queen, The Princess That Was Promised, The Dragon\'s Daughter',
        playedBy: 'Emilia Clarke',
        eligible: true,
        alive: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/yb7wjjt6',
        proPic: 'https://tinyurl.com/y6u2b7hz'
      }, {
        id: 6,
        name: 'Arya Stark',
        aka: 'Arry, Lanna, Mercy',
        playedBy: 'Maisie Williams',
        eligible: true,
        alive: true,
        timesPicked: 0,
        avatar: 'https://tinyurl.com/ybbor4fv',
        proPic: 'https://tinyurl.com/yc6m4q4h'
      }
    ]);
  }).then(() => {
    return knex.raw('ALTER SEQUENCE character_id_seq RESTART WITH 4;');
  });
};
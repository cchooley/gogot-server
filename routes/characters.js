
const express = require('express');
const router = express.Router();

const queries = require('../queries/characters');

router.get('/', (request, response, next) => {
  queries.list()
    .then(character => {
      response.json({ character });
    })
    .catch(next);
});

router.get('/:id', (request, response, next) => {
  queries.read(request.params.id)
    .then(character => {
      characters
        ? response.json({ character })
        : response.status(404).json({ character: 'Not found' })
    })
    .catch(next);
});

router.post('/', (request, response, next) => {
  queries.create(request.body)
    .then(character => {
      response.status(201).json({ character });
    })
    .catch(next);
});

router.delete('/:id', (request, response, next) => {
  queries.delete(request.params.id)
    .then(() => {
      response.status(204).json({ deleted: true });
    })
    .catch(next);
});

router.put('/:id', (request, response, next) => {
  queries.update(request.params.id, request.body)
    .then(character => {
      response.json({ character });
    })
    .catch(next);
});

module.exports = router;
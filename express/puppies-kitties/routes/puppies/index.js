const puppies = [
  {
      id: 1,
      name: 'Fluffykins',
      breed: 'Labradoodle',
      likes: ['naps', 'bones', 'cuddles'],
      dislikes: ['milk']
  },
  {
      id: 2,
      name: 'Sprinkles',
      breed: 'Dalmatian',
      likes: ['petting', 'snacks', 'swimming'],
      dislikes: ['all other animals', 'Dachshunds']
  },
  {
      id: 3,
      name: 'Bibblyboo',
      breed: 'Pug',
      likes: ['snoring'],
      dislikes: ['Dalmatians', 'trees']
  },
  {
    id: 4,
    name: 'Fred',
    breed: 'Frenchie',
    likes: ['snark', 'chasing rabbits', 'turkey'],
    dislikes: ['birds', 'squirrels', 'uneven bedding']
  }
]

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json(puppies);
});

module.exports = router;
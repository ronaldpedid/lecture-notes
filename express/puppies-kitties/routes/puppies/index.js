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

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let puppy = puppies.find(puppy => puppy.id == id);

  if (!puppy) {
    return res.status(404).send();
  }

  res.json(puppy);
});

router.post("/", (req, res) => {
  puppies.push(req.body);

  res.json(req.body);
});

// DELETE  /puppies/2
router.delete("/:id", (req, res) => {
  let id = req.params.id;

  let index = puppies.findIndex(puppy => puppy.id == id);

  let deletedPuppies = puppies.splice(index, 1);

  res.json(deletedPuppies[0]);
});

module.exports = router;
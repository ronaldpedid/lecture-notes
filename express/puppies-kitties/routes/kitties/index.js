const kitties = [
  {
    id: 1,
    name: 'Socks',
    breed: 'Tuxedo',
    likes: ['catnip', 'cuddles'],
    dislikes: ['puppies']
  },
  {
    id: 2,
    name: 'Muffin',
    breed: 'Tabby',
    likes: ['snacks', 'sunshine'],
    dislikes: ['vacuums']
  },
  {
    id: 3,
    name: 'Sam',
    breed: 'Siamese',
    likes: ['clawing things', 'trees'],
    dislikes: ['toys meant for clawing']
  }
];

const router = require("express").Router();

router.get("/", (req, res) => {
  res.json(kitties);
});

router.post("/", (req, res) => {
  kitties.push(req.body);

  res.json(req.body);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;

  let kitty = kitties.find(val => val.id == id);

  res.json(kitty);
});

module.exports = router;
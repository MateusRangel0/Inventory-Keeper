const items = [
  {
    id: 1,
    name: "Poção de vitalidade",
    type: "Consumivel",
    description: 
      "Uma poção com um líquido denso avermelhado com gosto de alcohol. Recupera 5 de HP ao beber. Não recomendo tomar muito, talvez você passe mal."
  }
];

const getAll = (_, res) => {
  res.json(items);
};

const create = (req, res) => {
  const {
    name,
    type,
    description
  } = req.body;

  const nextId = items[items.length - 1].id + 1;

  const newItem = {
    id: nextId,
    name,
    type,
    description
  };

  items.push(newItem);

  return res.json(newItem);
};
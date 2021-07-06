const { Thing } = require("../db/models");


exports.createThing = async (req, res, next) => {
  try {
    const newThing = await Thing.create(req.body);
    res.status(201).json(newThing);
  } catch (error) {
    next(error);
  }
};

exports.fetchGarbage = async (req, res, next) => {
  try {
    const garbages = await Thing.findAll({
      where: { isTreasure: false },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(garbages);
  } catch (error) {
    next(error);
  }
};


exports.fetchTreasure = async (req, res, next) => {
  try {
    const treasures = await Thing.findAll({
      where: { isTreasure: true },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(treasures);
  } catch (error) {
    next(error);
  }
};


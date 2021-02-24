const Child = require("../models/child");

module.exports = {
  async addChild(req, res) {
    try {
      const result = await Child.create({ ...req.body });
      return res.json({ success: true, child: result });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async getChild(req, res) {
    try {
      const result = await Child.find();
      return res.json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async getOneChild(req, res) {
    try {
      const result = await Child.findOne({ _id: req.params.id });
      return res.json(result);
    } catch (error) {
      console.log(error);
    }
  },
};

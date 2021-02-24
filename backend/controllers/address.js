const Address = require("../models/address");

module.exports = {
  async addState(req, res) {
    try {
      const result = await Address.create({ ...req.body });
      return res.json({ success: true, result });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async getState(req, res) {
    try {
      var result = await Address.find(
        { state: { $exists: true } },
        { state: 1 }
      );
      return res.json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async addDistrict(req, res) {
    try {
      const result = await Address.create({ ...req.body });
      return res.json({ success: true, result });
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async getDistrict(req, res) {
    try {
      var result = await Address.find(
        { state: { $exists: true }, district: { $exists: true } },
        { state: 1, district: 1 }
      );
      return res.json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

const MenuItem = require('../models/MenuItem');

exports.getMenuItems = async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;
  const menuItem = new MenuItem({ name, description, price, category, imageUrl });
  await menuItem.save();
  res.status(201).json(menuItem);
};

const Store = require('../models/Store');
const Rating = require('../models/Rating');

exports.addStore = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    const store = new Store({ name, email, address });
    await store.save();

    res.status(201).json(store);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find().populate('ratings');
    res.json(stores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.rateStore = async (req, res) => {
  try {
    const { storeId, rating } = req.body;
    const userId = req.user.id;

    let store = await Store.findById(storeId);
    if (!store) return res.status(404).json({ message: 'Store not found' });

    let userRating = await Rating.findOne({ user: userId, store: storeId });

    if (userRating) {
      userRating.rating = rating;
      await userRating.save();
    } else {
      userRating = new Rating({ user: userId, store: storeId, rating });
      await userRating.save();
    }

    const ratings = await Rating.find({ store: storeId });
    store.rating = ratings.reduce((acc, rate) => acc + rate.rating, 0) / ratings.length;

    await store.save();

    res.json({ store, userRating });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

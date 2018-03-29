module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, imageurl } = req.body;
    dbInstance
      .create_product([name, description, price, imageurl])
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .read_product([id])
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .update_products([id])
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .delete_product([id])
      .then(() => res.status(200).json())
      .catch(err => console.log(err));
  }
};

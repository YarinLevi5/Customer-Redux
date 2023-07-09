const Customer = require("./customerModel");

const findAndupdateCustomer = (currentCustomerID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate({
        _id: currentCustomerID,
      });
      if (!updatedCustomer) {
        let newCustomer = new Customer({
          name: "Yael",
          age: "35",
        });
        newCustomer
          .save()
          .then((customer) => resolve(customer))
          .catch((err) => reject(err));
      }
      resolve(updatedCustomer);
    } catch (error) {
      reject(`There is an error ${error}`);
    }
  });
};

module.exports = {
  findAndupdateCustomer,
};

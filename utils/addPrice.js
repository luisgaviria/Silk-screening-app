const neatCsv = require("neat-csv");
const fs = require("fs");
const Product = require("../models/Product");

module.exports.addPrice = async () => {
  const data = fs.readFileSync("./data/SanMar_EPDD.csv");
  const items = await neatCsv(data);

  let products = await Product.find();
  for (let product of products) {
    for (const item of items) {
      if (product.title == item.PRODUCT_TITLE) {
        product.MSRP = item.MSRP;
        product.suggested_price = item.SUGGESTED_PRICE;
      }
    }
    console.log(product.MSRP, product.suggested_price);
    try {
      await Product.updateOne(
        {
          _id: product._id.toString(),
        },
        {
          $set: {
            MSRP: product.MSRP,
            suggested_price: product.suggested_price,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  console.log("Finished!");
};

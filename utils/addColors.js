const neatCsv = require("neat-csv");
const fs = require("fs");
const Product = require("../models/Product");

module.exports.addColors = async () => {
  const data = fs.readFileSync("./data/SanMar_EPDD.csv");
  const items = await neatCsv(data);

  let products = await Product.find();
  for (let product of products) {
    for (const item of items) {
      for (let [index, color] of product.colors.entries()) {
        if (color == item.COLOR_PRODUCT_IMAGE_THUMBNAIL) {
          color = {
            url: item.COLOR_PRODUCT_IMAGE_THUMBNAIL,
            color: item.COLOR_NAME,
          };
          product.colors[index] = color;
        }
      }
    }
    console.log(product.colors);
    try {
      await Product.updateOne(
        {
          _id: product._id.toString(),
        },
        { $set: { colors: product.colors } }
      );
    } catch (err) {
      console.log(err);
    }
    // await product.save();
  }
  console.log("Finished!");
  //   for (const item of items) {
  //     let product = await Product.findOne({
  //       colors: { $in: item.COLOR_PRODUCT_IMAGE_THUMBNAIL },
  //     });
  //   }
  // product = product.toJSON();

  //     for (let [index, color] of product.colors.entries()) {
  //       if (color == item.COLOR_PRODUCT_IMAGE_THUMBNAIL) {
  //         color = {
  //           url: item.COLOR_PRODUCT_IMAGE_THUMBNAIL,
  //           color: item.COLOR_NAME,
  //         };
  //         product.colors[index] = color;
  //       }
  //     }
  //     console.log("Updating...");
  //     try {
  //       console.log(product);
  //       await product.save();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   console.log("Finished!");
};

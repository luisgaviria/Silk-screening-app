const neatCsv = require("neat-csv");
const fs = require("fs");
const Product = require("../models/Product");

const getDataFromFtp = async (addDataToDb) => {
  const Client = require("ftp");
  const server = new Client();

  await server.connect({
    host: "ftp.sanmar.com",
    port: 21,
    user: "250900",
    password: "Sanmar00",
  });

  await server.on("ready", async () => {
    await server.cwd("./SanMarPDD", async () => {
      await addDataToDb();
      server.end();
      // await server.get("SanMar_EPDD.csv", async (err, stream) => {
      //   if (err) throw err;
      //   stream.once("close", async () => {
      //     console.log("Finished");
      //     await addDataToDb();
      //     server.end();
      //   });
      //   stream.pipe(fs.createWriteStream("./data/SanMar_EPDD.csv"));
      // });
      //   await server.pwd((err, list) => {
      //   });
    });
  });

  //   await server.on("ready", async () => {
  //     await server.list(async (err, list) => {
  //       await server.cwd("./SanMarPDD",;
  //     });
  //   });
};

module.exports.addProductsToDb = async () => {
  await getDataFromFtp(async () => {
    const data = fs.readFileSync("./data/SanMar_EPDD.csv");
    const items = await neatCsv(data);

    for (const item of items) {
      try {
        console.log(item);
        const product = new Product({
          title: item.PRODUCT_TITLE,
          colors: [],
          images: [],
          sizes: item.AVAILABLE_SIZES,
          description: item.PRODUCT_DESCRIPTION,
          category: item.CATEGORY_NAME,
        });

        product.colors.push(item.COLOR_PRODUCT_IMAGE_THUMBNAIL);
        product.images.push(item.FRONT_FLAT_IMAGE, item.FRONT_MODEL_IMAGE_URL);

        await product.save();
      } catch (err) {
        //   console.log(err);
        const product = await Product.findOne({ title: item.PRODUCT_TITLE });
        let duplicate_color = false;
        let duplicate_image = false;
        for (const color of product.colors) {
          if (color == item.COLOR_PRODUCT_IMAGE_THUMBNAIL) {
            duplicate_color = true;
          }
        }
        for (const image of product.images) {
          if (
            image == item.FRONT_FLAT_IMAGE ||
            image == item.FRONT_FLAT_IMAGE
          ) {
            duplicate_image = true;
          }
        }
        if (!duplicate_color) {
          product.colors.push(item.COLOR_PRODUCT_IMAGE_THUMBNAIL);
        }
        if (!duplicate_image) {
          product.images.push(
            item.FRONT_FLAT_IMAGE,
            item.FRONT_MODEL_IMAGE_URL
          );
        }

        await product.save();
      }
    }
  });
};

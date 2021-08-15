// const neatCsv = require("neat-csv");
// const fs = require("fs");
const { addProductsToDb } = require("../utils/addProducts");
const { addColors } = require("../utils/addColors");
const Product = require("../models/Product");

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const count_pages = (array, page_size) => {
  let pages = array.length / page_size;
  if (pages > parseInt(pages)) {
    pages = parseInt(pages) + 1;
  }
  return pages;
};

// const filterFromStrangeChars = (title) => {
//   let temp = title;
//   // temp = title.replaceAll("&#174;", "");
//   // temp = temp.replaceAll("&#153;", "");
//   return temp;
// };

// const removeDuplicates = (data) => {
//   return data.filter((value, index) => data.indexOf(value) === index);
// };

module.exports = (app) => {
  app.get("/api/catalog", async (req, res, next) => {
    console.log(req.query);
    const category = req.query.category;
    const page = req.query.page;
    const limit = req.query.limit;
    if (!category || !page || !limit) {
      return res.status(404).json({
        message: "You need to specify queries category, page, limit",
      });
    }

    let products = await Product.find({ category: category });

    const pages = count_pages(products, limit);

    products = paginate(products, limit, page);

    for (let product of products) {
      product.title = product.title.split("&#174;").join();
      product.title = product.title.split("&#153;").join();
      product.title = product.title.replace(/,/g, "");
    }

    return res.status(200).json({
      products: products,
      pages: pages,
      page: page,
      limit: limit,
    });

    // let results = {};
    // const data = fs.readFileSync("./data/SanMar_EPDD.csv");
    // const items = await neatCsv(data);
    // for (const item of items) {
    //   results[item.CATEGORY_NAME] = [];
    // }
    // for (const item of items) {
    //   results[item.CATEGORY_NAME].push(item);
    // }

    // let response_data = results[category];
    // response_data = paginate(response_data, limit, page);
    // return res.status(200).json({
    //   items: response_data,
    //   page: page,
    //   limit: limit,
    // });
  });
  app.get("/api/catalog/categories", async (req, res, next) => {
    const products = await Product.find();

    let categories = products.map((product) => {
      return product.category;
    });

    categories = [...new Set(categories)];

    return res.status(200).json({
      categories: categories,
    });

    // const data = fs.readFileSync("./data/SanMar_EPDD.csv");
    // const items = await neatCsv(data);
    // let categories = [];
    // for (const item of items) {
    //   categories.push(item.CATEGORY_NAME);
    // }
    // categories = removeDuplicates(categories);
    // return res.status(200).json({
    //   categories: categories,
    // });
  });

  app.get("/api/addcolors/test", async (req, res, next) => {
    await addColors();
  });

  app.get("/api/catalog/details/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;
    const product = await Product.findOne({
      _id: itemId,
    });

    product.title = product.title.split("&#174;").join();
    product.title = product.title.split("&#153;").join();
    product.title = product.title.replace(/,/g, "");

    return res.status(200).json({
      product: product,
    });
  });

  app.get("/api/scrapToDb", async (req, res, next) => {
    await addProductsToDb();
  });
};

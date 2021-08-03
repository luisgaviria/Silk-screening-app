const neatCsv = require("neat-csv");
const fs = require("fs");

const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

const removeDuplicates = (data) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};

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
    let results = {};
    const data = fs.readFileSync("./data/SanMar_EPDD.csv");
    const items = await neatCsv(data);
    for (const item of items) {
      results[item.CATEGORY_NAME] = [];
    }
    for (const item of items) {
      results[item.CATEGORY_NAME].push(item);
    }

    let response_data = results[category];
    response_data = paginate(response_data, limit, page);
    return res.status(200).json({
      items: response_data,
      page: page,
      limit: limit,
    });
  });

  app.get("/api/catalog/categories", async (req, res, next) => {
    const data = fs.readFileSync("./data/SanMar_EPDD.csv");
    const items = await neatCsv(data);
    let categories = [];
    for (const item of items) {
      categories.push(item.CATEGORY_NAME);
    }

    categories = removeDuplicates(categories);

    return res.status(200).json({
      categories: categories,
    });
  });
};

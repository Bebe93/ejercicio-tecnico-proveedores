var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto("https://web.gencat.cat/ca/inici");
  await page.type("#cercadorOcultGoogle", "agenda cultural");
  await page.click('[aria-label="Cercar"]');

  // await browser.close();
})();

module.exports = router;

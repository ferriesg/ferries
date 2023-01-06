let fs = require("fs");

const path = "./sitemap_MIK_public1.xml";

const newUrl = new Set([
  "/",
  "/accessibility",
  "/affiliate-program",
  "/balloon-inflation",
  "/black-friday",
  "/boredom-busters",
  "/camp-creatology",
  "/coupon-policy-and-price-guarantee",
  "/coupon-policy/ca-coupon-policy",
  "/covid-19-response",
  "/cyber-monday",
  "/design-library",
  "/diversity",
  "/download-app",
  "/infusible-ink",
  "/jobs",
  "/labor-day",
  "/lowest-prices-of-the-season",
  "/luck",
  "/maker-academy",
  "/marketing-coupon",
  "/michaels-gives-back",
  "/michaels-pro",
  "/michaels-rating-and-review-sweepstakes/ratings-reviews-tc",
  "/presidents-day",
  "/privacyrights",
  "/product-policy/ca-product-policy",
  "/product-recalls",
  "/product-recalls/ca-recall",
  "/projects/yarn",
  "/red-white-blue-sale",
  "/return-policy",
  "/return-policy/ca-return-policy",
  "/shipping-policy",
  "/shipping-policy/ca-shipping-policy",
  "/site-map",
  "/small-business",
  "/sustainability",
  "/sustainability/environmental",
  "/sustainability/governance",
  "/sustainability/social",
  "/teachergiveaway",
  "/teachers",
  "/tech101",
  "/terms-and-conditions",
  "/terms&conditions",
  "/tool-rental",
  "/ups-service",
  "/value-info",
  "/weekly-ad",
  "/welcome-ac-moore",
  "/yarn-pattern-library",
  "/your-privacy-rights",
  "/cart",
  "/coupons",
  "/curbside-pickup",
  "/customer-care",
  "/guest-history/browsing-history",
  "/marketplace",
  "/military-discount",
  "/rewards",
  "/rewards/rewards-faq",
  "/rewards/terms",
  "/senior-discount",
  "/signin",
  "/signup",
  "/store-locator",
  "/tax-exempt",
  "/teacher-discount",
  "/track-my-order",
  "/classes",
  "/projects",
  "/withoutHeader/accessibility",
  "/withoutHeader/affiliate-program",
  "/withoutHeader/coupon-policy-and-price-guarantee",
  "/withoutHeader/covid-19-response",
  "/withoutHeader/diversity",
  "/withoutHeader/product-policy/ca-product-policy",
  "/withoutHeader/product-recalls",
  "/withoutHeader/return-policy",
  "/withoutHeader/shipping-policy",
  "/withoutHeader/terms-and-conditions",
  "/withoutHeader/your-privacy-rights",
  "/waiting-room",
]);
const writeData = Array.from(newUrl).map((item) => {
  process.env.TZ = "America/Chicago";
  const date = new Date();
  return `<url>
                <loc>${
                  item.startsWith("/")
                    ? `https://www.michaels.com${item}`
                    : `https://www.michaels.com`
                }</loc>
                <lastmod>${date}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
           </url>`;
});
const res =
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd">\n' +
  writeData.join("") +
  "\n</urlset>";
console.log(writeData);
fs.exists(path, (exist) => {
  if (exist) {
    console.log("change dom");
  } else {
    console.log("create dom");
  }
  fs.writeFile(path, res, (error) => {
    if (error) {
      console.log("error");
      return;
    } else {
      console.log("refresh write");
    }
  });
});

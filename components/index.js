let fs = require("fs");

const path = "./sitemap_MIK_public.xml1";

const Url = [
  "/product-recalls",
  "/product-policy/ca-product-policy",
  "/track-my-order",
  "/return-policy",
  "/shipping-policy",
  "/coupon-policy-and-price-guarantee",
  "/tax-exempt",
  "/terms-and-conditions",
  "/your-privacy-rights",
  // "https://privacyportaluat.onetrust.com/webform/f5cd40be-291d-45c5-bc0a-14cbd45c7721/ac2301f5-9b58-4c74-9ba3-d59574bf1ff7",
  // "https://storage.googleapis.com/dev00-mik-202012-v1/5251972905331539968",
  "/curbside-pickup",
  "/download-app",
  "/shop-save",
  "/customer-care",
  "/store-locator",
  "/accessibility",
  "/affiliate-program",
  // "https://canada.michaels.com/",
  "/site-map",
  "/mp/landing",
  "/shop/michaelspro---buy-in-bulk",
  "/rewards",
  "/teacher-discount",
  "/military-discount",
  "/senior-discount",
  "/diversity",
  "/jobs",
  // "https://www.greatplacetowork.com/certified-company/7003877",
  "/michaels-gives-back",
  "/classes",
  "/projects",
  "/weekly-ad",
  "/coupons",
  " ", //--------------

  "/black-friday",
  "/boredom-busters",
  "/camp-creatology",
  "/cart",
  "/cyber-monday",
  "/design-library",
  "/guest-history/browsing-history",
  "/labor-day",
  "/lowest-prices-of-the-season",
  "/marketplace",
  "/michaels-pro",
  "/presidents-day",
  "/red-white-blue-sale",
  "/rewards/rewards-faq",
  "/rewards/terms",
  "/signin",
  "/signup",
  "/welcome-ac-moore",
  "/yarn-pattern-library",
  "",
  // TZ=UTC node index.js
  // "https://www.michaelspressroom.com/",
  // "https://www.michaelspressroom.com/",
];

const newUrl = new Set([
  "/",
  "/accessibility",
  "/affiliate-program",
  "/black-friday",
  "/boredom-busters",
  "/camp-creatology",
  "/cart",
  "/camp-creatology",
  "/coupon-policy-and-price-guarantee",
  "/coupons",
  "/curbside-pickup",
  "/customer-care",
  "/cyber-monday",
  "/design-library",
  "/diversity",
  "/download-app",
  "/guest-history/browsing-history",
  "/jobs",
  "/labor-day",
  "/lowest-prices-of-the-season",
  "/marketplace",
  "/michaels-gives-back",
  "/michaels-pro",
  "/military-discount",
  "/presidents-day",
  "/product-policy/ca-product-policy",
  "/product-recalls",
  "/red-white-blue-sale",
  "/return-policy",
  "/rewards",
  "/rewards/rewards-faq",
  "/rewards/terms",
  "/senior-discount",
  "/shipping-policy",
  "/signin",
  "/signup",
  "/site-map",
  "/store-locator",
  "/tax-exempt",
  "/teacher-discount",
  "/terms-and-conditions",
  "/track-my-order",
  "/weekly-ad",
  "/welcome-ac-moore",
  "/yarn-pattern-library",
  "/your-privacy-rights",
  "/classes",
  "/projects",
  "/error404",
  "/infusible-ink",
  "/lowestpricesoftheseason",
  "/makeracademy",
  "/projects/yarn",
  "/shipping-policy/ca-shipping-policy",
  "/shopandsave",
  "/smallbusiness",
  "/tech101",
  "/black-friday",
  "/cyber-monday",
  "/design-library",
  "/labor-day-sale",
  "/labor-day",
  "/lowest-prices-of-the-season",
  "/red-white-and-blue-sale",
  "/yarn-pattern-library",
  "/return-policy/ca-return-policy",
  "/coupon-policy/ca-coupon-policy",
  "/product-recalls/ca-recall",
  "/teachers",
  "/privacyrights",
  "/presidentsday",
  "/learningresources",
  "/marketingcoupon",
  "/luck-partnership-page",
  "/jewelry-reseller",
  "/marketing-coupon",
  "/red-white-blue-sale",
  "/small-business",
  "/laborday",
  "/presidents-day",
  "/teachergiveaway",
  "/maker-academy",
  "/boredom-busters",
  "/camp-creatology",
  "/welcome-ac-moore",
  "/jobs",
  "/covid-19-response",
  "/michaels-pro",
  "/ups-service",
  "/site-map",
  "/value-info",
  "/download-app",
  "/diversity",
  "/michaels-gives-back",
  "/shipping-policy",
  "/return-policy",
  "/coupon-policy-and-price-guarantee",
  "/product-recalls",
  "/terms-and-conditions",
  "/your-privacy-rights",
  "/accessibility",
  "/product-policy/ca-product-policy",
  "/weekly-ad",
  "/affiliate-program",
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
  "/michaels-rating-and-review-sweepstakes/ratings-reviews-tc",
  "/terms&conditions",
  "/waiting-room",
  "/shopandsave"
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

let fs = require("fs");

const path = "./sitemap_MIK_public.xml";

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
  "/rewards",
  "/weekly-ad",
  "/coupons",
  "/fgm",
  "/fgm/classes",
  "/fgm/projects",
  "/fgm/sell",
  ""
  // TZ=UTC node index.js
  // "https://www.michaelspressroom.com/",
  // "https://www.michaelspressroom.com/",
];

const writeData = Url.map((item) => {
  const date = new Date();
  return `<url>
                <loc>${
                  item.startsWith("/")
                    ? `https://mik.tst.platform.michaels.com${item}`
                    : `https://mik.tst.platform.michaels.com`
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

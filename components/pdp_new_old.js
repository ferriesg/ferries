(function() {
  "use strict";
  let timer;
  const debounce = (fn) => (...args) => {
      if (timer) {
          clearTimeout(timer)
      }
      timer = setTimeout(() => fn(...args), 500)
  };
  window.addEventListener("scroll", debounce(() => {
      const productLinks = document.querySelectorAll('a[href*="/product/"]');
      if (!productLinks?.length) {
        return;
      }
      productLinks
        .forEach((e) => {
          const [link] = e.href.match(/\-(\w+\d+\w+)(\?)?.*$/g) ?? [];
          if (!link) {
              return
          }

          const [skuNum] = link.match(/-(\w+\d+\w+)/g) ?? [];
          e.href = `${skuNum.replace("-", "")}.html`;
        });
  }))
})()
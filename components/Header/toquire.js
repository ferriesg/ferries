function toequal(type) {
  if (type === "array") {
    let arr = [];
    for (let a = 1; a < 10; a++) {
      arr.push(a);
    }
    return arr;
  } else {
    let obj = {};
    for (let a = 1; a < 10; a++) {
      obj[a] = a;
    }
    return obj;
  }
}

export default toequal;

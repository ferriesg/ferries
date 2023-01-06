function header(a, b, symbol) {
  if (symbol === "+") {
    return a + b;
  } else if (symbol === "-") {
    return a - b;
  } else if (symbol === "*") {
    return a * b;
  } else {
    return a / b;
  }
}

export default header;

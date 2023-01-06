async function wait(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function asyncFuncion(string) {
  await wait(3000);
  return string;
}

export function promiseFuncion(a, b) {
  return new Promise((resolve, reject) => {
    if (a === b) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}


interface randParamsMinMax {
  min?: number;
  max: number
}

interface randParamsArr<T> {
  arr: T[]
}

export function rand<T>(options: randParamsMinMax | randParamsArr<T>): number | T {
  if ('max' in options) {
    if (!('min' in options)) options.min = 0;

    return (Math.random() * (options.max - options.min!) + options.min!);
  }

  if ('arr' in options) {
    return options.arr[Math.floor(Math.random() * options.arr.length)];
  }

  return Math.random();
}

export const makeId = () => {
  let ID = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for ( var i = 0; i < 12; i++ ) {
    ID += characters.charAt(Math.floor(Math.random() * 36));
  }
  return ID;
}

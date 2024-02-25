'use strict'

class MyArray {
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this.push(args[i]);
    }
  }
  
  push(...args) {
    if (args) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
    }
    return this.length;
  }

  reduceRight(callbackFn, initialValue) {
    let i = this.length - 1;
    let accum = initialValue;
    
    if (!initialValue) {
      accum = this[this.length - 1];
      i = this.length - 2;
    }

    for (; i > -1; i--) {
      accum = callbackFn(accum, this[i], i, this);
    }
    return accum;
  }
}

const myArr = new MyArray(1, 2, 3, 4, 5);
console.log(myArr.reduceRight((ac, cur) => ac + cur, 1));

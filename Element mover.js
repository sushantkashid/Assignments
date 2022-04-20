function mover(array, k) {
    var newArr = [];
      newArr = [arr.length];

    if (arr.length == 0) return arr;
    k = k % arr.length;
    for (var i = 0; i < arr.length; i++) {
      newArr[i] = arr[(i + (arr.length - k)) % arr.length];
    }

    return newArr;
  }
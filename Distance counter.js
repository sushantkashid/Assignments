
function counter(start, end, distance) {
    var progress = start;
    var count = 0;
    while (progress < end) {
      progress = progress + distance;
      count++;
    }
    return count;
  }
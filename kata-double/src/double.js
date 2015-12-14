function double(a) {

  if (isNaN(a) || !Array.isArray(a)) {
    return null;
  }
  if (Array.isArray(a)) {
    var table = [];
    for (var a = 1; a * 2; a++) {
      table.push(a);
}

  }

  else {
    return a * 2;
  }



}
double(6);

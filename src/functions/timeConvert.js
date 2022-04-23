function timeConvert(n) {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  let secondes = (minutes - rminutes) * 60;
  let rsecondes = Math.round(secondes);

  rhours = rhours < 10 ? "0" + rhours : rhours;
  rminutes = rminutes < 10 ? "0" + rminutes : rminutes;
  rsecondes = rsecondes < 10 ? "0" + rsecondes : rsecondes;

  return rhours + ":" + rminutes + ":" + rsecondes;
}

export default timeConvert;

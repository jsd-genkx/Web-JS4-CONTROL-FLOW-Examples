switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    day = "Saturday";
}

console.log(day);
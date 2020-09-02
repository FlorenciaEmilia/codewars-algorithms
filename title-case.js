function titleCase(title, minorWords) {
  if (!title) {
    return "";
  } else {
    title = title.toLowerCase().split(" ");
    if (!minorWords) {
      return title.map((x) => upperCaser(x)).join(" ");
    } else {
      for (let i = 0; i < title.length; i++) {
        if (i == 0 || !minorWords.includes(title[i])) {
          upperCaser(title[i]);
        }
      }
      return title.join(" ");
    }
  }
}

function upperCaser(word) {
  word = word[0].toUpperCase() + word.slice(1);
}

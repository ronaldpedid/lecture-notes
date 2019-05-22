function teaParty(tea, candy) {
  if (tea < 5 || candy < 5) {
    return 0;
  }

  if (tea >= 5 && candy >= 5) {
    if (tea >= candy * 2 || candy >= tea * 2) {
      return 2;
    }

    return 1;
  }
}

module.exports = teaParty;
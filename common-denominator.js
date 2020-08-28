function convertFrac(lst) {
  //Your code here
  let denominatorsInOrder = lst.map((x) => x[1]).sort((a, b) => b - a);
  let commonDenominator = null;
  for (let num = 1; commonDenominator == null; num++) {
    let testingNumber = denominatorsInOrder[0] * num;
    for (let i = 0; i < denominatorsInOrder.length; i++) {
      if (testingNumber % denominatorsInOrder[i] !== 0) {
        break;
      } else if (
        denominatorsInOrder[i] ===
        denominatorsInOrder[denominatorsInOrder.length - 1]
      ) {
        commonDenominator = testingNumber;
      }
    }
  }
  let finalArray = lst
    .map(
      (x) =>
        `(${(x[0] =
          (commonDenominator / x[1]) * x[0])},${(x[1] = commonDenominator)})`
    )
    .join("");
  return finalArray;
}

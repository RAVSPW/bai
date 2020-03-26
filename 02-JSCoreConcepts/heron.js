// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

const heronsFormula = (a, b, c) => {
    const p = (a + b + c) / 2
    const result = p * Math.sqrt((p - a) * (p - b) * (p - c))
    return `Pole trojkata o bokach ${a}, ${b} oraz ${c} wynosi ${result.toFixed(2)}`;
}

console.log(heronsFormula(a, b, c));

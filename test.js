const { sum } = require('./app.js');

test("adds 14 + 9 to equal 23", () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require("./app.js");

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected);

});

test("One dollar should be 155.26 yens", function() {
    const { fromDollarToYen } = require("./app.js");

    const yen = fromDollarToYen(3);
    const expected = 3 * 155.26;

    expect(yen).toBe(expected);
});

test("One yen should be 0.0048 pound", function() {
    const{ fromYenToPound } = require("./app.js");

    const pound = fromYenToPound(100);
    const expected = 100 * 0.0048;

    expect(pound).toBe(expected);
})
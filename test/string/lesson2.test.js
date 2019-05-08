import countBinarySubstrings from "../../code/string/lesson2";

test('countBinarySubstrings', () => {
  expect(countBinarySubstrings("10101")).toEqual(4)
  expect(countBinarySubstrings('00110011')).toEqual(6)
})

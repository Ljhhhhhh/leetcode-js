/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  if (!l1 || !l1.length) l1 = [0, 0, 0]
  if (!l2 || !l2.length) l2 = [0, 0, 0]
  let a1 = [...l1].reverse().join('') * 1
  let a2 = [...l2].reverse().join('') * 1
  return (a1 + a2 + '').split('').reverse()
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
// [2, 4, 3], [5, 6, 4]

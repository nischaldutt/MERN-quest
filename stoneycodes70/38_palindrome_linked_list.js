var isPalindrome = function (head) {
  if (head === null || head.next === null) return true;

  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let left = head;
  let right = prev;
  while (right !== null) {
    if (left.val === right.val) {
      left = left.next;
      right = right.next;
    } else return false;
  }
  return true;
};

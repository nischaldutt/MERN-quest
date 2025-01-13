var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let temp;
  while (curr !== null) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

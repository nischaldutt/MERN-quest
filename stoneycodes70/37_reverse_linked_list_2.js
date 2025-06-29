var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(Infinity);
  dummy.next = head;
  let leftPrev = dummy;
  let curr = head;

  for (let i = 1; i < left; i++) {
    leftPrev = curr;
    curr = curr.next;
  }

  let count = right - left + 1;
  let prev = null;
  while (count--) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;
  return dummy.next;
};

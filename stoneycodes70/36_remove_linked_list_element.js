var removeElements = function (head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let curr = dummy;

  while (curr.next !== null) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return dummy.next;
};

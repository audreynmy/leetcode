var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let oddList = head;
  let evenList = head.next;
  let evenListHead = head.next;

  while (evenList && evenList.next) {
    oddList.next = oddList.next.next;
    evenList.next = evenList.next.next;
    oddList = oddList.next;
    evenList = evenList.next;
  }
  oddList.next = evenListHead;

  return head;
};

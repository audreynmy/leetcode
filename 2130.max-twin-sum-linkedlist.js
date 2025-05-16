var pairSum = function (head) {
  let slow = head;
  let fast = head;
  let headPtr = head;
  let max = 0;

  //find the middle node
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let node = null;
  //reverse the list from the middle node
  while (slow) {
    const temp = slow.next;
    slow.next = node;
    node = slow;
    slow = temp;
  }

  //add the values together to find the max
  while (node && headPtr) {
    max = Math.max(max, node.val + headPtr.val);
    node = node.next;
    headPtr = headPtr.next;
  }

  return max;
};

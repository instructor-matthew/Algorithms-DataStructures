class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add Node to the End
  add(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      console.log(val + " has been added!");
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log(val + " has been added!");
    }
    this.size++;
  }

  // Traverse and Display Node Values and Index
  display() {
    let current = this.head;
    let i = 0;
    while (current) {
      console.log("Node " + i + ": " + current.val);
      current = current.next;
      i++
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

let list = new LinkedList();
console.log(list.size)
list.add("first");
list.add("second");
list.add("third");
list.add("fourth");
list.display();
console.log(list.size)
list.reverse();
list.display();
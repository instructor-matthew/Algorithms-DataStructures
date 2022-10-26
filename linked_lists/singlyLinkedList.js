class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add To The End
  add(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      console.log("added! " + val)
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      console.log("added! " + val);
    }
    this.size++;
  }

  //Remove the head of a Node
  removeHead() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  removeFront() {
    if (this.head === null) {
      return "List is empty";
    } else {
      this.head = this.head.next;
    }
  }

  addFront(val) {
    if (this.head === null) {
      this.head = new Node(val);
      console.log("Added!" + val);
    } else {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      console.log("Added!" + val);
    }
  }

  // Insert Value At Specific Index
  insertAt(val, index) {
    if (index > 0 && index > this.size) {
      console.log("Index Is Out Of Range");
      return false;
    }
    let newNode = new Node(val);
    let curr = this.head;
    let prev;
    if (index === 0) {
      newNode.next = head;
      this.head = newNode;
    } else {
      curr = this.head;
      let position = 0;
      while (position < index) {
        position++;
        prev = curr;
        curr = curr.next;
      }
      newNode.next = curr;
      prev.next = newNode;
    }
    this.size++;
  }

  // Retrieve Value from Index
  get(index) {
    if (index > 0 && index > this.size) {
      console.log("invalid index");
      return false;
    }
    let curr = this.head;
    let count = 0;
    if (index === 0) {
      console.log(this.head.val);
    } else {
      while (count < index) {
        count++;
        curr = curr.next;
      }
      console.log("index " + index + ": " + curr.val);
    }
  }

  // Remove a certain index of the List
  removeAt(index) {
    if (index > 0 && index > this.size) {
      console.log("invalid index");
      return false;
    }
    let current = this.head;
    let prev = current;
    let count = 0;
    //If the index is the head
    if (index === 0) {
      this.head = current.next;
    } else {
      //get to that position
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }
      //Remove it
      prev.next = current.next;
    }
    this.size--
  }

  // Return Length Of List
  size() {
    console.log(this.size);
  }

  // Boolean if List is Empty
  isEmpty() {
    return this.size === 0;
  }

  // Returns the index of the node of a certain value
  indexOf(val) {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      if (current.val === val) {
        console.log(val + " is currently at index " + count);
        return count;
      }
      count++;
      current = current.next;
    }

    console.log(val + " was not found in the list");
    return -1;
  }

  // Traverse the list, displaying node index and value
  displayList() {
    let i = 0;
    let curr = this.head;
    let str = "";
    while (curr) {
      str += i + ". " + curr.val + " ";
      curr = curr.next;
      i++;
    }
    return (` ${str} `);
  }
}



let list = new LinkedList();
list.add(1);
list.add(3);
list.add(5);
list.add(19);
list.add(2);
console.log(list.displayList())
console.log(list.filter(2, 10));
console.log(list.displayList())

// function Node(val) {
//   this.val = val;
//   this.next = null;
// }

// function SLL() {
//   this.head = null;
//   this.size = 0;
// }

// SLL.prototype.addFront = function (val) {
//   if (this.head === null) {
//     this.head = new Node(val);
//     console.log("Added!" + val);
//   } else {
//     let temp = this.head;
//     this.head = new Node(val);
//     this.head.next = temp;
//     console.log("Added!" + val);
//   }
// }

// SLL.prototype.displayList = function () {
//   let i = 0;
//   let curr = this.head;
//   let str = "";
//   while (curr) {
//     str += i + ". " + curr.val + " ";
//     curr = curr.next;
//     i++;
//   }
//   return (` ${str}`);

// }

// let newList = new SLL()
// newList.addFront(2);
// newList.addFront(4);
// console.log(newList.displayList());

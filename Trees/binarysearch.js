class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let one = new TreeNode('1');
let two = new TreeNode('2');
let three = new TreeNode('3');
let four = new TreeNode('4');
let five = new TreeNode('5');
let six = new TreeNode('6');

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;


/*
     1
    /\
   2  3
  /\   \
 4  5   6

*/

function inOrderPrint(root) {
  if (root === null) {
    return;
  }

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

inOrderPrint(one);

/*
15, 6, 17, 3, 5, 18

3, 5, 6, 15, 17, 18

*/


// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

class BST {
  constructor() {
    this.root = null;
  }

  add(val, root = this.root) {
    // if the tree is currently empty, then create the node as the 'absolute' root
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    // otherwise, the tree is not empty, so...
    // if our val to insert is less than the root...
    if (val < root.val) {
      if (!root.left) {                       // ...and the left child does not exist,
        root.left = new TreeNode(val);      //      then create the node as the left child
      } else {                                // ...and the left child already exists,
        this.add(val, root.left);        //      then recursively insert on the left subtree
      }

      // if our val to insert is greater than or equal to the root...
    } else {
      if (!root.right) {                      //  ...and the right child does not exist,
        root.right = new TreeNode(val);     //      then create the node as the right child
      } else {                                //  ...and the right child already exists,
        this.add(val, root.right);       //      then recursively insert on the right subtree
      }
    }
  }

  search(val, root = this.root) {
    // if the tree is empty, then the target val is not in the tree, so return false
    if (!root) return false;

    // otherwise the tree is not empty, so...
    if (val < root.val) {
      // if the target is less than the root,
      //  then search the left subtree
      return this.search(val, root.left);
    } else if (val > root.val) {
      // if the target is greater than the root,
      //  then search the right subtree
      return this.search(val, root.right);
    } else {
      // otherwise, the target must be equal to the root
      // so return true since we found it!
      return true;
    }
  }
}


let tree = new BST();
tree.insert(15);
tree.insert(6);
tree.insert(17);
tree.insert(3);
tree.insert(5);
tree.insert(18);


console.log(tree1.root)
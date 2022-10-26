class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// In Order - Left, Self, Right
function inOrderPrint(root) {
  if (root === null) return;

  inOrderPrint(root.left);
  console.log(root.val);
  inOrderPrint(root.right);
}

// inOrderPrint(a)

// Pre Order - Self, Left, Right
function preOrderPrint(root) {
  if (root === null) return;

  console.log(root.val);
  preOrderPrint(root.left);
  preOrderPrint(root.right);
}

preOrderPrint(a);

// Post Order - Left, Right, Self
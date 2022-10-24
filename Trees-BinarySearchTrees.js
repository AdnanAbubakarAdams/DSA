// Recall that in order to create a tree we must have a root node that connects to multiple other nodes
// Tree via object literal
// In some ways, the easiest way to model a tree in JavaScript is through an object.
// const tree = {
//     data: "Matt",
//     children: [
//       {
//         data: "Joe",
//         children: [
//           {
//             data: "Beau",
//             children: [
//               { data: "Ada", children: [] },
//               { data: "Cory", children: [{ data: "Bria", children: [] }] },
//             ],
//           },
//           {
//             data: "Kara",
//             children: [{ data: "Luka", children: [] }],
//           },
//         ],
//       },
//       {
//         data: "Opal",
//         children: [{ data: "Rory", children: [] }],
//       },
//     ],
//   };

//   Trees with classes
// With the following two classes and code, you can loosely represent a tree.
class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  }
  
  class Tree {
    constructor(root = null) {
      this.root = root;
    }
  }
  
  const matt = new TreeNode("Matt");
  const joe = new TreeNode("Joe");
  const opal = new TreeNode("Opal");
  matt.children.push(joe, opal);
  
  const tree = new Tree(matt);


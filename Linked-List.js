// A linked list is a linear data structure made up of nodes that point to the next node in a singly-linked list
// It is similar to an array, but there are a few differences. One is chosen over the other depending on the functionality/speed of certain operations for certain tasks.

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

//const firstNode = new Node(1); // new instance of the Node class
//const secondNode = new Node(2);// new instance of the Node class
/////firstNode.next = secondNode; // linking both instances => Node { data: 1, next: Node { data: 2, next: null } }

//console.log(firstNode); // Node { data: 1, next: Node { data: 2, next: null } }

// creating A new linked list
//class LinkedList {
  //constructor(head = null) {
    //this.head = head;
  //}
//}
//const firstList = new LinkedList(firstNode); // a new instance of the LinkedList class passing the firsNode as an argument
//console.log(firstList); // => LinkedList {
    // head: Node { data: 1, next: Node { data: 2, next: null } }
//   }

// LINKED LIST METHODS
// search
// size
// clear
// get last
// insert
// delete

// PRACTICAL FROM YOUTUBE 
// ARRAY = [6,3,4,2,1]   
// LINKED LIST = 6 => 3 => 4 => 2 => 1

// Each box in a linked list is can be represented as an object usually called Node...which usually containts two things or attributes namely data(int, string, character etc) and next(which is a connection to the previous data)
// the 1st box is usually referred to as the head => and to find the following data you can write a code like head.next or head.next.data

// CREATING A LINKED LIST WITH 6 => 3 => 4 => 2 => 1
class Node1 {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
const fiNode = new Node1(6)
const seNode = new Node1(3)
const thNode = new Node1(4)
const foNode = new Node1(2)
const fivNode = new Node1(1)

class LinkedList2 {
    constructor(head = null) {
        this.head = head;
    }
}
const firstLink = new LinkedList2(fiNode)
const secondLink = new LinkedList2(seNode)
const thirdLink = new LinkedList2(thNode)
const forthLink = new LinkedList2(foNode)
const fifthLink = new LinkedList2(fivNode)



// FROM TRAVERSY

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

// CREATING A LINKED LIST
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // METHODS WE GONNA USE
    // 1. INSERT FIRST NODE
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    // 2. INSERT LAST NODE OR INSERT AT THE END OF NODE
    insertLast(data) {
        let node = new Node(data);
        let current;

        // edge case where the linked list is empty, we make a new head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }



    // 3. INSERT AT INDEX 
    insertAt(data, index) {
        // if index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // if its the first index
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // creating the new node we adding at the index
        const node = new Node(data);
        let current, previous;
        // set the current to first
        current = this.head;
        let count = 0; // we doing a loop and setting a counter 

        while(count < index) {
            previous = current // Node before index
            count++
            current = current.next; // Node after index
        }
        node.next = current;
        previous.next = node;

        this.size++
    }


    // 4. GET AT INDEX
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }


    // 5. REMOVE AT INDEX
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // Remove at first index
        if (index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }


    // 6. CLEAR LIST
    clearList() {
        this.head = null;
        this.size = 0
    }


    // PRINT LIST DATA
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }


}
const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);

ll.insertLast(400)

ll.insertAt(500, 2)
// console.log(ll)

ll.getAt(4)

ll.removeAt(3)



ll.printListData();

ll.clearList()




// examples ==>
// const n1 = new Node(100);
// console.log(n1);
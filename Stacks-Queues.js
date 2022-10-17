// Stacks and queues can be built either with linked lists or arrays. They are a linear data structure (like an array or linked list). What makes them different are some key rules about how to use them

// STACKS -> LIFO => last in first out
// Easily visualized as a stack of pankakes or stack of plates or stack of crates. the last of them will be the one that will be put on top and will be the first one out or to be removed
// TWO MAIN TERMINOLOGIES FOR ACTIONS IN STACKS
// 1. INSERT - PUSH
// 2. DELETE - POP

// TRAVERSY FROM YOUTUBE
class Stacks {
    constructor() {
        this.items = [];
        this.count = 0
    }
    // METHODS
    // Add or insert elements into our stack
    push(element) {
        this.items[this.count] = element;// we could use push but not!! but rather use the index which is represented by the count and set to the added element
        console.log(`${element} added to ${this.count}`)
        this.count ++; // if we leave our add like each time we add another element its going to wipe the previous element and we don't want that so we increment count
        return this.count -1;// to make it 0 index
    }

    // Remove or Pop the top element in out stack
    // Edge case return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined;//if stack is empty
        let deleteItem = this.items[this.count -1];// we doing a -1 so we can gain access to the right indexes of the stack since its 0 indexed but the count starts at 1;
        this.count --;// decrease count sice we removing a stack
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    // CHECK TOP ELEMENT IN STACK
    peak() {
        console.log(`the top element in this stack is ${this.items[this.count -1]}`);
        return this.items[this.count -1];
    }
    // CHECK IF STACK IS EMPTY
    isEmpty() {
        console.log(this.count == 0? `this stack is empty` : `this stack is NOT empty`)
        return this.items[this.count -1];
    }
    // CHECK  THE SIZE OF THE STACK
    size(){
        console.log(`${this.count} elements in stack`)
        return this.count;
    }

    // PRINT ELEMENTS IN STACK
    print() {
        let ele = "";
        for(let i = 0; i < this.count; i++) {
            ele += this.items[i] + " ";
        }
        return ele;
    }

    // CLEAR STACK
    clear() {
        this.items = []
        this.count = 0
        return this.items;
    }
}
const stack = new Stacks();

stack.isEmpty()

stack.push(100);
stack.push(150);
stack.push(200);
stack.push(250);

console.log(stack.print())

stack.size()

stack.peak();
stack.isEmpty()

stack.pop();


// QUEUES -> FIFO => first in first out
// This is also easily visualized by thinking of a line of people at a checkout register or at a movie theatre or line at bank. The first person who stood in line will be the first one to leave the line to be rung up.

// THE TWO MAIN TERMINOLOGIES IN ACTION FOR QUEUES ARE
// 1. INSERT : ENQUEUE
// 2. DELETE : DEQUEUE


// HACKER RANK YOUTUBE
const nums = [1,2,3,4,5,6,7,8,9]
class Queues {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    // METHODS add to tail and remove from head

    // CHECK IF QUEUE IS EMPTY OR EMPTY THE QUEUE
    isEmpty() {
        // return this.head == null;
        return this.head ? true : false;
    }
    // CHECK THE PEAK ITEM IN THE QUEUE OR THE 1ST IN LINE
    peak() {
     return this.data[0] 
    }

}
const queue = new Queues(nums);

console.log(queue.isEmpty())
console.log(queue.peak())
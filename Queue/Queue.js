class Node {
    constructor(val) {
        this.val = val;
        this.next = next;
    }
}

// Creating a queue class with a Linked List
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
           this.last.next = newNode;
           this.last = newNode; 
        }

        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }

        let temp = this.first;

        if (this.size === 1) {
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}
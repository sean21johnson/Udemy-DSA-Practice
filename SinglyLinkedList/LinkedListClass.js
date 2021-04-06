// piece of data - val
// reference to next node - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // add a node to the end of the linked list
    push(val) {
        let newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove a node from the end of the linked list
    pop() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // remove a node from the beginning of the linked list
    shift() {
        if (!this.head) {
            return undefined;
        }

        let theHead = this.head;
        this.head = theHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return theHead;
    }

    // adding a new node to the beginning of the linked list
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    // get the value of a node at the index passed in
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let currentNode = this.head;

        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    // change the value of a node based on it's position in the LinkedLists
    set(index, val) {
        let theNode = this.get(index);

        if (theNode) {
            theNode.val = val;
            return true;
        }

        return false;
    }

    // adding a node to the Linked List at a specific position
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        else if (index === this.length) {
            this.push(val)
            return true;
        }
        else if (index === 0) {
            this.unshift(val)
            return true;
        }

        let newNode = new Node(val);
        let previousNode = this.get(index - 1);

        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }

    // remove a node from the Linked List at a specific position
    remove(index) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        else if (index === this.length - 1) {
            return this.pop();
        }
        else if (index === 0) {
            return this.shift();
        }

        let prevNode = this.get(index - 1);
        let removedNode = this.get(index)
        prevNode.next = prevNode.next.next;
        this.length--;
        
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

let list = new SinglyLinkedList()

list.push(1)
list.push(5)
list.push(10)
list.push(15)

console.log(list.reverse())


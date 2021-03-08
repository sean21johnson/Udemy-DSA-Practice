class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let shiftedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null
        }
        else {
            this.head = shiftedNode.next;
            this.head.prev = null;
        }

        shiftedNode.next = null;
        length--;

        return shiftedNode;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let currentNode = this.head;

        if (index < this.length/2) {
            let counter = 0;
            currentNode = this.head;
    
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
        }
        else {
            let counter = this.length - 1;
            currentNode = this.tail;

            while (counter > index) {
                currentNode = currentNode.prev;
                counter--
            }
        }

        return currentNode;
    }

    set(index, val) {
        let theNode = this.get(index);

        if (theNode) {
            theNode.val = val;
            return true
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        else if (index === 0) {
            return this.unshift(val);
        }
        else if (index === this.length) {
            return this.push(val);
        }
        else {
            let newNode = new Node(val);
            let prevNode = this.get(index - 1);
            let originalNode = prevNode.next;
            
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = originalNode;
            originalNode.prev = newNode;

            this.length++;
            return this;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }

        let prevNode = this.get(index - 1);
        let removedNode = this.get(index);
        let afterNode = this.get(index + 1);

        prevNode.next = afterNode;
        afterNode.prev = prevNode;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;        
    }
}

let list = new DoublyLinkedList();

list.push("hey")
list.push("sean")
list.push("how")
list.push("are")
list.push("doing")

console.log(list.remove(3));
console.log('break')

console.log(list)



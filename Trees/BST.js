class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (value === current.value) {
                    return undefined;
                }
                else if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                        current = current.left;
                }
                else (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                        current = current.right;
                }
            }
        }
    }

    find(value) {
        if (this.root === undefined) return false;
        let current = this.root
        let found = false;

        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let data = [];
        let queue = [];
        queue.push(this.root);

        
    }
}

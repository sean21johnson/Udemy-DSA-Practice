class PriorityQueue {
    constructor() {
        q = [];
    }

    is_empty() {
        return q.length === 0 ? true : false;
    }

    peek() {
        if (this.is_empty()) {
            return "";
        }
        else {
            return q[q.length - 1];
        }
    }

    insert_with_priority(element, priority) {
        q.push({
            element: element,
            priority: priority
        })

        q.sort((a, b) => a.priority - b.priority);

        return q;
    }

    show() {
        return q;
    }

    pop() {
        return q.pop();
    }
}
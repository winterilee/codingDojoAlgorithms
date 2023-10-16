class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Add Front
    addFront(val) {
        const newNode = new Node(val);
        const tempHead = this.head;
        this.head = newNode;
        this.head.next = tempHead;
    }

    // Remove Front
    removeFront() {
        this.head = this.head.next;
    }

    // Front
    front() {
        return this.head.value;
    }
}
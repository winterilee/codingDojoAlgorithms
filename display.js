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

    // Display
    display() {
        let runner = this.head;
        let resultString;

        while(runner) {
            resultString += `[${runner.value}] -> `;
            runner = runner.next;
        }
        resultString += "[null]";
        console.log(resultString);
    }

    // Insert
    insert(val, idx=null) {
        const newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.head.next = null;
            return this;
        }

        let runner = this.head;
        let prev = this.head;
        let currentNode = -1;

        if(idx===null) {
            while(runner.next) {
                runner = runner.next
            }
            runner.next = newNode;
            newNode.next = null;
            return this
        }

        while((currentNode<idx) && (runner.next)) {
            prev = runner;
            runner = runner.next;
            currentNode++;
        }

        prev.next = newNode;
        newNode.next = runner;

        this.length++
        return this;
    }

    // Remove
    remove(idx=null) {
        if(!this.head) {
            return this;
        }

        let prev = this.head;
        let runner = this.head;
        let currentNode = -1;

        if(idx===0) {
            this.head = this.head.next;
            return this;
        }

        if(idx===null) {
            while(runner.next.next) {
                runner = runner.next;
            }
            runner.next = null;
            return this;
        }

        while((currentNode<idx) && (runner.next)) {
            prev = runner;
            runner = runner.next;
            currentNode++;
        }

        prev.next = runner.next;
        runner.next = null;

        this.length--;
        return this;
    }
}
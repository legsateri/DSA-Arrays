const Memory = require('./memory');
const memory = new Memory();

// Implement an Array class from scratch.
class Array {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
        this.capacity = 0;
    }

    // Explore the push() method.
    push(value) {
        if (this.length >= this.capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const ptr1 = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('No Memory');
        }
        memory.copy(this.ptr, ptr1, this.length);
        memory.free(ptr1);
        this.capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    // Explore the pop() method.
    pop() {
        if (this.length === 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if (this.length >= this.capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

    print() {
        let answer = '[';
        for (let i = 0; i < this.length; i++) {
            let value = memory.get(this.ptr + i);
            if (value && i === this.length - 1) {
                answer += value + ']';
            } else {
                answer += value + ',';
            }
        }
        return answer;
    }

    memory() {
        console.log(memory);
    }

}
Array.SIZE_RATIO = 3;

module.exports = Array;
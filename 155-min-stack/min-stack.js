// the key is to use two arrays in minStack, one for the complete stack and one for minStack
// you could save the minimum in variable, but what if you pop it off? need to know what the next min is
// when pushing, compare the pushed val to last value of the minStack
// if it's less than or equal to, push the val BUT if it's not, just push another instance of the last value 
// This way the "top" value in the stack or the last in the array is always the minimum

// you can also solve it where you only push values that are less than the current min

var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
        this.minStack.push(val)
    } else {
        this.minStack.push(this.getMin())
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.minStack.pop()
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     if (this.minStack.length === 0) {
        return undefined; // or any other designated value
    }
    return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
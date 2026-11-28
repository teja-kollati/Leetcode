/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.length = 0;
    this.maxLength = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.maxLength === this.length) return;
    this.length++;
    this.stack[this.length - 1] = x;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.length === 0) return -1;
    this.length--;
    return this.stack[this.length];
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let n = Math.min(k, this.length);

    for(let i = 0; i < n; i++){
        this.stack[i] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
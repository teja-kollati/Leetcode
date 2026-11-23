
var ProductOfNumbers = function() {
    this.stream = [];
    this.size = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.stream.push(num);
    this.size++;
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    let product = 1;

    for(let i = this.size - 1; i >= this.size - k; i--){
        product *= this.stream[i];
    }

    return product;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
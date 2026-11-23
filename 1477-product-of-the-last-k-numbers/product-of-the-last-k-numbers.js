class ProductOfNumbers {
    prefix = [1];  // prefix[i]: the product of the first i numbers after the last zero

    add(num) {
        if (num === 0) this.prefix = [1];  // a window that reaches this zero is 0, so forget everything before it
        else this.prefix.push(this.prefix.at(-1) * num);
    }

    getProduct(k) {
        if (k >= this.prefix.length) return 0;  // the window reaches back to a zero
        return this.prefix.at(-1) / this.prefix.at(-1 - k);
    }
}

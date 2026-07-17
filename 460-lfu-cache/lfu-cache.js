/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.freqMap = new Map();
  this.minFreq = 1;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const node = this.cache.get(key);
  this._updateFrequency(key, node);

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) return;

  // Update existing key
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    node.value = value;
    this._updateFrequency(key, node);
    return;
  }

  // Cache full -> Evict LFU + LRU
  if (this.cache.size === this.capacity) {
    const bucket = this.freqMap.get(this.minFreq);

    // First inserted key = LRU
    const evictKey = bucket.keys().next().value;

    bucket.delete(evictKey);

    if (bucket.size === 0) {
      this.freqMap.delete(this.minFreq);
    }

    this.cache.delete(evictKey);
  }

  // Insert new key
  const node = {
    value,
    freq: 1,
  };

  this.cache.set(key, node);

  if (!this.freqMap.has(1)) {
    this.freqMap.set(1, new Map());
  }

  this.freqMap.get(1).set(key, true);

  this.minFreq = 1;
};

LFUCache.prototype._updateFrequency = function (key, node) {
  const oldFreq = node.freq;
  const newFreq = oldFreq + 1;

  const oldBucket = this.freqMap.get(oldFreq);
  oldBucket.delete(key);

  if (oldBucket.size === 0) {
    this.freqMap.delete(oldFreq);

    if (this.minFreq === oldFreq) {
      this.minFreq++;
    }
  }

  node.freq = newFreq;

  if (!this.freqMap.has(newFreq)) {
    this.freqMap.set(newFreq, new Map());
  }

  this.freqMap.get(newFreq).set(key, true);
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
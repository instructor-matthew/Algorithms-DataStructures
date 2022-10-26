class Heap {
  constructor() {
    this.array = [null];
  }

  insert(value) {
    this.array.push(value);
    this.siftUp(this.array.length - 1);
  }

  siftUp(index) {
    if (index === 1) return;

    let parentIndex = Math.floor(index / 2);

    if (this.array[index] > this.array[parentIndex]) {
      [this.array[index], this.array[parentIndex]] = [this.array[parentIndex], this.array[index]];
      this.siftUp(parentIndex);
    }
  }

  deleteMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);

    return max;
  }

  siftDown(index) {
    let leftIndex = index * 2;
    let rightIndex = index * 2 + 1;
    let arr = this.array;
    let leftValue = arr[leftIndex];
    let rightValue = arr[rightIndex];
    let value = arr[index];

    if (leftValue === undefined) leftValue = -Infinity;
    if (rightValue === undefined) rightValue = -Infinity;

    if (value > leftValue && value > rightValue) return;

    let swapIndex;
    if (leftValue > rightValue) {
      swapIndex = leftIndex;
    } else {
      swapIndex = rightIndex;
    }
    [arr[swapIndex], arr[index]] = [arr[index], arr[swapIndex]];
    this.siftDown(swapIndex);
  }
}

let heap = new Heap;
heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
console.log(heap.array);
console.log(heap.deleteMax());
console.log(heap.array);
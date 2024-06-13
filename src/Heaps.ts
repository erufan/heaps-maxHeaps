class Heaps {
  items: number[] = [];

  public insert(value: number) {
    this.items.push(value);
    this.bubbleUp();
  }
  public remove() {
    let index = 0;
    this.items[index] = this.items[this.items.length - 1];
    this.items.pop();

    while (index < this.items.length) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let largerIndex = 0;

      if (
        rightIndex < this.items.length &&
        this.items[rightIndex] > this.items[leftIndex]
      ) {
        largerIndex = rightIndex;
      } else if (leftIndex < this.items.length) {
        largerIndex = leftIndex;
      }
      if (largerIndex === 0 || this.items[index] >= this.items[largerIndex]) {
        break;
      }

      this.swap(index, largerIndex);
      index = largerIndex;
    }
  }

  private bubbleUp() {
    let index: number = this.items.length - 1;
    while (
      index > 0 &&
      this.items[index] > this.items[this.parentIndex(index)]
    ) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }
  private parentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  private swap(index1: number, index2: number) {
    if (this.items[index1] !== this.items[index2]) {
      let temp = this.items[index1];
      this.items[index1] = this.items[index2];
      this.items[index2] = temp;
    }
  }
}

export default Heaps;

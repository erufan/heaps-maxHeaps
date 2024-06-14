class Heaps {
  items: number[] = [];

  public insert(value: number) {
    this.items.push(value);
    this.bubbleUp();
  }
  public remove() {
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
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
  private bubbleDown() {
    let index = 0;
    while (index < this.items.length) {
      let largerIndex = 0;

      if (
        this.haveRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerIndex = this.rightIndex(index);
      } else if (this.haveLeftChild(index)) {
        largerIndex = this.leftIndex(index);
      }
      if (largerIndex === 0 || this.items[index] >= this.items[largerIndex]) {
        break;
      }

      this.swap(index, largerIndex);
      index = largerIndex;
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

  private leftIndex(index: number) {
    return index * 2 + 1;
  }
  private rightIndex(index: number) {
    return index * 2 + 2;
  }
  private rightChild(index: number) {
    return this.items[this.rightIndex(index)];
  }
  private leftChild(index: number) {
    return this.items[this.leftIndex(index)];
  }
  private haveLeftChild(index: number) {
    return this.leftIndex(index) < this.items.length;
  }
  private haveRightChild(index: number) {
    return this.rightIndex(index) < this.items.length;
  }
}

export default Heaps;

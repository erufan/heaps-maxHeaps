class Heaps {
  items: number[] = [];

  public insert(value: number) {
    this.items.push(value);
    this.bubbleUp();
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

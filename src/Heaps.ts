class Heaps {
  private items: number[] = [];

  public insert(value: number) {
    this.items.push(value);
    this.bubleUp();
  }

  private bubleUp() {
    let index: number = this.items.length - 1;
    while (
      index > 0 &&
      this.items[index] > this.items[this.parentIndex(index)]
    ) {
      this.swap(index);
      index = this.parentIndex(index);
    }
  }
  private parentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  private swap(index: number) {
    let temp = this.items[index];
    this.items[index] = this.items[this.parentIndex(index)];
    this.items[this.parentIndex(index)] = temp;
  }
}

export default Heaps;

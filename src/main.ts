import Heaps from "./Heaps";

let count = 0;
for (count; count < 1000; count++) {
  let number1 = Math.floor(Math.random() * 100);
  let number2 = Math.floor(Math.random() * 100);
  let number3 = Math.floor(Math.random() * 100);
  let number4 = Math.floor(Math.random() * 100);
  let number5 = Math.floor(Math.random() * 100);
  let number6 = Math.floor(Math.random() * 100);
  let number7 = Math.floor(Math.random() * 100);
  let number8 = Math.floor(Math.random() * 100);
  let myArray = [
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
  ];
  const heap = new Heaps();
  heap.insert(number1);
  heap.insert(number2);
  heap.insert(number3);
  heap.insert(number4);
  heap.insert(number5);
  heap.insert(number6);
  heap.insert(number7);
  heap.insert(number8);

  if (!isMaxHeap(heap.items)) console.log("error at", myArray, heap.items);
}

function isMaxHeap(arr: number[], index: number = 0): boolean {
  // Get the indices of the left and right children
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;

  // Check if the current node is a leaf node
  if (leftChildIndex >= arr.length) return true;

  // Check if the current node is greater than its children
  const leftChildValid = arr[index] >= (arr[leftChildIndex] ?? -Infinity);
  const rightChildValid = arr[index] >= (arr[rightChildIndex] ?? -Infinity);

  // Recursively check the left and right subtrees
  return (
    leftChildValid &&
    rightChildValid &&
    isMaxHeap(arr, leftChildIndex) &&
    isMaxHeap(arr, rightChildIndex)
  );
}

// Example usage:

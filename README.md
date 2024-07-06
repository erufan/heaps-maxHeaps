---

# Heaps Implementation in TypeScript

This repository contains an implementation of a Max Heap data structure in TypeScript. The heap supports insertion and removal of elements while maintaining the heap property. Additionally, it includes a test script to validate the heap operations.

## Features

- **Insert**: Add a new element to the heap.
- **Remove**: Remove the maximum element from the heap.
- **Bubble Up**: Ensure the heap property is maintained after insertion.
- **Bubble Down**: Ensure the heap property is maintained after removal.

## Usage
  ### Example

Here's an example of how to use the `Heaps` class:

```typescript
import Heaps from "./Heaps";

const heap = new Heaps();
heap.insert(10);
heap.insert(20);
heap.insert(5);
console.log(heap.items); // Output: [20, 10, 5]

heap.remove();
console.log(heap.items); // Output: [10, 5]
```

### Testing

The repository includes a test script that inserts and removes random numbers from the heap to ensure it maintains the max heap property


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.


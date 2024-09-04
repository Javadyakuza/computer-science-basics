<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Iterator Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Behavioral
  </div>
</div>


The Iterator design pattern allows different types of collections, such as custom data structures and arrays, to be traversed by implementing custom iteration methods.

## Humanly Described

In simple terms, this pattern enables a collection, typically accessed by element index, to have custom methods for accessing the next element, checking if there are more elements, reverse traversal, setting flags, onChange handlers for specific indices, and more.

## Implementation Overview

This pattern involves implementing custom traversal methods for a specific collection type. Typically, it includes a traversal interface that different collection types must implement, or an iterator class implements the interface and takes the collection type as the object to iterate over.

## Use Cases

- **Uniform Traversal of Different Collections**
- **Hiding a Collection's Internal Structure**
- **Supporting Multiple Traversal Operations**
- **Decoupling Algorithms from Data Structures**
- **Enhancing Code Maintainability**

## Point of Approach

The Iterator pattern is primarily used to create traversal methods for types that do not natively support them, making it easier and more intuitive for users to interact with those types.

## Code Samples

::: details Rust

``` rust
// The collection type
struct MyCollection {
    data: Vec<i32>,
}

// The iterator version of the collection
struct MyCollectionIntoIter {
    collection: MyCollection,
    index: usize,
}

impl MyCollection {
    pub fn new(data: Vec<i32>) -> Self {
        Self { data }
    }
}

// Implementing the traits
impl IntoIterator for MyCollection {
    type Item = i32;
    type IntoIter = MyCollectionIntoIter;

    fn into_iter(self) -> Self::IntoIter {
        MyCollectionIntoIter {
            collection: self,
            index: 0,
        }
    }
}

impl Iterator for MyCollectionIntoIter {
    type Item = i32;

    fn next(&mut self) -> Option<Self::Item> {
        // Checking for the next element
        if self.index < self.collection.data.len() {
            let result = self.collection.data[self.index];
            self.index += 1;
            Some(result)
        } else {
            None
        }
    }
}

fn main() {
    let my_collection = MyCollection {
        data: vec![10, 20, 30, 40, 50],
    };

    let mut my_collection_iter = my_collection.into_iter();
    while let Some(element) = my_collection_iter.next() {
        println!("{element}");
    }
}


```

:::

::: details TypeScript

``` typescript 

// Iterator Interface
interface Iterator<T> {
    hasNext(): boolean;
    next(): T | null;
}

// Concrete Iterator
class ConcreteIterator<T> implements Iterator<T> {
    private collection: ConcreteCollection<T>;
    private currentIndex: number = 0;

    constructor(collection: ConcreteCollection<T>) {
        this.collection = collection;
    }

    public hasNext(): boolean {
        return this.currentIndex < this.collection.size();
    }

    public next(): T | null {
        if (this.hasNext()) {
            return this.collection.get(this.currentIndex++);
        }
        return null;
    }
}

// Collection Interface
interface Collection<T> {
    createIterator(): Iterator<T>;
    size(): number;
    get(index: number): T | null;
}

// Concrete Collection
class ConcreteCollection<T> implements Collection<T> {
    private items: T[] = [];

    public createIterator(): Iterator<T> {
        return new ConcreteIterator<T>(this);
    }

    public size(): number {
        return this.items.length;
    }

    public get(index: number): T | null {
        return this.items[index] || null;
    }

    public add(item: T): void {
        this.items.push(item);
    }
}

// Client Code
const collection = new ConcreteCollection<string>();
collection.add("Item 1");
collection.add("Item 2");
collection.add("Item 3");

const iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}


```
:::
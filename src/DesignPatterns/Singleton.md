# What is the Singleton Pattern?

The Singleton design pattern is used when a program needs exactly one instance of a class throughout the entire program. This pattern provides a global access point to that instance, allowing it to be shared across different sections of the program.

## Humanly Described

The Singleton pattern is specifically about managing the instantiation of a class, ensuring that only one instance is created. It’s not about managing individual variables or methods separately. The pattern is most commonly used in class definitions, where a static method provides access to the single instance.

## Initialization Process

In the Singleton pattern, during the initialization process, the class instance is created only once. Afterwards, the whole program accesses this instance through a global access point, typically via a static method. The instance is not "passed around" but is instead globally accessible.

## Use Cases

The use cases include connection pools, logging, configuration management, event handling systems, thread pool management, and cache management.

**Clarification**: These are not explicit use cases but rather examples of scenarios where the Singleton pattern is commonly implemented. The pattern is typically applied at the class level, often involving static variables, properties, and methods to control the instantiation and access of the single instance.

## Point of Approach

The point of this approach is to maintain a consistent shared state across the application by using the methods of a class with a certain set of values. The Singleton pattern ensures consistency in behavior across the application because the same instance is used, maintaining a single point of truth for that class's state.

## Code Samples

::: details Rust

> Rust natively doesn't support class creation but this pattern is implementable using another approach.

```rust
use std::sync::{Arc, Mutex};
use std::sync::Once;

#[derive(Clone, Default)]
pub struct SingletonStruct {
    val_1: i32,
    val_2: i32,
}

// Implementing the Singleton pattern for SingletonStruct.
impl SingletonStruct {

    // Provides a global access point to the Singleton instance.
    // This method ensures that only one instance of SingletonStruct
    // is created and shared across the entire application.
    pub fn get_instance() -> Arc<Mutex<Self>> {
        // Static variable to hold the singleton instance, initially set to None.
        // Marked as mutable to allow for the initialization of the instance later.
        static mut INSTANCE: Option<Arc<Mutex<SingletonStruct>>> = None;
        
        // Once ensures that the initialization logic is executed only once,
        // even if get_instance is called from multiple threads.
        static INIT: Once = Once::new();
        
        unsafe {
            // Ensures that the singleton instance is initialized only once.
            INIT.call_once(|| {
                // Create the SingletonStruct instance wrapped in Arc and Mutex,
                // and store it in the INSTANCE static variable.
                INSTANCE = Some(Arc::new(Mutex::new(SingletonStruct::default())));
            });

            // Clone the Arc, returning a new reference to the Singleton instance.
            // Unwrap is safe here because the instance is guaranteed to be initialized.
            INSTANCE.clone().unwrap()
        }
    }

    // Example method to demonstrate usage of the singleton instance.
    // Returns the sum of val_1 and val_2 as an i64.
    pub fn sum(&self) -> i64 {
        (self.val_1 + self.val_2).into()
    }
}

```

:::

::: details TypeScript

``` typescript 
class SingletonClass {
    private static instance: SingletonClass | null = null;
    public val_1: number;
    public val_2: number;

    // Private constructor to prevent direct instantiation
    private constructor() {
        this.val_1 = 0;
        this.val_2 = 0;
    }

    // Public static method to provide a global access point to the Singleton instance
    public static getInstance(): SingletonClass {
        if (this.instance === null) {
            this.instance = new SingletonClass();
        }
        return this.instance;
    }

    // Example method to demonstrate usage of the singleton instance
    public sum(): number {
        return this.val_1 + this.val_2;
    }
}
```
:::
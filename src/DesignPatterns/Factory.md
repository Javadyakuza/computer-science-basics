<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Factory Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Creational
  </div>
</div>

The Factory design pattern creates objects without specifying the exact class. It centralizes the instantiation logic, replacing the need for multiple `if-else` or `switch` statements. This makes the code more flexible and easier to maintain.

## Humanly Described

The Factory design pattern provides a builder class that creates objects based on your needs without requiring you to specify the exact class type.


## Initialization Process

In this pattern we have a class that gets the input parameters and applies the `if` `else` and `switch` clauses to specify which type of class do we need and it initialize it for us.

## Use Cases & Point of Approach

Here's a corrected and expanded version:


- **Cleaner Code**
- **More Maintainable Code**
- **Handles Complex Logic in a Structured Way**
- **Encapsulation of Object Creation**
- **Easier to Extend**


## Code Samples

::: details Rust

``` rust 
// Define the structs to be genrated

pub enum Tool {
    Shovel,
    Crane,
}

pub trait Work {
    fn work(&self);
}

pub struct SimpleWorker {
    pub energy: i32,
    pub power: i32,
}

pub struct AdvancedWorker {
    pub energy: i32,
    pub power: i32,
    pub tool: Tool,
}

impl Work for SimpleWorker {
    fn work(&self) {
        println!("Simple worker is working ... ")
    }
}

impl Work for AdvancedWorker {
    fn work(&self) {
        println!("Advanced worker is working ... ")
    }
}

// Define the Factory function
fn factory(worker_type: &str) -> Box<dyn Work> {
    match worker_type {
        "advanced" => Box::new(AdvancedWorker {
            energy: 100,
            power: 100,
            tool: Tool::Shovel,
        }),
        "simple" => Box::new(SimpleWorker {
            energy: 100,
            power: 100,
        }),
        _ => panic!("no correct options provided !"),
    }
}

fn main() {
    let worker = factory("simple");

    worker.work();
}


```

:::



::: details TypeScript

``` typescript 

```
:::






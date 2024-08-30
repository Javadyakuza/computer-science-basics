<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Facade Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Structural
  </div>
</div>


The Facade pattern provides a simplified interface to a complex system, hiding its complexity from the end user by encapsulating multiple functions or classes behind a single, unified interface.

## Humanly Described

Imagine a plumbing and electrical system in a house. The user simply flips a switch to turn on the lights or starts the plumbing system without needing to understand the complex processes happening behind the scenes. They don’t need to know the details; they just use the simple interface.

## Initialization Process

Initializing this pattern is straightforward: you need a set of complex objects and functions, and a wrapper class that consolidates these into a single, user-friendly interface.

## Use Cases & Point of Approach

- **Providing ease of use for the end user**
- **Cleaner and more maintainable code**
- **Usable and refactorable code**
- **Hiding implementation details from the user**
- **Reducing dependencies between subsystems**

## Code Samples

::: details Rust

> Rust natively doesn't support class creation but this pattern is implementable using another approach.

``` rust
fn complex_task_1() {
    println!("Executing complex task one...");
}

fn complex_task_2() {
    println!("Executing complex task two...");
}

fn complex_task_3() {
    println!("Executing complex task three...");
}

pub struct TaskFacade;

impl TaskFacade {
    pub fn perform_simple_task(&self) {
        complex_task_1();
    }

    pub fn perform_compound_task(&self) {
        complex_task_1();
        complex_task_2();
    }

    pub fn perform_all_tasks(&self) {
        complex_task_1();
        complex_task_2();
        complex_task_3();
    }
}

fn main() {
    let facade = TaskFacade;
    facade.perform_simple_task();
    facade.perform_compound_task();
    facade.perform_all_tasks();
}


```

:::

::: details TypeScript

``` typescript 

function complexTask1(): void {
    console.log("Executing complex task one...");
}

function complexTask2(): void {
    console.log("Executing complex task two...");
}

function complexTask3(): void {
    console.log("Executing complex task three...");
}

// Facade class
class TaskFacade {
    public performSimpleTask(): void {
        complexTask1();
    }

    public performCompoundTask(): void {
        complexTask1();
        complexTask2();
    }

    public performAllTasks(): void {
        complexTask1();
        complexTask2();
        complexTask3();
    }
}

const facade = new TaskFacade();
facade.performSimpleTask();
facade.performCompoundTask();
facade.performAllTasks();

```
:::
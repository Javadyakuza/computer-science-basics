<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the State Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Behavioral
  </div>
</div>

The **State Pattern** allows an object to change its behavior at runtime based on its internal state, without modifying its actual class. Instead, it delegates behavior to different state objects, depending on the current state.

## Human Example

Imagine a farmer who changes his actions based on the state of his fields. During harvest season, he harvests; during planting season, he plants. The farmer doesn’t change himself, but adapts based on the current state of the field.
He may use the harvesting tools or planting tools.

In code, instead of using `if-else` statements, each state has its own methods defined through a shared interface. The main object (the farmer) can call these methods without modifying its own structure or logic.

## Implementation Overview

The implementation of the State Pattern typically involves:

- **global interface** that defines the methods all state types will implement.
- **context class** that holds the current state and delegates behavior to the state object.
- **Concrete state classes** that implement their specific logic, based on the global interface.

## Use Cases & Point of Approach

- **Workflow Management Systems**
- **Game Development**
- **UI Components**
- **Networking Protocols**
- **Media Players**
- **Transaction Management**
- **Robotics**
- **Document Processing**
- **Order Processing Systems**
- **Multiplayer Systems**


## Code Samples

::: details Rust

``` rust

```

:::

::: details TypeScript

``` typescript 

```
:::

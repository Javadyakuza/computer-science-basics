<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Prototype Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Creational
  </div>
</div>

The **Prototype Pattern** is a design pattern used to create new objects by copying an existing object, known as the prototype. It is particularly useful when the creation of a new object is resource-intensive or complex, and when you want to avoid the overhead and complexity of initializing an object from scratch.

## Humanly Described

The Prototype Pattern can be thought of as a way of saying: "If you need a new object that is similar to an existing one, don't create it from scratch—just clone the existing object." This allows you to leverage the existing setup and configuration, making object creation simpler and more efficient.

## Initialization Process

The Prototype Pattern typically involves two key components:

1. **Prototype Interface**: This defines the method (often called `clone()` or similar) that allows objects to be copied. Any class that implements this interface must provide its own cloning method to ensure a new instance is created.

2. **Concrete Prototypes**: These are the actual objects that you want to clone. Each concrete prototype implements the prototype interface and provides a way to clone itself. When you need a new object, you clone an existing concrete prototype instead of creating a new instance from scratch.

With the Prototype Pattern, objects can be of any type as long as they implement the prototype interface. This makes it flexible and allows for polymorphic cloning—creating copies of objects without knowing their exact type at compile time.

## Use Cases & Point of Approach

The Prototype Pattern is particularly useful in the following scenarios:

- **Resource-Intensive Object Creation**: When creating an object from scratch is expensive due to resource allocation, complex initialization, or dependency loading, cloning an existing prototype can save time and resources.
- **Dynamic Object Creation**: When the system needs to create new objects at runtime based on some input or configuration, using a prototype allows for flexible and dynamic creation without hardcoding the object types.
- **Avoiding Subclassing**: When there are many subclasses or variations of a class, and you want to avoid a complex hierarchy, prototypes provide a way to create variations without extensive subclassing.

## Code Samples

::: details Rust

> this pattern is less useful in rust programming language, so we don't provide any code sample at this part to avoid any misunderstanding

:::



::: details TypeScript

``` typescript 
interface MainInterface {
   clone(): MainInterface;
}

class ConcreteObjType implements MainInterface{
    public state: string; 

    constructor(init_state: string) {
        state = init_state;
    }

    public clone(): MainInterface {
        return new ConcreteObjType(this.state);
    }

      public showState(): void {
        console.log(`State: ${this.property}`);
  }
}

let object1 = ConcreteObjType("lorem ipsum");

let object2 = object1.clone();

```
:::
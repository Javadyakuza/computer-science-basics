<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Builder Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Creational
  </div>
</div>


The Builder pattern dictates that the initialization of an object should be performed step-by-step rather than all at once. For complex objects, where initializing all components at once may lead to confusion or errors, the Builder pattern allows parameters to be passed and initialized incrementally, sometimes only when they are needed (lazy initialization).

## Humanly Described

The Builder pattern can be likened to the process of preparing a hotdog. First, you add the bread, then the hotdog, and depending on the customer's preference, you might add mustard, ketchup, pickles, tomatoes, and other toppings. Similarly, the Builder pattern allows you to start with a minimal version of a class and then, based on specific requirements or to keep the process simple, gradually add other parameters and functionalities using dedicated methods.

## Initialization Process

In the Builder pattern, we first create a basic version of the class. Then, using the defined "adder" methods, we incrementally enhance the class, either by requesting additional features or initializing other parts of the class. This approach ensures a more manageable and flexible construction process, particularly for complex objects.

## Use Cases & Point of Approach

- **Complex Objects**: Ideal for scenarios where objects have numerous components or configurations.
- **Lazy Initialization**: Facilitates initializing certain parts of an object only when they are actually needed, optimizing resource usage.
- **Reducing Confusion**: Simplifies the construction of complex objects by breaking down the process into smaller, more manageable steps.
- **Reducing Memory Usage**: Helps in optimizing memory usage by avoiding the initialization of unnecessary components.
- **Enhancing Flexibility**: The Builder pattern allows for flexible object construction, accommodating changes and customizations as needed.
- **Improving Readability and Maintenance**: By separating the construction process from the object's representation, the pattern enhances code readability and maintainability.

## Code Samples

::: details Rust

> Rust natively doesn't support class creation but this pattern is implementable using another approach.

``` rust

#[derive(Debug)]
pub struct HotDog {
    hotdog_size: u8,
    ketchup: bool,
    mustard: bool,
    pickles: bool,
    tomatoes: bool,
}

pub struct HotDogBuilder {
    hotdog_size: u8,
    ketchup: bool,
    mustard: bool,
    pickles: bool,
    tomatoes: bool,
}

impl HotDogBuilder {
    pub fn new(hotdog_size: u8) -> Self {
        Self {
            hotdog_size,
            ketchup: false,
            mustard: false,
            pickles: false,
            tomatoes: false,
        }
    }

    pub fn add_ketchup(&mut self) -> &mut Self {
        self.ketchup = true;
        self
    }

    pub fn add_mustard(&mut self) -> &mut Self {
        self.mustard = true;
        self
    }

    pub fn add_pickles(&mut self) -> &mut Self {
        self.pickles = true;
        self
    }

    pub fn add_tomatoes(&mut self) -> &mut Self {
        self.tomatoes = true;
        self
    }

    pub fn build(&self) -> HotDog {
        HotDog {
            hotdog_size: self.hotdog_size,
            ketchup: self.ketchup,
            mustard: self.mustard,
            pickles: self.pickles,
            tomatoes: self.tomatoes,
        }
    }
}

fn main() {
    let hotdog = HotDogBuilder::new(1)
        .add_ketchup()
        .add_mustard()
        .build();

    println!("{:?}", hotdog);
}


```

:::

::: details TypeScript

``` typescript 
class HotDog {
    public hotdog_size: boolean;
    public ketchup: boolean;
    public mustard: boolean;
    public pickles: boolean;
    public tomatoes: boolean;

    constructor (
        _hotdog_size: boolean,
        _ketchup: boolean,
        _mustard: boolean,
        _pickles: boolean,
        _tomatoes: boolean
    ) {
        
        this.hotdog_size = _hotdog_size
        this.ketchup = _ketchup
        this.mustard = _mustard
        this.pickles = _pickles
        this.tomatoes = _tomatoes
    }
}

class HotDogBuilder {
    public hotdog_size: boolean;
    public ketchup: boolean;
    public mustard: boolean;
    public pickles: boolean;
    public tomatoes: boolean;

    constructor(hotdog_size: boolean) {
        this.hotdog_size = hotdog_size;
    }

    public add_ketchup(): this {
        this.ketchup = true;
        return this;
    }

    public add_mustard(): this {
       this.mustard = true;
       return this;
    }
    
    public add_pickles(): this {
        this.pickles = true;
        return this;
    }
    
    public add_tomatoes(): this {
        this.tomatoes = true;
        return this;
    }

    pub build(): HotDog {
       
       return new HotDog (
            this.hotdog_size,
            this.ketchup,
            this.mustard,
            this.pickles,
            this.tomatoes
        )
    }

}

// Usage
const hotdog = new HotDogBuilder(true)
    .addKetchup()
    .addMustard()
    .build();

console.log(hotdog);

```
:::
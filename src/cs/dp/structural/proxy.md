<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Proxy Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Structural
  </div>
</div>


The Proxy pattern allows you to use an intermediary object to control access to another object. It enables you to add functionalities, manage the state, lazy initialization and control access to the real object without directly interacting with it.

## Humanly Described

Think of it as a middleman that handles the communication and trust between two parties, managing the data and interactions between them.


## Initialization Process

To initialize the Proxy pattern, you need two objects: the main object and the proxy. The end user interacts solely with the proxy, which manages access to the main object. The main object is only accessible through the proxy.

## Use Cases & Point of Approach

- **Logging and Monitoring**
- **Access Control**
- **Caching**
- **Remote Method Invocation**
- **Resource Management**

## Code Samples

::: details Rust

> Rust natively doesn't support class creation but this pattern is implementable using another approach.

``` rust

struct RealSubject;

impl RealSubject {
    pub fn handle_request(&self) {
        println!("RealSubject: handling request.");
    }
}

pub struct Proxy {
    target: Option<RealSubject>,
}

impl Proxy {
    // Constructor for Proxy
    pub fn new() -> Self {
        Self {
            target: None, // Initialize with None for lazy initialization
        }
    }

    // Method to handle the request
    pub fn handle_request(&mut self) {
    match &self.target {
        Some(real_subject) => {
            real_subject.handle_request();

        }, 
        None => {
            self.target = Some(RealSubject); // Create RealSubject when needed
            self.target.as_ref().unwrap().handle_request();
        }
    }

    }
}

fn main() {
    let mut proxy = Proxy::new();

    proxy.handle_request(); // This will create and use RealSubject
}

```

:::

::: details TypeScript

``` typescript 

// RealSubject.ts
export class RealSubject {
    public request(): string {
        return "RealSubject: Handling request.";
    }
}
// Proxy.ts
import { RealSubject } from './RealSubject';

export class Proxy {
    private realSubject: RealSubject | null = null;

    // Proxy method to control access to the RealSubject
    public request(): string {
        if (this.realSubject === null) {
            this.realSubject = new RealSubject();
        }

        // Additional proxy logic can be added here
        console.log("Proxy: Checking access before forwarding the request.");
        
        return this.realSubject.request();
    }
}
// index.ts
import { Proxy } from './Proxy';

const proxy = new Proxy();
console.log(proxy.request()); // This will create and use RealSubject


```
:::
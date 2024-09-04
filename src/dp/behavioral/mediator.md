<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Mediator Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Behavioral
  </div>
</div>

The Mediator pattern acts as a middleman between different modules of a program that need to communicate or exchange data, facilitating many-to-many relationships without direct connections.

## Humanly Described

Think of Airbnb: it serves as an intermediary between customers and homeowners, coordinating details like dates, pricing, and more to provide a seamless service.

## Implementation Overview

This behavioral pattern involves two modules on either side, with a middleware component coordinating their interactions.

## Use Cases

- **Simplifies complex code**
- **Enhances code manageability and maintainability**
- **Improved modularity**
- **Reduced dependencies**
- **Centralized control**

## Point of Approach

This pattern is ideal when one side cannot fully trust the service provider or wants to avoid dealing with complex configurations. It can be combined with the Facade design pattern to offer a user-friendly interface, making the service easier to use and understand without deep knowledge of the underlying system.

## Code Samples

::: details Rust

``` rust
// Define the Mediator trait
pub trait Mediator {
    fn deliver_msg(&self, msg: String, target_user: usize);
    fn add_user(&mut self) -> ChatroomUser;
}

pub struct ChatroomMediator {
    chat_room: Vec<ChatroomUser>,
}

impl Mediator for ChatroomMediator {
    fn deliver_msg(&self, msg: String, target_user: usize) {
        if let Some(user) = self.chat_room.get(target_user) {
            user.receive(msg);
        } else {
            println!("User not found");
        }
    }

    fn add_user(&mut self) -> ChatroomUser {
        let user = ChatroomUser;
        self.chat_room.push(user.clone());
        user
    }
}

pub trait User {
    fn receive(&self, msg: String);
    fn send_message(&self, msg: String, mediator: &dyn Mediator, target_user: usize);
}

#[derive(Clone)]
pub struct ChatroomUser;

impl User for ChatroomUser {
    fn receive(&self, msg: String) {
        println!("Received: {}", msg);
    }

    fn send_message(&self, msg: String, mediator: &dyn Mediator, target_user: usize) {
        mediator.deliver_msg(msg, target_user);
    }
}

fn main() {
    // Creating the mediator
    let mut mediator = ChatroomMediator {
        chat_room: Vec::new(),
    };

    // Creating the users
    let user_1 = mediator.add_user();
    let user_2 = mediator.add_user();

    user_1.send_message("hello from 1 to 2".to_string(), &mediator, 1);
    user_2.send_message("hello from 2 to 1".to_string(), &mediator, 0);
}

```

:::

::: details TypeScript

``` typescript 
interface Mediator {
    sendMessage(message: string, sender: User): void;
    addUser(user: User): void;
}

class ChatRoomMediator implements Mediator {
    private users: User[] = [];
    addUser(user: User): void { this.users.push(user); }
    sendMessage(message: string, sender: User): void {
        this.users.forEach(user => { if (user !== sender) user.receive(message); });
    }
}

class User {
    constructor(private name: string, private mediator: Mediator) {}
    send(message: string): void { console.log(`${this.name} sends: ${message}`); this.mediator.sendMessage(message, this); }
    receive(message: string): void { console.log(`${this.name} receives: ${message}`); }
}

const mediator = new ChatRoomMediator();
const user1 = new User("Alice", mediator);
const user2 = new User("Bob", mediator);
mediator.addUser(user1);
mediator.addUser(user2);
user1.send("Hello, Bob!");
user2.send("Hi, Alice!");


```
:::

What is the Mediator Design Pattern?


Simple Explanation

Think of Airbnb: it serves as an intermediary between customers and homeowners, coordinating details like dates, pricing, and more to provide a seamless service.
Implementation Overview

This behavioral pattern involves two modules on either side, with a middleware component coordinating their interactions.
Use Cases

    Simplifies complex code
    Enhances code manageability and maintainability
    Improved modularity
    Reduced dependencies
    Centralized control

Approach

This pattern is ideal when one side cannot fully trust the service provider or wants to avoid dealing with complex configurations. It can be combined with the Facade design pattern to offer a user-friendly interface, making the service easier to use and understand without deep knowledge of the underlying system.
<div style="display: flex; align-items: center;">
  <h1 style="margin: 0; font-size: 24px;">What is the Observer Pattern?</h1>
  <div style="border: 1px solid var(--vp-c-brand-1); border-radius: 15px; background-color: transparent; color: var(--vp-c-brand-1); padding: 5px 10px; display: inline-block; font-size: 14px; margin-left: 10px;">
    Behavioral
  </div>
</div>

The Observer Pattern is a design pattern that establishes a one-to-many relationship between a subject and multiple observers (or listeners). When the subject's state changes, all registered observers are notified and can react accordingly.

## Humanly Described

Think of it like a speaker at a conference with many listeners. The Observer Pattern sets up a sender (the subject) and multiple receivers (the observers) who act based on predefined rules when the sender updates.

Common methods for implementing the Observer Pattern include:

- **Message Passing with Channels**: e.g., MPSC channels
- **WebSocket Channels**: For real-time updates
- **Asynchronous Updates**: Non-blocking communication
- **Manual State Updates**
- **Publish-Subscribe Systems**: For managing and distributing messages
- **Event Emitters**: Used in various programming environments

## Implementation Overview

Three main concepts are involved:

    Subject (Sender)
    Receivers (Listeners)
    Communication Method

The sender can be any type that supports sending messages through the chosen channel.

The receiver can be any type that can receive messages from the chosen communication channel.

The methods can be [those mentioned above](#human-description) or any other that meets the requirements of the pattern.

One initialized each one of them and connected to each other, our system can be utilized easily.  


## Use Cases & Point of Approach

- **User Interface Systems**
- **Event Handling Systems**
- **Real-Time Data Monitoring**
- **Publishing and Subscribing Systems**
- **Distributed Systems and Microservices**
- **Game Development**
- **Configuration Management**


## Code Samples

::: details Rust

``` rust
use std::{
    sync::{
        mpsc::{self, Receiver, Sender},
        Arc, Mutex,
    },
    thread::{self, JoinHandle},
};

// Define an enum for messages
#[derive(Clone)]
pub enum Message {
    Text(String),
    Kill,
}

// Observer struct
pub struct Observer {
    id: i32,
    receiver: Arc<Mutex<Receiver<Message>>>,
    sender: Sender<Message>,
}

impl Observer {
    pub fn new(id: i32) -> Self {
        let (sender, receiver) = mpsc::channel();
        Self {
            id,
            receiver: Arc::new(Mutex::new(receiver)),
            sender,
        }
    }

    pub fn listen(&self) -> JoinHandle<()> {
        let shared_receiver = Arc::clone(&self.receiver);
        let id = self.id;
        thread::spawn(move || {
            while let Ok(msg) = shared_receiver.lock().unwrap().recv() {
                match msg {
                    Message::Text(content) => {
                        println!("Observer {} received: {}", id, content);
                    }
                    Message::Kill => {
                        println!("Observer {} is shutting down.", id);
                        return;
                    }
                }
            }
        })
    }
}

// Subject struct
pub struct Subject {
    observers: Vec<Sender<Message>>,
}

impl Subject {
    pub fn new() -> Self {
        Self {
            observers: Vec::new(),
        }
    }

    pub fn notify(&self, msg: Message) -> Result<(), Box<dyn std::error::Error>> {
        for handler in &self.observers {
            handler.send(msg.clone())?; // Handle errors more gracefully
        }
        Ok(())
    }

    pub fn register_observer(&mut self, observer_sender: Sender<Message>) {
        self.observers.push(observer_sender);
    }
}

fn main() {
    // Create a subject
    let mut subject = Subject::new();

    // Prepare observers and their handles
    let mut observers: Vec<Observer> = Vec::with_capacity(3);
    let mut observers_handles: Vec<JoinHandle<()>> = Vec::with_capacity(3);

    for id in 0..3 {
        let observer = Observer::new(id);

        // Register observers with the subject
        subject.register_observer(observer.sender.clone());

        observers_handles.push(observer.listen());
        observers.push(observer);
    }

    // Notify observers
    subject.notify(Message::Text("Hello to all observers!".to_string())).unwrap();
    subject.notify(Message::Kill).unwrap();

    // Join observer threads
    for handle in observers_handles {
        handle.join().unwrap();
    }
}

```

:::

::: details TypeScript

``` typescript 
// Observer interface
interface Observer {
    update(data: any): void;
}

// Concrete Observer
class ConcreteObserver implements Observer {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    update(data: any): void {
        console.log(`Observer ${this.id} received data:`, data);
    }
}

// Subject interface
interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

// Concrete Subject
class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: any;

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    setState(state: any): void {
        this.state = state;
        this.notifyObservers();
    }

    getState(): any {
        return this.state;
    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }
}

// Usage
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState({ message: "Hello Observers!" });
// Both observer1 and observer2 will receive the update.

subject.removeObserver(observer1);

subject.setState({ message: "Another update" });
// Only observer2 will receive the update.

```
:::

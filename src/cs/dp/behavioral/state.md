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
use std::fmt::Debug;
use std::any::Any;

// Define the Action trait with a method to transition states
trait Action: Debug + Any {
    fn action(&self, media_player: &mut MediaPlayer);
    fn as_any(&self) -> &dyn Any;
}

// MediaPlayer struct holding the current state as a boxed Action trait
#[derive(Debug, Clone)]
struct MediaPlayer {
    pub current_state: Box<dyn Action>,
}

// Concrete state: Playing
#[derive(Debug, Clone)]
struct Playing;

impl Action for Playing {
    fn action(&self, media_player: &mut MediaPlayer) {
        println!("Transitioning from Playing to Paused...");
        media_player.current_state = Box::new(Paused);
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}

// Concrete state: Paused
#[derive(Debug, Clone)]
struct Paused;

impl Action for Paused {
    fn action(&self, media_player: &mut MediaPlayer) {
        println!("Transitioning from Paused to Playing...");
        media_player.current_state = Box::new(Playing);
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}

// Proper Clone implementation for Box<dyn Action>
impl Clone for Box<dyn Action> {
    fn clone(&self) -> Box<dyn Action> {
        if self.as_any().is::<Playing>() {
            Box::new(Playing)
        } else if self.as_any().is::<Paused>() {
            Box::new(Paused)
        } else {
            panic!("Unknown state"); // This should never happen in this pattern
        }
    }
}

fn main() {
    let mut media_player = MediaPlayer {
        current_state: Box::new(Playing),
    };

    println!("Initial state: {:?}", media_player.current_state);

    // Transition from Playing to Paused
    media_player.current_state.action(&mut media_player);
    println!("After first transition: {:?}", media_player.current_state);

    // Clone the player and transition again
    let media_player_clone = media_player.clone();
    media_player_clone.current_state.action(&mut media_player);
    println!("After second transition: {:?}", media_player.current_state);
}

```

:::

::: details TypeScript

``` typescript 
// Define the Action interface (similar to a trait in Rust)
interface Action {
  action(mediaPlayer: MediaPlayer): void;
}

// Concrete state: Playing
class Playing implements Action {
  action(mediaPlayer: MediaPlayer): void {
    console.log('Transitioning from Playing to Paused...');
    mediaPlayer.setState(new Paused());
  }
}

// Concrete state: Paused
class Paused implements Action {
  action(mediaPlayer: MediaPlayer): void {
    console.log('Transitioning from Paused to Playing...');
    mediaPlayer.setState(new Playing());
  }
}

// MediaPlayer class holds the current state
class MediaPlayer {
  private currentState: Action;

  constructor(initialState: Action) {
    this.currentState = initialState;
  }

  // Set the state of the media player
  setState(newState: Action): void {
    this.currentState = newState;
  }

  // Perform action based on the current state
  performAction(): void {
    this.currentState.action(this);
  }

  // Clone method for creating a copy (shallow copy here)
  clone(): MediaPlayer {
    return new MediaPlayer(this.currentState);
  }
}

// Usage example
const mediaPlayer = new MediaPlayer(new Playing());

console.log("Initial state: Playing");

// Perform transition to Paused
mediaPlayer.performAction(); // Transitioning from Playing to Paused

// Perform transition to Playing again
mediaPlayer.performAction(); // Transitioning from Paused to Playing

// Clone the media player and perform action on the clone
const mediaPlayerClone = mediaPlayer.clone();
mediaPlayerClone.performAction(); // Transitioning from Playing to Paused

```
:::

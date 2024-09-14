<h1>
<span style="color: var(--vp-c-brand-1);">Pull</span> some and <span style="color: var(--vp-c-brand-1);">Pin</span> it For <span style="color: var(--vp-c-brand-1);">Future</span> <img src="/pacman.gif" alt="Description of GIF" style="width:25px; display: inline;"/>
</h1>


## What is Async Programming?

Async programming allows a program to avoid waiting idly for a time-consuming task (like fetching data from the internet or reading a file). Instead of pausing the entire program, it can move on to handle other tasks while the slow operation continues in the background. Once the awaited task is completed, the program will resume and process its result.

---

## Async Programming in Rust

Async programming in Rust is a bit more explicit compared to languages like TypeScript, which natively support async functions and automatically handle the waiting process. In Rust, async programming requires manual handling using `Future` traits and an async runtime, such as Tokio.

---

### Tokio

You might think that Tokio implements async programming for us, but that's not exactly the case. 

The Tokio crate provides an async runtime that executes tasks implementing the `Future` trait. It doesn't handle async behavior itself but manages task scheduling and execution by polling these `Future` types.

While we won’t cover Tokio’s threading mechanisms in detail here, it’s important to note that its strength lies in efficiently managing threads and task scheduling.

---

### What's Under the Hood?

There are three key concepts behind async task processing in Rust:

1. **Polling**
2. **Pinning**
3. **Future**

---

### Polling

Polling is the mechanism by which the async runtime repeatedly checks whether a task (represented by a `Future`) is ready to complete. The runtime calls the `poll()` method on the `Future` until it signals that the task is finished, allowing other tasks to proceed in the meantime.

---

### Pinning

Pinning ensures that a `Future` remains at the same memory location from the time it’s created until it’s complete. This prevents it from being moved, which is critical for certain types of data that rely on their memory address not changing during execution.

---

### Future

A `Future` in Rust is a trait representing an asynchronous operation that will eventually produce a value. It looks like this:

```rust
pub trait Future {
    type Output;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
```

The `poll` method is called by the runtime, checking if the operation has completed and returning the result when it’s ready. This allows async tasks to progress without blocking the entire program.


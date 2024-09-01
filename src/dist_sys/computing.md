# Distributed Computing

Distributed computing is the process of dividing a heavy task among multiple computers. This can be achieved through various methods, such as parallelizing computations for tasks that can be processed in parallel, or utilizing crowd sourcing techniques like "folding at home."

## Parallelization

Parallelization is the process of dividing a task into smaller sub-tasks that can be independently computed. The final results of each sub-task are then combined to achieve the overall goal. One limitation of speeding up a single processor is heat generation, as the high-speed movement of electrons within the processor can cause it to overheat.

## Crowd Sourcing

Crowd sourcing is a technique that allows individuals to contribute to a common goal by performing small tasks. This approach is similar to the software layer of blockchains, which allows individuals to install a copy of a program on their computers and participate in a network. Through an associated mechanism, participants are selected to compute specific tasks for the network.

## CPU and the Cores

The number of cores in a CPU determines the number of operations that can be performed simultaneously. For example, if a CPU has four cores, it can handle four operations concurrently. The gigahertz (GHz) refers to the speed at which the CPU core operates.

## Threads

Threads are a collection of operations grouped together and queued within a single core. Threading is the core's decision-making process of determining which thread to execute and calculate. It involves switching between different threads, but does not utilize multiple cores.

## Concurrent Programming

Concurrent programming refers to the operation of switching between threads by a single core. When a thread has an operation that doesn't require immediate execution, the core switches to another thread and performs calculations while waiting for other threads that may be "sleeping" or inactive. This waiting and sleeping state of a thread is referred to as "hanging."
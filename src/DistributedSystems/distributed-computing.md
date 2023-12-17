the computing itself is a task that can be done using just one computer, but what if the task that is going to be done jut by one by one computer is a task that is too heavy and can be a time and resource costly task ?
what if i said we can divide the task between the multiple computers and then run the task? you might say how ?

## distributed computing

the distributed computing is when we divide the a heavy task between multiple computers, this is done multiple ways such as prallelelazing the computations for the task that can be parallelized or using the crowd sourcing(folding at home)

### prallelization

is about a task that can be divided into multiple smaller tasks which can be computed independently and then we can use the final result of each small task to reach the goal task.

the recon that we can not just speed up a single processor is heat, the electron speed moving around the processor is too high that will melt the processor.


### crowd sourcing(folding at home)

this approach is similar to what the software layer of the blockchains are operating with, meaning that you can install a copy of the running program on your computer and then participate in the network and get selected by the associated mechanism to compute a task for the network.


### cpu and the cores

if our cpu has only 4 cores, this means that we can only operate only 4 operations at the exact same time in this cpu.

the giga hertz is the speed of the core of your cpu that can operate based of of that.

### threads

the threads are essential a batch of the operations gathered together and they all are in a queue of a single core.

### threading
the core deciding to which thread must be ran and calculated is the threading. threading is not operating on multiple cores , its about switching between those cores


### concurrent programming


the switch operation between the threads by a single core is called concurrent programming, when a thread is having a operation that doesn't need to get executed in this exact moment, the core will switch on another thread and does the calculations of that thread while waiting for other sleeping thread.

the operation of waiting and sleeping of a thread is called `hanging`.
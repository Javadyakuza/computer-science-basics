# primary or main memory

consists of to parts:
1. random access memory(RAM)
2. read only memory(ROM)

## ROM
In a computer, ROM stands for Read-Only Memory. It's a type of non-volatile memory that stores data permanently, meaning the information remains even when the computer is turned off. Unlike RAM (Random Access Memory), ROM cannot be overwritten or changed once programmed. it is used to boot the computer as well.

## RAM
RAM, or Random Access Memory, is your computer's short-term memory, where it stores data that it needs to quickly access while running programs and performing tasks. Imagine it like your desk at work, where you keep the papers and tools you're currently using.


## cache memory

is the memory that saves the frequently data of the RAM used by the processor by it does not save data permanently.
the RAM complicates with the caches memory through the words and the cache memory mapping technique.

## secondary memory

the pregnant storage that we store the audio files and stuff, it communicates with the RAM through the pages and the virtual memory mapping technique.

types:
1. removable axillary storages. usb's , hard externals and cd and dvd etc
2. fixed axillary storage. onboard hdd and sdd and etc.



## Volatile Memory regions:

1. heap
2. stack
3. static memory

|          | Contents                                                           | Size                     | LifeTime                 | Cleanup                               |
| -------- | ------------------------------------------------------------------ | ------------------------ | ------------------------ | ------------------------------------- |
| Stack    | - Functions args<br>- Local Variables<br>- known size at compile time | Dynamic / Fixed Upper Limit | Life time of function    | Automatic when function returns        |
| Heap     | - values that live beyond the function life time<br>- values accessed by multiple threads<br>- Large values<br>- unknown size at compile time | Dynamic                   | Determined by the programmer | Manual                                |
| Static   | - programs binary<br>- static variable<br>- string literals        | Fixed                    | Life time of the program | Automatic, when the program terminates |

::: info
notice that the stacks are in context of the functions calls, so what is meant by local variables is the vars that are built inside of the fn blocks.
:::

::: info
Notice that the heap is used for variables that are accessed by multiple threads. It has a dynamic size, allowing it to grow or shrink. The lifetime of these variables is not automatically destroyed after a function returns or completes its execution. The programmer must manually determine when to de-allocate memory in this region. Therefore, the memory management of this region is solely the responsibility of the program, which is known as manual memory management.
:::
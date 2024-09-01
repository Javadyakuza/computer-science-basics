## compound data are the data that are put together

the data structures are the way to organize the data

## linked list


the data are in the single nodes and they are having the pointer to the next nodes. the first in the list is known as the head while the last node in the list is know as the tail.

pros :

good at adding or deleting the node because we need to only change the pointer of the node.

cons :

it is bad at the retrieving the data even though e have the index of he node , that is because a node is only having the pointer to its next  node.


notice that the array are kinda more memory efficient in terms of the storing the data than the linked lists, the linked list and specially the double linked list are occupying more memory to save the address of the next item.

the linked lists doesn't need the number of the elements in time if the initializing.

the linked list are used to implement the stacks queues m graphs.

the tail of a linked list is always pointing to hte null.

types of the linked lists:

- single linked list

- doubly linked lists

- circular linked lists

- doubly circular linked lists


## arrays

pros :

retrieving items

cons :

adding new items can make the array too big and then we have to change it place in the memory which in some languages it is handled automatically and vice versa.

arrays are used to implement the stacks , queues , heaps , hash tables.
## hash table

are like the objects in the js and like the dictionaries in the python, the dont have the size problem because the hasong is calculating the random locations of the memory.

pros:
nice at retrieving and adding and removing the data because of the indexed nature

cons :

collisions : when the ahs of a key or a value is in a same location of the memory.


## stack and queue


are the data structure with the last in first out(LIFO), they both are having the same functionality but the stack is using the push and pop methods for adding and removing the data and the queues are using the enqueueing and dequeueing for pushing and the removing the data. the queues are using the first in first out.
the track of the function calls of a program is called in a storage with the data structure of the stack named the call stack.

call stack is super important for the algorithm named depth first search(dfs)


the queueing is super important for the algorithm called breath first search

pros :
efficient at add and remove

cons:

limited use cases

stack s are implemented via the linked lists or the arrays.

 the pop and the push are done in he same end of the stack.

the stack over flow is when the stack size is filled and then we get a overflow error.

when reversing a string the stack is used very often.

The stack is used to perform undo as well as redo operations in word processors.


other methods of the stacks:

- Peek: The top element can be inspected without removing it from the stack using a peek operation.

- IsEmpty: A check can be made to determine if the stack is empty.

- Size: The number of elements in the stack can be determined using a size operation.


### queue

its literally like a bakery queue , the first consumer that came on the line will be served first.

the queue data structure is implementing the (FIFO) rule which is the first in first out.

it is very useful when dealing with the scheduled operations, like in the media players, printers, uploading multiple stuff and etc.


enqueue and the dequeue operations are not done in the same end.



other methods of the queue:

- Peek: The top element can be inspected without removing it from the stack using a peek operation.

- IsEmpty: A check can be made to determine if the stack is empty.

- Size: The number of elements in the stack can be determined using a size operation.

## graphs and tree

the data are in the nodes and the relation between them is called the edges and these edges are having the weights. the edges are pointing to other nodes.

trees are special type of the graphs expect the data is expanded into one direction like the blood line trees or the nested html elements.

there is a more specific tree named binary search tree which is good for searching the data.

the bst rules:

1. maximum up to two children.
2. the left  pointed node value must be less than the parent node value.
3. the right pointed node value must be more than the parent node value.



notice that the in the BST's the values must be set in a organized order or this method will be be so bad for the querying.

the trees are having multiple technologies involved in em, node , root, edge, height of th tree and the degree if the tree.


different types of the trees:

- binary trees

- binary search trees

- AVL Tree

- B-tree

AVL trees and B-trees are both self-balancing binary search trees used for efficient data storage and retrieval. They differ in their focus and approach:

AVL Tree:

    Focus: Maintaining balanced tree structure (height difference between left and right sub-trees is at most 1)
    Operations: Efficient insertion, deletion, and search (logarithmic time complexity)
    Structure: Uses rotations (left and right) to maintain balance after insertions or deletions
    Applications: When frequent insertions and deletions occur, and maintaining a balanced tree is crucial for performance.

B-Tree:

    Focus: Maximizing data storage and minimizing disk I/O operations
    Operations: Efficient search and retrieval (logarithmic time complexity)
    Structure: Each node can hold multiple key-value pairs, leading to fewer nodes in the tree and faster search.
    Applications: Used in databases and file systems where efficient data storage and retrieval are essential.

in a tree the height is the path of the root node to the leaf node.

the root node has the depth of zero. maybe the next level of the nodes are the depth of 1.

B-Tree and B+ Tree are used to implement indexing in databases.

K-D Tree is a space partitioning tree used to organize points in K-dimensional space.


Spanning trees are used in routers in computer networks.

other methods of the trees :


- Insertion: New nodes can be added to the tree to create a new branch or to increase the height of the tree.

- Deletion: Nodes can be removed from the tree by updating the references of the parent node to remove the reference to the current node.

- Search: Elements can be searched for in a tree by starting from the root node and traversing the tree based on the value of the current node until the desired node is found.

- Traversal: The elements in a tree can be traversed in several different ways, including in-order, pre-order, and post-order traversal.

- Height: The height of the tree can be determined by counting the number of edges from the root node to the furthest leaf node.

- Depth: The depth of a node can be determined by counting the number of edges from the root node to the current node.

- Balancing: The tree can be balanced to ensure that the height of the tree is minimized and the distribution of nodes is as even as possible.

## heap
heap is a tree data structure implemented using the arrays and is implemented in purpose to implement the priority queues.

## graphs

graphs are the non-linear data structures that are multiple set of nodes connected to each other with edges.

some of the terminologies in the graphs context:

- path
- degree
- adjacent vertices (رئوس مجاور) vertex = راس.
- connected components and etc


The maximum distance from a vertex to all the other vertices is considered the Eccentricity of that vertex.

The vertex having minimum Eccentricity is considered the central point of the graph.

The minimum value of Eccentricity from all vertices is considered the radius of a connected graph.

is used in the resource allocation of the os's.

distributed system also use the graphs in some way.


some of the graphs methods:

- Add Vertex: New vertices can be added to the graph to represent a new node.

- Add Edge: Edges can be added between vertices to represent a relationship between nodes.

- Remove Vertex: Vertices can be removed from the graph by updating the references of adjacent vertices to remove the reference to the current vertex.

- Remove Edge: Edges can be removed by updating the references of the adjacent vertices to remove the reference to the current edge.

- Depth-First Search (DFS): A graph can be traversed using a depth-first search by visiting the vertices in a depth-first manner.

- Breadth-First Search (BFS): A graph can be traversed using a breadth-first search by visiting the vertices in a breadth-first manner.

- Shortest Path: The shortest path between two vertices can be determined using algorithms such as Dijkstra’s algorithm or A* algorithm.

- Connected Components: The connected components of a graph can be determined by finding sets of vertices that are connected to each other but not to any other vertices in the graph.

- Cycle Detection: Cycles in a graph can be detected by checking for back edges during a depth-first search.



## what are the algorithms ?

a algorithm is the steps that we have to take to accomplish a certain goal.

> the following sections about the algorithm efficiency in the runtime.
### big O notations

the big o notation is pointing to the algorithm to see if the developed algorithm is going to be scalable when the data size is growing ? doe it work in the expected way ?

we use the big o notation to see how much of the time and resource does this algorithm cost in different situation, inputs and outputs.


 the following example demonstrates the different algorithms in different codes, hence we go forward the algorithm goes more costly in this particular example :


## o(constant)

``` rust

// in this example the size of the array doesn't matter since we are always getting the first element.
fn some_fn(some_vec: Vec<i32> ) {
        println!("{}", some_vec.0);
}
```

## o(n) Linear

``` rust
// in this example the size of the array matters since we are always iterating over the array elements so the efficiency of the algo grows lineally.
fn some_fn(some_vec: Vec<i32> ) {

    for element in some_vec {
        println!("{}", element);
    }
}
```

## o(n ^ 2) Quadratic

``` rust
// in this example the size of the array matters since we are always iterating over the array elements and we are having a nested array.
fn some_fn(some_vec: Vec<i32> ) {

    for element in some_vec {
        println!("{}", element);
            for element in some_vec {
                println!("{}", element);
        }
    }
}
```
## o(n ^ 3) Quadratic

``` rust
// in this example the size of the array matters since we are always iterating over the array elements and we are having two other nested array.
fn some_fn(some_vec: Vec<i32> ) {

    for element in some_vec {
        println!("{}", element);
            for element in some_vec {
                println!("{}", element);
                    for element in some_vec {
                        println!("{}", element);
            }
        }
    }
}
```

### o(log n) Logarithmic

logarithmic curve slows at some points contrary to the linear curves that are constantly increasing.
this algos are more affiant and faster than the linear and the quadratic.

> the opposite of the logarithmic algorithm for searching is the exponential algo.

### Logarithmic search
first we find the middle value in a sorted array, then we see if it  lower than our value, if it was then go for the rhs of the array and if not to the lhs of the array.
them we do this more times and in each round we check the middle of the selected side and so on, the point that it has is even if we double the size of the array then just one round will be added to the operation of searching.


## linear search

to iterate over the a array and one by one check the value of next index to see if that the one.  the reason that it is called linear is becaus the time and the resource costed for the search increases linearly to the size of that array.



*we want our algorithm to be fast and scalable but there is a trad off which is the memory usage !!*




## Linear data structure:
Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure.

Examples of linear data structures are array, stack, queue, linked list, etc.

> Static data structure: Static data structure has a fixed memory size. It is easier to access the elements in a static data structure.
An example of this data structure is an array.

> Dynamic data structure: In the dynamic data structure, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code.
Examples of this data structure are queue, stack, etc.

## Non-linear data structure:
Data structures where data elements are not placed sequentially or linearly are called non-linear data structures. In a non-linear data structure, we can’t traverse all the elements in a single run only.

Examples of non-linear data structures are trees and graphs.

it saying the the linear data structures are literally in a same direction and a memory location while the non_linear ones are not necessarily placed in one location.

## Advantages of data structure:

- Improved data organization and storage efficiency.
- Faster data retrieval and manipulation.
- Facilitates the design of algorithms for solving complex problems.
- Eases the task of updating and maintaining the data.
- Provides a better understanding of the relationships between data elements.


## Disadvantage of Data Structure:

- Increased computational and memory overhead.
- Difficulty in designing and implementing complex data structures.
- Limited scalability and flexibility.
- Complexity in debugging and testing.
- Difficulty in modifying existing data structures.



## what is a algorithm

a algorithm is a se of rules followed by the calculations or other problem solving operations
OR
a procedure to solve a mathematical problem with the finite number of steps that frequently involves the recursive operations

> **Recursive operations**: Many algorithms use recursion, which means they call themselves within their own definition. This can be a powerful technique for solving complex problems by breaking them down into smaller, self-similar sub-problems.


therefor a algorithm is a sequence of the finite steps to solve a problem.


types of the algorithms:


1. *Brute Force Algorithm*: It is the simplest approach for a problem. A brute force algorithm is the first approach that comes to finding when we see a problem. The brute force approach is a guaranteed way to find the correct solution by listing all the possible candidate solutions for the problem.The brute force method is ideal for solving small and simpler problems.

2. *Recursive Algorithm*: A recursive algorithm is based on recursion. In this case, a problem is broken into several sub-parts and called the same function again and again. A recursive function solves a particular problem by calling a copy of itself and solving smaller sub-problems of the original problems. It is essential to know that we should provide a certain case in order to terminate this recursion process.Performing the same operations multiple times with different inputs.In every step, we try smaller inputs to make the problem smaller.(not necessarily).Recursion uses more memory, because the recursive function adds to the stack with each recursive call, and keeps the values there until the call is finished.The recursive function uses LIFO (LAST IN FIRST OUT) Structure just like the stack data structure.
*What is the difference between direct and indirect recursion?*
A function fun is called direct recursive if it calls the same function fun. A function fun is called indirect recursive if it calls another function say fun_new and fun_new calls fun directly or indirectly.
When any function is called from main(), the memory is allocated to it on the stack. A recursive function calls itself, the memory for a called function is allocated on top of memory allocated to the calling function and a different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process continues.


*Recursion VS Iteration*

| Recursion | Iteration |
|---|---|
| Terminates when the base case becomes true. | Terminates when the condition becomes false. |
| Used with functions. | Used with loops. |
| Every recursive call needs extra space in the stack memory. | Every iteration does not require any extra space. |
| Smaller code size. | Larger code size. |

1. *Backtracking Algorithm*: The backtracking algorithm basically builds the solution by searching among all possible solutions. Using this algorithm, we keep on building the solution following criteria. Whenever a solution fails we trace back to the failure point and build on the next solution and continue this process till we find the solution or all possible solutions are looked after.
Backtracking algo's types:

- Decision Problem – In this, we search for a feasible solution.

- Optimization Problem – In this, we search for the best solution.

- Enumeration Problem – In this, we find all feasible solutions.

a back tracking usage example is when solving a sudoku table, we put a digit and then after wards if we saw the number is nit going to be a part of the solution we delete that (backtracking).

3. *Searching Algorithm*: Searching algorithms are the ones that are used for searching elements or groups of elements from a particular data structure. They can be of different types based on their approach or the data structure in which the element should be found.


searching algorithms:

*sequential search*: in this list or array is traversed sequentially and every element is checked one by one. is called linear search.

interval search: this type of the searching algorithm is used for the sorted data database, it is more efficient than the  linear

4. *Sorting Algorithm*: Sorting is arranging a group of data in a particular manner according to the requirement. The algorithms which help in performing this function are called sorting algorithms. Generally sorting algorithms are used to sort groups of data in an increasing or decreasing manner.A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.

5. *Hashing Algorithm*: Hashing algorithms work similarly to the searching algorithm. But they contain an index with a key ID. In hashing, a key is assigned to specific data.
Hashing refers to the process of generating a fixed-size output from an input of variable size using the mathematical formulas known as hash functions. This technique determines an index or location for the storage of an item in a data structure.
the hash data structure are the fixed length array kinda that provides us the constant time complexity.

6. *Divide and Conquer Algorithm (DAC)*: This algorithm breaks a problem into sub-problems, solves a single sub-problem and merges the solutions together to get the final solution. It consists of the following three steps:

Divide: This involves dividing the problem into smaller sub-problems.
Conquer: Solve sub-problems by calling recursively until solved.
Combine: Combine the sub-problems to get the final solution of the whole problem.

7.  *Greedy Algorithm*: In this type of algorithm the solution is built part by part. The solution of the next part is built based on the immediate benefit of the next part. The one solution giving the most benefit will be chosen as the solution for the next part.

8.  *Dynamic Programming Algorithm*: This algorithm uses the concept of using the already found solution to avoid repetitive calculation of the same part of the problem. It divides the problem into smaller overlapping sub-problems and solves them.
is to calculate the  the solution of the sub problem and accessing them later instead of recomputing them. this wil gives us a linear computation time complexity while that sub problem result computation on each time will gives us a exponential time complexity.

9.  *Randomized Algorithm*: In the randomized algorithm we use a random number so it gives immediate benefit. The random number helps in deciding the expected outcome.
An algorithm that uses random numbers to decide what to do next anywhere in its logic is called Randomized Algorithm.
For example, in Randomized Quick Sort, we use a random number to pick the next pivot (or we randomly shuffle the array). Typically, this randomness is used to reduce time complexity or space complexity in other standard algorithms.

these were the common types of the algorithms.


## BFS
The Breadth First Search (BFS) algorithm is used to search a graph data structure for a node that meets a set of criteria. It starts at the root of the graph and visits all nodes at the current depth level before moving on to the nodes at the next depth level.

## DFS
Depth First Traversal (or DFS) for a graph is similar to Depth First Traversal of a tree. The only catch here is, that, unlike trees, graphs may contain cycles (a node may be visited twice). To avoid processing a node more than once, use a boolean visited array. A graph can have more than one DFS traversal.


## traversing in trees
A Tree Data Structure can be traversed in following ways:

- Depth First Search or DFS
- - Inorder Traversal
- - Preorder Traversal
- - Postorder Traversal
- Level Order Traversal or Breadth First Search or BFS
- - Boundary Traversal
- - Diagonal Traversal


> Algorithm Inorder(tree):
Traverse the left subtree, i.e., call Inorder(left->subtree)
Visit the root.
Traverse the right subtree, i.e., call Inorder(right->subtree)



>  Algorithm Preorder(tree):
Visit the root.
Traverse the left subtree, i.e., call Preorder(left->subtree)
Traverse the right subtree, i.e., call Preorder(right->subtree)


> Algorithm Postorder(tree):
Traverse the left subtree, i.e., call Postorder(left->subtree)
Traverse the right subtree, i.e., call Postorder(right->subtree)
Visit the root

> level order traversal:
For each node, first, the node is visited and then it’s child nodes are put in a FIFO queue. Then again the first node is popped out and then it’s child nodes are put in a FIFO queue and repeat until queue becomes empty.

> The Boundary Traversal of a Tree includes:
left boundary (nodes on left excluding leaf nodes)
leaves (consist of only the leaf nodes)
right boundary (nodes on right excluding leaf nodes)

> Diagonal Traversal
In the Diagonal Traversal of a Tree, all the nodes in a single diagonal will be printed one by one.

## bitwise algorithm:
The Bitwise Algorithms is used to perform operations at the bit-level or to manipulate bits in different ways. The bitwise operations are found to be much faster and are sometimes used to improve the efficiency of a program.

For example: To check if a number is even or odd. This can be easily done by using Bitwise-AND(&) operator. If the last bit of the operator is set than it is ODD otherwise it is EVEN. Therefore, if num & 1 not equals to zero than num is ODD otherwise it is EVEN.


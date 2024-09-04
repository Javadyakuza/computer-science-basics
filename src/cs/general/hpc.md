# High-Performance Computing (HPC)

## Executive Summary:

High-Performance Computing (HPC) utilizes parallel processing to solve complex problems faster and more efficiently. It supports research across various fields, including chemistry, biology, and engineering and etc. HPC systems are available from major cloud providers like Amazon, Google, and Microsoft, but on-site installations may be necessary for sensitive or large data sets. While prone to errors, HPC plays a crucial role in drug discovery , aerospace and astronomy industry, aerology and other research areas. This document provides a a basic and general overview of HPC, including its building blocks, VM types, storage solutions, networking, costs, and key terminology.

## Introduction:

Historically, researchers solved problems by dividing them among individuals. HPC takes a similar approach, combining the processing power of multiple computers into a single, virtual machine. This significantly increases processing speed and efficiency, paving the way for groundbreaking research in various fields. like the historical example, its like putting the responsibility of a task on thousands of nodes.

### Comparison with Low-Performance Computing (LPC):

Unlike LPC which divides a computer's resources for multiple users, HPC combines multiple machines into one supercomputer. This allows HPC to tackle problems beyond the capabilities of individual computers.

## Benefits and Applications:

HPC accelerates research and development across diverse industries. It plays a crucial role in:

* **Chemistry:** : e.g. Simulating molecule interactions and designing new materials.
* **Biology:**  : e.g. Analyzing genetic data and developing new drugs.
* **Engineering:** : e.g. Designing complex structures and simulating real-world phenomena.

## Cloud-Based vs. On-site HPC:

Cloud providers offer readily available HPC resources, but sensitive data or large datasets may necessitate on-site installations. These offer greater control and security but require significant upfront investments.

## Risks and Challenges:

HPC systems are complex and prone to errors. These errors can affect the entire system and require careful monitoring and mitigation strategies.


## Building Blocks of HPC:

* **Compute:** Nodes consisting of multiple cores and CPUs provide the processing power.
* **Storage:** High-performance storage solutions handle massive data sets.
* **Networking:** High-speed networks connect nodes for efficient data exchange.

## VM Types for Cloud HPC:

* **General Purpose:** Suitable for applications requiring large memory sizes.
* **Compute Optimized:** Recommended for HPC applications that are requiring the most amount of performance.
* **Memory Optimized:** Ideal for memory-intensive tasks.
* **Accelerator Optimized:** Utilize GPUs for accelerated processing.
* **Custom Machine Types:** Allow users to specify specific resource requirements.
* **Preemptible VMs:** Cost-effective for batch jobs and fault-tolerant workloads.

## Storage Solutions:

* **Cloud Storage:** Scalable storage for massive data sets.
* **Persistent Disk:** High-performance and durable storage for VMs.
* **File Store:** Simplifies file sharing across compute instances.

### Cost:

* Initial investment: Approximately £2.5 million to £3 million.
* Ongoing costs: Thousands of dollars per month, primarily for electricity next to other cost such as licensing, cooling among others.

### Key Terminology:

* **Cluster:** A group of interconnected nodes working together.
* **Node:** A single computer within the HPC system.
* **Core:** A processing unit within a node's CPU.

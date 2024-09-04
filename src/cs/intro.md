# Introduction

This concise documentation aims to provide a foundational understanding of computer science. Although the field of computer science encompasses a vast range of topics, this documentation will focus on presenting the core concepts in a compact format.

## Motivation

I am Mohammad Javad Safary, an experienced blockchain developer with over 3 years of expertise in developing blockchain-based solutions for various purposes. As someone who did not have the opportunity to attend college, I understand the challenges of learning computer science without a formal education and the confusion it can cause.

I have compiled this documentation specifically for individuals like myself, in order to reduce confusion and help them focus on their specific goals. While this documentation emphasizes distributed systems, which are closely related to the blockchain domain, it also provides sufficient and efficient coverage of data structures and algorithms.

#### Purpose

This documentation serves as a starting point, guiding you on what to learn and where to begin. It is important to note that it does not encompass the entirety of computer science concepts, but rather provides a glimpse into this vast field.

## Table of Contents

### General Concepts
<div class="sections-container">
  <div class="bridge-section-row">
    <a href="/src/cs/general/os.html">
      <span class="bridge-section">Operating Systems</span>
    </a>
        <a href="/src/cs/general/compilers.html">
      <span class="bridge-section">Compilers and Interpreters</span>
    </a>

  </div>
  <div class="bridge-section-row">
      <a href="/src/cs/general/memories.html">
      <span class="bridge-section">Memory</span>
    </a>
    <a href="/src/cs/general/mem_mgmt.html">
      <span class="bridge-section">Memory Management</span>
    </a>
  </div>
    <div class="bridge-section-row">
    <a href="/src/cs/general/database.html">
      <span class="bridge-section">Database Systems</span>
    </a>
    <a href="/src/cs/general/hpc.html">
      <span class="bridge-section">High Performance Compting</span>
    </a>
  </div>
      <div class="bridge-section-row">
    <a href="/src/cs/general/sys_prog.html">
      <span class="bridge-section">System Programming</span>
    </a>
  </div>
</div>

### Distributed Systems
<div class="sections-container">
  <div class="bridge-section-row">
    <a href="/src/cs/dist_sys/systems.html">
      <span class="bridge-section">Distributed Systems</span>
    </a>
    <a href="/src/cs/dist_sys/computing.html">
      <span class="bridge-section">Distributed Computing</span>
    </a>
  </div>
  <div class="bridge-section-row">
    <a href="/src/cs/dist_sys/networking.html">
      <span class="bridge-section">Distributed Networks</span>
    </a>
  </div>
</div>

### Data Structures and Algorithms
<div class="sections-container">
  <div class="bridge-section-row">
    <a href="/src/cs/dsa/ds.html">
      <span class="bridge-section">Data Structures</span>
    </a>
    <a href="/src/cs/dsa/algorithms.html">
      <span class="bridge-section">Algorithms</span>
    </a>
  </div>
</div>


### Design Patterns
<div class="sections-container">
  <div class="bridge-section-row">
    <a href="/src/cs/dp/intro.html">
      <span class="bridge-section">Design Patterns</span>
    </a>
  </div>
</div>

<style>


.bridge-section-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin : 10px;
}

.sections-container a{
    flex : 1;
    text-decoration: none;
}
.bridge-section {
  background-color: var(--vp-c-bg-mute);
  transition: background-color 0.1s;
  width : 98%;
  display: flex;
  padding: 1rem 0 1rem 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  margin-bottom: 0.5rem;
  cursor: pointer;;

}

</style>

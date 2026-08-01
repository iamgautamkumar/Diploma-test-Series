/* =====================================================
   QUIZ TEST PORTAL — MAIN JAVASCRIPT
   Vanilla JS — No frameworks, no libraries
===================================================== */

/* =====================================================
   1. SAMPLE QUESTION DATABASE
   -----------------------------------------------------
   Each subject has: id, name, icon, description,
   difficulty, and a questions[] array.
   Each question = { question, options[4], answerIndex }
   To expand to 50-100 questions later, simply push more
   objects into the relevant subject's "questions" array.
===================================================== */
const QUIZ_DATA = [
  {
    id: "dem",
    name: "Digital Electronics & Microprocessor",
    icon: "fa-solid fa-microchip",
    description: "Logic gates, number systems, and microprocessor architecture.",
    difficulty: "Medium",
    questions: [
      {
        question: "Which logic gate produces a HIGH output only when all inputs are HIGH?",
        options: ["OR Gate", "AND Gate", "NOR Gate", "XOR Gate"],
        answerIndex: 1
      },
      {
        question: "The 8085 microprocessor is a ____-bit processor.",
        options: ["4-bit", "8-bit", "16-bit", "32-bit"],
        answerIndex: 1
      },
      {
        question: "Which number system uses only digits 0 and 1?",
        options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
        answerIndex: 2
      }
    ]
  },
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    icon: "fa-solid fa-diagram-project",
    description: "Arrays, trees, graphs, sorting and algorithmic complexity.",
    difficulty: "Hard",
    questions: [
      const quizData = [
  {
    question: "Which of the following best defines an algorithm?",
    options: [
      "A programming language",
      "A finite set of well-defined instructions to solve a problem",
      "A type of data structure",
      "A compiler optimization technique"
    ],
    answer: 1
  },
  {
    question: "Data types defined by the system, such as int, float, and char, are called:",
    options: [
      "User defined data types",
      "Abstract data types",
      "System defined data types",
      "Composite data types"
    ],
    answer: 2
  },
  {
    question: "Which of the following is an example of a user-defined data type?",
    options: [
      "int",
      "float",
      "char",
      "Structure"
    ],
    answer: 3
  },
  {
    question: "In a linear data structure, elements are arranged:",
    options: [
      "In a hierarchical manner",
      "In a sequential manner",
      "Randomly",
      "In a circular manner only"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a non-linear data structure?",
    options: [
      "Array",
      "Stack",
      "Tree",
      "Queue"
    ],
    answer: 2
  },
  {
    question: "An Abstract Data Type (ADT) is defined by:",
    options: [
      "Its internal memory layout",
      "The compiler used to implement it",
      "The operations that can be performed on it, independent of implementation",
      "The programming language syntax"
    ],
    answer: 2
  },
  {
    question: "Which analysis of an algorithm considers the maximum time taken for any input of size n?",
    options: [
      "Average case analysis",
      "Best case analysis",
      "Worst case analysis",
      "Amortized analysis"
    ],
    answer: 2
  },
  {
    question: "Best case analysis of an algorithm refers to:",
    options: [
      "The minimum time taken for any input of size n",
      "The maximum possible running time",
      "The average time over all inputs",
      "The time taken on the largest possible input"
    ],
    answer: 0
  },
  {
    question: "Average case analysis of an algorithm is computed based on:",
    options: [
      "Only the smallest input",
      "Only the largest input",
      "The expected running time over all possible inputs",
      "The worst possible input only"
    ],
    answer: 2
  },
  {
    question: "Space complexity of an algorithm refers to:",
    options: [
      "The time taken to execute the algorithm",
      "The amount of memory required by the algorithm to run to completion",
      "The number of lines of code",
      "The number of variables declared"
    ],
    answer: 1
  },
  {
    question: "Which asymptotic notation represents the upper bound of an algorithm's running time?",
    options: [
      "Big-O notation",
      "Omega notation",
      "Theta notation",
      "Little-o notation"
    ],
    answer: 0
  },
  {
    question: "Omega (Ω) notation is used to represent:",
    options: [
      "The upper bound of an algorithm",
      "The lower bound of an algorithm",
      "The average bound of an algorithm",
      "The exact running time only"
    ],
    answer: 1
  },
  {
    question: "Theta (Θ) notation represents:",
    options: [
      "Only the best case",
      "Only the worst case",
      "A tight bound, i.e., both upper and lower bounds",
      "Only the space complexity"
    ],
    answer: 2
  },
  {
    question: "The time complexity of a recursive algorithm is typically analyzed using:",
    options: [
      "Big-O notation only",
      "The Master theorem",
      "Space complexity formula",
      "Linear regression"
    ],
    answer: 1
  },
  {
    question: "Which of the following best describes recursion?",
    options: [
      "A loop that never terminates",
      "A function that calls itself to solve smaller instances of the same problem",
      "A method to allocate memory dynamically",
      "A sorting technique"
    ],
    answer: 1
  },
  {
    question: "What is the time complexity of binary search in the worst case?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n^2)"
    ],
    answer: 1
  },
  {
    question: "What is the time complexity of linear search in the worst case?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    answer: 2
  },
  {
    question: "A dynamic array differs from a static array because it can:",
    options: [
      "Only store integers",
      "Resize itself automatically when it becomes full",
      "Never be resized",
      "Only be used with linked lists"
    ],
    answer: 1
  },
  {
    question: "Accessing an element in an array using its index has a time complexity of:",
    options: [
      "O(1)",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    answer: 0
  },
  {
    question: "Inserting an element at the beginning of an array requires:",
    options: [
      "No shifting of elements",
      "Shifting all existing elements one position to the right",
      "Deleting the array first",
      "Only updating the index pointer"
    ],
    answer: 1
  },
  {
    question: "A multi-dimensional array is best described as:",
    options: [
      "An array that can only hold one data type",
      "An array of arrays, used to represent data in more than one dimension",
      "A linked list variant",
      "A type of stack"
    ],
    answer: 1
  },
  {
    question: "Which operation on a string checks whether one string is contained within another?",
    options: [
      "Concatenation",
      "Membership/Substring search",
      "Traversal",
      "Slicing"
    ],
    answer: 1
  },
  {
    question: "A linked list is a data structure where each node contains:",
    options: [
      "Only data",
      "Data and a pointer/reference to the next node",
      "Only a pointer",
      "A fixed-size array"
    ],
    answer: 1
  },
  {
    question: "In a singly linked list, traversal can be done:",
    options: [
      "Only in the reverse direction",
      "Only in the forward direction",
      "In both directions equally easily",
      "Not at all"
    ],
    answer: 1
  },
  {
    question: "In a circular linked list, the last node points to:",
    options: [
      "NULL",
      "The first node",
      "A random node",
      "Itself"
    ],
    answer: 1
  },
  {
    question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
    options: [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n^2)"
    ],
    answer: 1
  },
  {
    question: "What is the time complexity of searching for an element in an unsorted singly linked list?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    answer: 2
  },
  {
    question: "Compared to arrays, linked lists have the advantage of:",
    options: [
      "Faster random access to elements",
      "Dynamic memory allocation and easier insertion/deletion",
      "Requiring less memory per node",
      "Better cache performance"
    ],
    answer: 1
  },
  {
    question: "A key disadvantage of a linked list compared to an array is:",
    options: [
      "It cannot store data of the same type",
      "It does not support traversal",
      "It does not allow random (direct index-based) access to elements",
      "It cannot grow dynamically"
    ],
    answer: 2
  },
  {
    question: "A stack follows which order of operations?",
    options: [
      "First In First Out (FIFO)",
      "Last In First Out (LIFO)",
      "Random access order",
      "Priority based order"
    ],
    answer: 1
  },
  {
    question: "Which operation adds an element to the top of a stack?",
    options: [
      "Dequeue",
      "Push",
      "Pop",
      "Peek"
    ],
    answer: 1
  },
  {
    question: "Which operation removes the top element from a stack?",
    options: [
      "Enqueue",
      "Push",
      "Pop",
      "Insert"
    ],
    answer: 2
  },
  {
    question: "Attempting to push an element onto a completely filled stack results in:",
    options: [
      "Stack underflow",
      "Stack overflow",
      "Segmentation success",
      "Automatic resizing without error"
    ],
    answer: 1
  },
  {
    question: "Attempting to pop an element from an empty stack results in:",
    options: [
      "Stack overflow",
      "Stack underflow",
      "A default value being returned",
      "No effect at all"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a real-world application of a stack?",
    options: [
      "CPU scheduling",
      "Function call management (call stack) and undo operations",
      "Printer job scheduling",
      "Breadth-first search"
    ],
    answer: 1
  },
  {
    question: "Stacks are commonly used to evaluate which type of expressions?",
    options: [
      "Only decimal numbers",
      "Postfix and infix expressions",
      "Only floating-point numbers",
      "Boolean truth tables only"
    ],
    answer: 1
  },
  {
    question: "In postfix expression evaluation using a stack, when an operator is encountered, the algorithm:",
    options: [
      "Pushes the operator directly",
      "Pops two operands, applies the operator, and pushes the result",
      "Ignores the operator",
      "Restarts the evaluation"
    ],
    answer: 1
  },
  {
    question: "Checking for balanced parentheses/symbols in an expression is typically implemented using:",
    options: [
      "A queue",
      "A stack",
      "A linked list only",
      "A hash table only"
    ],
    answer: 1
  },
  {
    question: "A queue follows which order of operations?",
    options: [
      "Last In First Out (LIFO)",
      "First In First Out (FIFO)",
      "Random order",
      "Reverse priority order"
    ],
    answer: 1
  },
  {
    question: "Which operation inserts an element into a queue?",
    options: [
      "Push",
      "Pop",
      "Enqueue",
      "Peek"
    ],
    answer: 2
  },
  {
    question: "Which operation removes an element from a queue?",
    options: [
      "Enqueue",
      "Dequeue",
      "Push",
      "Insert"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a real-world application of a queue?",
    options: [
      "Undo operation in text editors",
      "Function call recursion",
      "CPU task scheduling and printer job management",
      "Expression evaluation"
    ],
    answer: 2
  },
  {
    question: "A stack can be implemented using which of the following?",
    options: [
      "Only arrays",
      "Only linked lists",
      "Simple array, dynamic array, or linked list",
      "Only hash tables"
    ],
    answer: 2
  },
  {
    question: "In array implementation of a stack, the 'top' variable is used to:",
    options: [
      "Store the size of the array",
      "Keep track of the index of the topmost element",
      "Store the bottom element",
      "Count the number of pop operations"
    ],
    answer: 1
  },
  {
    question: "Which condition indicates that a queue implemented using a fixed-size array is full?",
    options: [
      "front equals rear only",
      "rear reaches the maximum index (in a simple, non-circular queue)",
      "front is greater than rear always",
      "The queue is never full"
    ],
    answer: 1
  },
  {
    question: "A key advantage of implementing a stack using a linked list instead of an array is:",
    options: [
      "Constant time random access",
      "No need to predefine a fixed size, allowing dynamic growth",
      "Better cache locality",
      "Simpler code with no pointers"
    ],
    answer: 1
  },
  {
    question: "Which asymptotic notation would best describe the statement 'the algorithm takes at least this much time'?",
    options: [
      "Big-O",
      "Theta",
      "Omega",
      "None of these"
    ],
    answer: 2
  },
  {
    question: "If an algorithm's time complexity is expressed as T(n) = 2T(n/2) + n, which technique is most suitable to solve it?",
    options: [
      "Direct substitution only",
      "Master theorem",
      "Linear regression",
      "Graph traversal"
    ],
    answer: 1
  },
  {
    question: "Which of the following correctly orders growth rates from smallest to largest?",
    options: [
      "O(n^2) < O(log n) < O(n)",
      "O(log n) < O(n) < O(n^2)",
      "O(n) < O(log n) < O(n^2)",
      "O(n^2) < O(n) < O(log n)"
    ],
    answer: 1
  },
  {
    question: "The space complexity of an in-place algorithm (using no extra structures dependent on input size) is generally:",
    options: [
      "O(n)",
      "O(n^2)",
      "O(1)",
      "O(log n)"
    ],
    answer: 2
  },
  {
    question: "Traversing a linked list means:",
    options: [
      "Deleting all nodes",
      "Visiting each node of the list sequentially, typically from head to end",
      "Sorting the nodes",
      "Reversing the list"
    ],
    answer: 1
  },
  {
    question: "Deleting a node from the middle of a singly linked list requires:",
    options: [
      "Updating the next pointer of the previous node to skip the deleted node",
      "Shifting all elements after it, like in an array",
      "Rebuilding the entire list",
      "No pointer changes at all"
    ],
    answer: 0
  },
  {
    question: "Which statement about arrays is TRUE?",
    options: [
      "Arrays can dynamically change size without any reallocation in all languages",
      "Arrays store elements in contiguous memory locations",
      "Arrays cannot be multi-dimensional",
      "Arrays always have O(n) access time"
    ],
    answer: 1
  },
  {
    question: "The 'peek' or 'top' operation in a stack:",
    options: [
      "Removes the top element",
      "Adds a new element to the top",
      "Returns the top element without removing it",
      "Empties the entire stack"
    ],
    answer: 2
  },
  {
    question: "Which of the following is TRUE regarding infix to postfix conversion using a stack?",
    options: [
      "Operators are stored based on their precedence using a stack",
      "It requires two queues instead of a stack",
      "It cannot handle parentheses",
      "It only works for single-digit numbers"
    ],
    answer: 0
  },
  {
    question: "Which of the following data structures would be most efficient for implementing an 'undo' feature in software?",
    options: [
      "Queue",
      "Stack",
      "Array only",
      "Tree"
    ],
    answer: 1
  },
  {
    question: "Which of the following data structures would be most suitable for implementing a print job scheduler that processes jobs in the order they arrive?",
    options: [
      "Stack",
      "Queue",
      "Binary tree",
      "Graph"
    ],
    answer: 1
  },
  {
    question: "A doubly linked list differs from a singly linked list because each node:",
    options: [
      "Has no pointer at all",
      "Has pointers to both the next and previous nodes",
      "Can only store numeric data",
      "Cannot be traversed"
    ],
    answer: 1
  },
  {
    question: "Time complexity of accessing the first element in a singly linked list (the head) is:",
    options: [
      "O(n)",
      "O(1)",
      "O(log n)",
      "O(n^2)"
    ],
    answer: 1
  },
  {
    question: "In worst-case analysis, we generally consider:",
    options: [
      "The input that makes the algorithm run fastest",
      "The input that makes the algorithm run slowest",
      "Only randomly chosen inputs",
      "Inputs of size zero only"
    ],
    answer: 1
  }
    ]
  },
  {
    id: "os",
    name: "Operating System",
    icon: "fa-solid fa-server",
    description: "Process management, memory, scheduling and deadlocks.",
    difficulty: "Medium",
    questions: [
      {
        question: "Which scheduling algorithm can cause starvation?",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF (non-preemptive is fine)"],
        answerIndex: 2
      },
      {
        question: "What is a deadlock?",
        options: [
          "A process running faster than expected",
          "Two or more processes waiting indefinitely for each other",
          "A process using too much memory",
          "A CPU running two processes together"
        ],
        answerIndex: 1
      },
      {
        question: "Which memory management technique divides memory into fixed-size blocks?",
        options: ["Paging", "Segmentation", "Compaction", "Swapping"],
        answerIndex: 0
      }
    ]
  },
  {
    id: "python",
    name: "Python Programming",
    icon: "fa-brands fa-python",
    description: "Core syntax, data types, functions and OOP in Python.",
    difficulty: "Easy",
    questions: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answerIndex: 1
      },
      {
        question: "What is the output of type([]) in Python?",
        options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
        answerIndex: 0
      },
      {
        question: "Which of these is used for comments in Python?",
        options: ["//", "<!-- -->", "#", "/* */"],
        answerIndex: 2
      }
    ]
  },
  {
    id: "dmath",
    name: "Discrete Mathematics",
    icon: "fa-solid fa-square-root-variable",
    description: "Set theory, logic, relations and combinatorics.",
    difficulty: "Medium",
    questions: [
      {
        question: "How many subsets does a set with 3 elements have?",
        options: ["6", "8", "9", "3"],
        answerIndex: 1
      },
      {
        question: "A relation that is reflexive, symmetric and transitive is called:",
        options: ["Partial Order", "Equivalence Relation", "Function", "Bijection"],
        answerIndex: 1
      },
      {
        question: "In propositional logic, 'p AND NOT p' is always:",
        options: ["True", "False", "Undefined", "Depends on p"],
        answerIndex: 1
      }
    ]
  },
  {
    id: "cprog",
    name: "C Programming",
    icon: "fa-solid fa-code",
    description: "Pointers, loops, memory management and functions in C.",
    difficulty: "Medium",
    questions: [
      {
        question: "Which symbol is used to declare a pointer in C?",
        options: ["&", "*", "#", "%"],
        answerIndex: 1
      },
      {
        question: "Which header file is required for printf() in C?",
        options: ["<string.h>", "<math.h>", "<stdio.h>", "<stdlib.h>"],
        answerIndex: 2
      },
      {
        question: "What is the size of an int data type on most 32-bit systems?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        answerIndex: 2
      }
    ]
  },
  {
    id: "webdev",
    name: "HTML, CSS & JavaScript",
    icon: "fa-brands fa-html5",
    description: "Web fundamentals — structure, styling and interactivity.",
    difficulty: "Easy",
    questions: [
      {
        question: "Which tag is used to link an external CSS file in HTML?",
        options: ["<style>", "<script>", "<link>", "<css>"],
        answerIndex: 2
      },
      {
        question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        answerIndex: 2
      },
      {
        question: "Which JavaScript method is used to select an element by ID?",
        options: [
          "document.querySelectorId()",
          "document.getElementById()",
          "document.getElement()",
          "document.selectId()"
        ],
        answerIndex: 1
      }
    ]
  },
  {
    id: "fit",
    name: "Fundamentals of IT Systems",
    icon: "fa-solid fa-computer",
    description: "Basic computer architecture, hardware and IT concepts.",
    difficulty: "Easy",
    questions: [
      {
        question: "Which of the following is an input device?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        answerIndex: 2
      },
      {
        question: "RAM stands for:",
        options: [
          "Random Access Memory",
          "Read Access Memory",
          "Rapid Access Module",
          "Random Allocation Memory"
        ],
        answerIndex: 0
      },
      {
        question: "Which of these is a secondary storage device?",
        options: ["CPU Cache", "RAM", "Hard Disk", "Register"],
        answerIndex: 2
      }
    ]
  },
  {
    id: "bmath",
    name: "Basic Engineering Mathematics",
    icon: "fa-solid fa-calculator",
    description: "Calculus, algebra and matrix fundamentals for engineers.",
    difficulty: "Medium",
    questions: [
      {
        question: "What is the derivative of x² with respect to x?",
        options: ["x", "2x", "x²", "2"],
        answerIndex: 1
      },
      {
        question: "The determinant of a 2x2 identity matrix is:",
        options: ["0", "1", "2", "-1"],
        answerIndex: 1
      },
      {
        question: "What is the integral of a constant 'k' with respect to x?",
        options: ["k", "kx + C", "x + C", "0"],
        answerIndex: 1
      }
    ]
  },
  {
    id: "phyb",
    name: "Applied Physics - B",
    icon: "fa-solid fa-atom",
    description: "Mechanics, waves, optics and modern physics concepts.",
    difficulty: "Medium",
    questions: [
      {
        question: "The SI unit of force is:",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answerIndex: 1
      },
      {
        question: "Light travels fastest in which medium?",
        options: ["Water", "Glass", "Vacuum", "Air"],
        answerIndex: 2
      },
      {
        question: "Which law states that energy can neither be created nor destroyed?",
        options: [
          "Newton's First Law",
          "Law of Conservation of Energy",
          "Ohm's Law",
          "Law of Gravitation"
        ],
        answerIndex: 1
      }
    ]
  },
  {
    id: "eee",
    name: "Fundamentals of Electrical Engineering & Electronics",
    icon: "fa-solid fa-bolt",
    description: "Circuits, Ohm's law, semiconductors and basic electronics.",
    difficulty: "Medium",
    questions: [
      {
        question: "Ohm's Law is expressed as:",
        options: ["V = IR", "V = I/R", "V = R/I", "I = VR"],
        answerIndex: 0
      },
      {
        question: "Which component allows current to flow in only one direction?",
        options: ["Resistor", "Capacitor", "Diode", "Inductor"],
        answerIndex: 2
      },
      {
        question: "The SI unit of electrical resistance is:",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        answerIndex: 2
      }
    ]
  }
];

/* =====================================================
   2. GLOBAL STATE
===================================================== */
const state = {
  currentSubject: null,     // subject object currently being tested
  currentQuestionIndex: 0,  // index of current question
  selectedAnswers: [],      // stores selected option index per question (or null)
  score: 0,                 // running score (10 points per correct answer)
  studentName: "",          // name entered for certificate
  lastResult: null          // stores result data for certificate page
};

const POINTS_PER_CORRECT = 10;

/* =====================================================
   3. DOM READY — INIT APP
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initLoadingScreen();
  renderSubjectCards();
  initScrollReveal();
  initCounters();
  initNavbarScroll();
  initMobileNav();
  initRippleEffect();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

/* =====================================================
   4. LOADING SCREEN
===================================================== */
function initLoadingScreen() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.getElementById("loading-screen");
      loader.classList.add("hidden");
    }, 1600);
  });

  // Fallback in case 'load' already fired before listener attached
  setTimeout(() => {
    const loader = document.getElementById("loading-screen");
    if (loader) loader.classList.add("hidden");
  }, 3500);
}

/* =====================================================
   5. NAVBAR SCROLL EFFECT
===================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

/* =====================================================
   6. MOBILE NAV TOGGLE
===================================================== */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

/* =====================================================
   7. SCROLL REVEAL ANIMATION
===================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

  // Re-observe newly added elements (e.g. subject cards) shortly after render
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.active)").forEach(el => observer.observe(el));
  }, 300);
}

/* =====================================================
   8. ANIMATED COUNTERS
===================================================== */
function initCounters() {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target"), 10);
  const duration = 1800;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(update);
}

/* =====================================================
   9. BUTTON RIPPLE EFFECT
===================================================== */
function initRippleEffect() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".ripple");
    if (!btn) return;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-circle");

    const existingRipple = btn.querySelector(".ripple-circle");
    if (existingRipple) existingRipple.remove();

    btn.style.position = btn.style.position || "relative";
    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 650);
  });
}

/* =====================================================
   10. RENDER SUBJECT CARDS (HOME PAGE)
===================================================== */
function renderSubjectCards() {
  const grid = document.getElementById("subjects-grid");
  grid.innerHTML = "";

  QUIZ_DATA.forEach((subject, index) => {
    const difficultyClass = `difficulty-${subject.difficulty.toLowerCase()}`;

    const card = document.createElement("div");
    card.className = "subject-card";
    card.style.animationDelay = `${index * 0.08}s`;

    card.innerHTML = `
      <div class="subject-icon"><i class="${subject.icon}"></i></div>
      <h3>${subject.name}</h3>
      <p class="subject-desc">${subject.description}</p>
      <div class="subject-meta">
        <span class="meta-chip"><i class="fa-solid fa-list-ol"></i> ${subject.questions.length} Questions</span>
        <span class="meta-chip ${difficultyClass}"><i class="fa-solid fa-gauge"></i> ${subject.difficulty}</span>
      </div>
      <button class="subject-start-btn ripple" onclick="startQuiz('${subject.id}')">
        <i class="fa-solid fa-play"></i> Start Test
      </button>
    `;

    grid.appendChild(card);
  });
}

/* =====================================================
   11. NAVIGATION HELPERS
===================================================== */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active-page"));
  const target = document.getElementById(pageId);
  target.classList.add("active-page");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  showPage("home-page");
}

function scrollToSubjects() {
  showPage("home-page");
  setTimeout(() => {
    document.getElementById("subjects").scrollIntoView({ behavior: "smooth" });
  }, 100);
}

function scrollToAbout() {
  showPage("home-page");
  setTimeout(() => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }, 100);
}

/* =====================================================
   12. START QUIZ / LOAD SUBJECT / LOAD QUESTIONS
===================================================== */
function startQuiz(subjectId) {
  const subject = QUIZ_DATA.find(s => s.id === subjectId);
  if (!subject) {
    showToast("Subject not found.", "error");
    return;
  }

  // Reset state for the new quiz
  state.currentSubject = subject;
  state.currentQuestionIndex = 0;
  state.selectedAnswers = new Array(subject.questions.length).fill(null);
  state.score = 0;

  document.getElementById("quiz-subject-title").textContent = subject.name;
  document.getElementById("quiz-difficulty-badge").textContent = subject.difficulty;
  document.getElementById("live-score").textContent = "0";

  showPage("quiz-page");
  loadQuestion();
}

function loadQuestion() {
  const subject = state.currentSubject;
  const index = state.currentQuestionIndex;
  const question = subject.questions[index];
  const total = subject.questions.length;

  // Update badges & counters
  document.getElementById("question-number-badge").textContent = `Q${index + 1}`;
  document.getElementById("question-counter").textContent = `Question ${index + 1} of ${total}`;

  const percent = Math.round(((index + 1) / total) * 100);
  document.getElementById("progress-percent").textContent = `${percent}%`;
  document.getElementById("progress-bar-fill").style.width = `${percent}%`;

  // Update question text
  document.getElementById("question-text").textContent = question.question;

  // Render options
  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";

  const letters = ["A", "B", "C", "D"];
  const selected = state.selectedAnswers[index];

  question.options.forEach((optionText, optIndex) => {
    const optionEl = document.createElement("div");
    optionEl.className = "option-item";

    if (selected !== null) {
      optionEl.classList.add("disabled");
      if (optIndex === question.answerIndex) {
        optionEl.classList.add("correct");
      } else if (optIndex === selected && selected !== question.answerIndex) {
        optionEl.classList.add("wrong");
      }
      if (optIndex === selected) optionEl.classList.add("selected");
    }

    optionEl.innerHTML = `
      <span class="option-letter">${letters[optIndex]}</span>
      <span>${optionText}</span>
    `;

    optionEl.addEventListener("click", () => selectOption(optIndex));
    optionsList.appendChild(optionEl);
  });

  // Quiz card re-entrance animation
  const quizCard = document.getElementById("quiz-card");
  quizCard.style.animation = "none";
  void quizCard.offsetWidth; // force reflow to restart animation
  quizCard.style.animation = "quizCardIn 0.5s ease";

  // Prev / Next button states
  document.getElementById("prev-btn").disabled = index === 0;

  const nextBtn = document.getElementById("next-btn");
  if (index === total - 1) {
    nextBtn.innerHTML = `Finish <i class="fa-solid fa-flag-checkered"></i>`;
  } else {
    nextBtn.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;
  }
}

/* =====================================================
   13. SELECT OPTION / AUTO SCORE
===================================================== */
function selectOption(optIndex) {
  const index = state.currentQuestionIndex;

  // Prevent re-answering the same question
  if (state.selectedAnswers[index] !== null) return;

  const question = state.currentSubject.questions[index];
  state.selectedAnswers[index] = optIndex;

  if (optIndex === question.answerIndex) {
    state.score += POINTS_PER_CORRECT;
    showToast("Correct Answer! +10 points", "success");
  } else {
    showToast("Wrong Answer!", "error");
  }

  document.getElementById("live-score").textContent = state.score;
  loadQuestion(); // re-render to show correct/wrong highlighting
}

/* =====================================================
   14. NEXT / PREVIOUS NAVIGATION
===================================================== */
function nextQuestion() {
  const total = state.currentSubject.questions.length;

  // Require an answer before proceeding
  if (state.selectedAnswers[state.currentQuestionIndex] === null) {
    showToast("Please select an option to continue.", "error");
    return;
  }

  if (state.currentQuestionIndex < total - 1) {
    state.currentQuestionIndex++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function prevQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex--;
    loadQuestion();
  }
}

/* =====================================================
   15. FINISH QUIZ / CALCULATE RESULT
===================================================== */
function finishQuiz() {
  const subject = state.currentSubject;
  const total = subject.questions.length;

  let correct = 0;
  state.selectedAnswers.forEach((answer, i) => {
    if (answer === subject.questions[i].answerIndex) correct++;
  });
  const wrong = total - correct;
  const percentage = Math.round((correct / total) * 100);
  const rank = getRank(percentage);

  state.lastResult = {
    subjectName: subject.name,
    score: state.score,
    correct,
    wrong,
    total,
    percentage,
    rank
  };

  renderResultPage();
  showPage("result-page");
}

/* =====================================================
   16. RANK SYSTEM
===================================================== */
function getRank(percentage) {
  if (percentage >= 90) return "S+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  return "D";
}

function getPerformanceMessage(percentage) {
  if (percentage >= 90) return "Outstanding! You have mastered this subject.";
  if (percentage >= 80) return "Excellent work! You're doing great.";
  if (percentage >= 70) return "Good job! A little more practice will help.";
  if (percentage >= 60) return "Not bad! Keep practicing to improve further.";
  return "Keep trying! Review the concepts and attempt again.";
}

/* =====================================================
   17. RENDER RESULT PAGE
===================================================== */
function renderResultPage() {
  const result = state.lastResult;

  document.getElementById("result-subject-name").textContent = result.subjectName;
  document.getElementById("result-rank-letter").textContent = result.rank;
  document.getElementById("result-performance-msg").textContent = getPerformanceMessage(result.percentage);
  document.getElementById("result-percentage").textContent = `${result.percentage}%`;
  document.getElementById("result-correct").textContent = result.correct;
  document.getElementById("result-wrong").textContent = result.wrong;
  document.getElementById("result-score").textContent = result.score;

  // Rank badge color variation
  const rankBadge = document.getElementById("result-rank-badge");
  const rankColors = {
    "S+": "linear-gradient(135deg, #FFD700, #FFB020)",
    "A": "linear-gradient(135deg, #2ED573, #00D9C0)",
    "B": "linear-gradient(135deg, #6C63FF, #00D9C0)",
    "C": "linear-gradient(135deg, #FFB020, #FF6B9D)",
    "D": "linear-gradient(135deg, #FF4757, #FF6B9D)"
  };
  rankBadge.style.background = rankColors[result.rank] || "var(--gradient-main)";

  generateConfetti();
}

/* =====================================================
   18. CONFETTI ANIMATION (RESULT SCREEN)
===================================================== */
function generateConfetti() {
  const container = document.getElementById("result-confetti");
  container.innerHTML = "";

  const colors = ["#6C63FF", "#00D9C0", "#FF6B9D", "#FFB020", "#2ED573"];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${2 + Math.random() * 2}s`;
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    container.appendChild(piece);
  }

  // Clean up confetti after animation completes
  setTimeout(() => { container.innerHTML = ""; }, 4500);
}

/* =====================================================
   19. RESTART / BACK TO HOME
===================================================== */
function restartQuiz() {
  if (!state.currentSubject) {
    goHome();
    return;
  }
  startQuiz(state.currentSubject.id);
}

/* =====================================================
   20. EXIT QUIZ CONFIRMATION MODAL
===================================================== */
function confirmExitQuiz() {
  document.getElementById("exit-modal-overlay").classList.add("active");
}

function closeExitModal() {
  document.getElementById("exit-modal-overlay").classList.remove("active");
}

function exitQuizConfirmed() {
  closeExitModal();
  goHome();
}

/* =====================================================
   21. CERTIFICATE GENERATION FLOW
===================================================== */
function viewCertificate() {
  if (state.studentName && state.studentName.trim() !== "") {
    buildCertificate();
    showPage("certificate-page");
  } else {
    openNameModal();
  }
}

function openNameModal() {
  document.getElementById("name-modal-overlay").classList.add("active");
  setTimeout(() => document.getElementById("student-name-input").focus(), 300);
}

function closeNameModal() {
  document.getElementById("name-modal-overlay").classList.remove("active");
}

function confirmStudentName() {
  const input = document.getElementById("student-name-input");
  const name = input.value.trim();

  if (name === "") {
    showToast("Please enter your name.", "error");
    return;
  }

  state.studentName = name;
  closeNameModal();
  buildCertificate();
  showPage("certificate-page");
}

function backToResult() {
  showPage("result-page");
}

/* =====================================================
   22. BUILD CERTIFICATE CONTENT
===================================================== */
function buildCertificate() {
  const result = state.lastResult;
  if (!result) return;

  document.getElementById("cert-student-name").textContent = state.studentName || "Student Name";
  document.getElementById("cert-subject-name").textContent = result.subjectName;
  document.getElementById("cert-score").textContent = result.score;
  document.getElementById("cert-percentage").textContent = `${result.percentage}%`;
  document.getElementById("cert-rank").textContent = result.rank;

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric"
  });
  document.getElementById("cert-date").textContent = dateStr;

  document.getElementById("cert-id").textContent = generateCertificateId();
}

function generateCertificateId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `QP-${timestamp}-${random}`;
}

/* =====================================================
   23. PRINT / DOWNLOAD CERTIFICATE
===================================================== */
function printCertificate() {
  window.print();
}

function downloadCertificate() {
  showToast("Preparing your certificate for download...", "success");
  // Uses the browser's native print-to-PDF capability.
  // In the print dialog, choose "Save as PDF" as the destination.
  setTimeout(() => window.print(), 400);
}

/* =====================================================
   24. TOAST NOTIFICATION SYSTEM
===================================================== */
let toastTimeout = null;

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const icon = type === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-circle-xmark";

  toast.innerHTML = `<i class="${icon}"></i> ${message}`;
  toast.className = `toast show ${type}`;

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

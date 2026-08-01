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
      {
        question: "What is the time complexity of Binary Search?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        answerIndex: 2
      },
      {
        question: "Which data structure uses LIFO (Last In First Out) order?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        answerIndex: 1
      },
      {
        question: "Which sorting algorithm has the best average case of O(n log n)?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        answerIndex: 2
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

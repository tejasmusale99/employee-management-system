const employees = [
  {
    id: "E001",
    firstName: "Rahul",
    lastName: "Deshmukh",
    email: "e@e.com",
    pass: "123",
    taskCount: {
      active: 1,
      newTask: 3,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Website Banner",
        description: "Change the homepage banner to new promo image.",
        date: "2025-07-14",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve menu overlap issue on mobile view.",
        date: "2025-07-10",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy Blog Section",
        description: "Push blog updates to production server.",
        date: "2025-07-08",
        category: "Deployment",
      },
    ],
  },
  {
    id: "E002",
    firstName: "Sneha",
    lastName: "Patil",
    email: "employee2@example.com",
    pass: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Login Page",
        description: "Design and build responsive login page.",
        date: "2025-07-15",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Optimize Images",
        description: "Compress large assets for faster load time.",
        date: "2025-07-12",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Integrate Payment Gateway",
        description: "Link Razorpay for online transactions.",
        date: "2025-07-10",
        category: "Integration",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Sidebar Component",
        description: "Create reusable sidebar component.",
        date: "2025-07-13",
        category: "Component",
      },
    ],
  },
  {
    id: "E003",
    firstName: "Amit",
    lastName: "Kulkarni",
    email: "employee3@example.com",
    pass: "123",
    taskCount: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Contact Form",
        description: "Create contact form with validation.",
        date: "2025-07-15",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Vite Project",
        description: "Initialize project with Vite and Tailwind CSS.",
        date: "2025-07-11",
        category: "Setup",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Create Notification System",
        description: "Add real-time notifications for task updates.",
        date: "2025-07-10",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Dark Mode Toggle",
        description: "Add toggle switch to switch themes.",
        date: "2025-07-13",
        category: "UI",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team Page Layout",
        description: "Design layout for team members section.",
        date: "2025-07-14",
        category: "Design",
      },
    ],
  },
  {
    id: "E004",
    firstName: "Priya",
    lastName: "Reddy",
    email: "employee4@example.com",
    pass: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create FAQ Accordion",
        description: "Add collapsible accordion for FAQs.",
        date: "2025-07-15",
        category: "Component",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Footer Position",
        description: "Ensure footer sticks to bottom on all pages.",
        date: "2025-07-12",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy Feedback Form",
        description: "Feedback form not working on mobile.",
        date: "2025-07-10",
        category: "Deployment",
      },
    ],
  },
  {
    id: "E005",
    firstName: "Karan",
    lastName: "Joshi",
    email: "employee5@example.com",
    pass: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement Lazy Load",
        description: "Lazy load all images on landing page.",
        date: "2025-07-15",
        category: "Performance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Remove Unused CSS",
        description: "Purge unused Tailwind CSS classes.",
        date: "2025-07-12",
        category: "Optimization",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Set Up Firebase",
        description: "Initialize Firebase for authentication.",
        date: "2025-07-11",
        category: "Backend",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "User Profile Page",
        description: "Build profile view and edit options.",
        date: "2025-07-14",
        category: "Frontend",
      },
    ],
  },
];


const admin = [
  {
    id: "A001",
    email: "admin@example.com",
    pass: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  // console.log(employees, admin);
  return {employees, admin}
};

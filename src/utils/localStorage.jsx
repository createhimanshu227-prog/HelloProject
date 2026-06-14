

const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "em@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the initial homepage design in Figma.",
        taskDate: "2026-06-15",
        category: "Design"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue on login page.",
        taskDate: "2026-06-10",
        category: "Development"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Documentation",
        taskDescription: "Prepare documentation for user APIs.",
        taskDate: "2026-06-08",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    firstName: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Optimization",
        taskDescription: "Improve query performance.",
        taskDate: "2026-06-16",
        category: "Database"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "User Testing",
        taskDescription: "Conduct usability testing sessions.",
        taskDate: "2026-06-12",
        category: "Testing"
      },
      {
        taskNumber: 3,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build employee analytics dashboard.",
        taskDate: "2026-06-18",
        category: "Development"
      },
      {
        taskNumber: 4,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Staging Build",
        taskDescription: "Deploy application to staging server.",
        taskDate: "2026-06-09",
        category: "DevOps"
      }
    ]
  },

  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },

  {
    id: 4,
    firstName: "Krishna",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },

  {
    id: 5,
    firstName: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const  setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))

}
 export const getLocalStorage = () => { 
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
   

  return {employees, admin}
}



const employees = [
  {
    id: 1,
    email: "john.doe@gmail.com",
    name: "John Doe",
    password: "pass1234",
    task: {
      status: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      details: {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Website",
        description: "Revamp the homepage design to improve user experience.",
        date: "2023-10-12",
        category: "Development",
      },
    },
  },
  {
    id: 2,
    email: "jane.smith@gmail.com",
    name: "Jane Smith",
    password: "pass5678",
    task: {
      status: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
      details: {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Migration",
        description: "Migrate the database to the new server.",
        date: "2023-09-15",
        category: "Database",
      },
    },
  },
  {
    id: 3,
    email: "michael.jones@gmail.com",
    name: "Michael Jones",
    password: "pass91011",
    task: {
      status: {
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      details: {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Implement API",
        description: "Develop and implement the new API endpoints.",
        date: "2023-08-20",
        category: "Development",
      },
    },
  },
  {
    id: 4,
    email: "sarah.lee@gmail.com",
    name: "Sarah Lee",
    password: "pass1213",
    task: {
      status: {
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      details: {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Customer Support",
        description: "Handle customer support tickets and queries.",
        date: "2023-07-25",
        category: "Support",
      },
    },
  },
  {
    id: 5,
    email: "david.brown@gmail.com",
    name: "David Brown",
    password: "pass1415",
    task: {
      status: {
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 1,
      },
      details: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          title: "System Analysis",
          description: "Analyze system performance and report findings.",
          date: "2023-06-30",
          category: "Analysis",
        },
      ],
    },
  },
];

const admin = [
  {
    email: "admin@gmail.com",
    password: "123",
  },
  {
    email: "admin1@gmail.com",
    password: "123",
  },
];

export function setlocalstorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
  return <></>;
}

export function getlocalstorage() {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employeesData, adminData };
}

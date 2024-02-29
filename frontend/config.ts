const HOST_URL = 'https://expense-tracker-w.onrender.com' || 'http://localhost:3000';

const Role = {
    admin: 'ADMIN',
    emp: 'EMPLOYEE'
}

const Status = ['PENDING', 'APPROVED', 'REJECTED'];

const ExpenseCategoryName = [
    'OFFICE_SUPPLIES',
    'TRANSPORTATION',
    'MEALS_ENTERTAINMENT',
    'MISCELLANEOUS',
    'TRAVEL',
    'PETROL',
    'HOTELS',
    'UTILITIES',
    'EQUIPMENT',
    'TRAINING',
    'MARKETING',
    'CONSULTING',
    'INSURANCE'
];

const SalaryFrequency = ['WEEKLY', 'MONTHLY', 'YEARLY'];


export {
    HOST_URL,
    Role,
    Status,
    ExpenseCategoryName,
    SalaryFrequency
}

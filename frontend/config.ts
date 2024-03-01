const HOST_URL = import.meta.env.VITE_HOST_URL || 'http://localhost:3000';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const Project_url = import.meta.env.VITE_PROJECT_URL;
const Project_key = import.meta.env.VITE_PROJECT_KEY;

const supabase = createClient(`${Project_url}`, `${Project_key}`);

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
    SalaryFrequency,
    supabase
}

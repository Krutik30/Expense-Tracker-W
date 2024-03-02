import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { useMemo } from 'react';
import SuspenseErrorBoundary from '../../components/RequireComponent/SuspenseErrorBoundry';


export default function ListOfEmployee() {

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'FirstName', //access nested data with dot notation
        header: 'FName',
      },
      {
        accessorKey: 'LastName',
        header: 'LName',
      },
      {
        accessorKey: 'ContactNumber',
        header: 'PNo.',
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + current.Allowances, 0),
        header: 'Allowance',
        size: 50,
        id: 'allowance'
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => {
          console.log(current);
          return reducer + current.BasicSalary
        }, 0),
        header: 'Salary',
        size: 50,
        id: 'salary'
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + current.Bonuses, 0),
        header: 'Bonuses',
        size: 50,
        id: 'bonuses'
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + current.Deductions, 0),
        header: 'Deductions',
        size: 50,
        id: 'deduction'
      },
      {
        accessorFn: (row) => row.Expense.reduce((reducer: number, current: any) => reducer + current.Amount, 0),
        header: 'Expense',
        size: 50,
        id: 'expense'
      },
      {
        accessorFn: (row) => row.Advance.reduce((reducer: number, current: any) => reducer + current.AdvanceAmount, 0),
        header: 'AdvanceAmount',
        size: 50,
        id: 'advanceAmount'
      },
      {
        accessorFn: (row) => row.Salary.length ? row.Salary[0].PaymentFrequency : "",
        header: 'PaymentFrequency',
        size: 50,
        id: 'paymentFrequency'
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + (current.Allowances + current.BasicSalary + current.Bonuses - current.Deductions), 0),
        header: 'Total',
        size: 50,
        id: 'total',
      },
    ],
    [],
  );

  const employeeData = JSON.parse(localStorage.getItem('employees') || '[]');

  return (
    <div className='p-14 mt-4 flex flex-col bg-sky_et min-h-screen'>
      <h1 className='font-bold p-8 text-center text-3xl'>
        Employee List
      </h1>
      <SuspenseErrorBoundary>
        <MaterialReactTable
          columns={columns}
          data={employeeData}
          enableGrouping
        />
      </SuspenseErrorBoundary>
    </div>

  )
}

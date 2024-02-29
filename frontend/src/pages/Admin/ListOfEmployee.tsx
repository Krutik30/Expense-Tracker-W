import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { useMemo } from 'react';


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
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + current.BasicSalary, 0),
        header: 'Salary',
        size: 50,
        id: 'salary'
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + current.Bonuses, 0),
        header: 'Bonuses',
        size: 50,
        id: 'bonuse'
      },
      {
        accessorFn: (row) => row.Salary.reduce((reducer: number, current: any) => reducer + current.Deductions, 0),
        header: 'Deductions',
        size: 50,
        id: 'deduction'
      },
    ],
    [],
  );

  const employeeData = JSON.parse(localStorage.getItem('employees') || '[]');

  console.log(employeeData);
  return (
    <div className='p-10'>
      <h1>
        Employee List
      </h1>
      <MaterialReactTable
        columns={columns}
        data={employeeData}
        enableGrouping
      />
    </div>
  )
}

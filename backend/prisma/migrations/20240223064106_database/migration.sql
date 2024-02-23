-- CreateTable
CREATE TABLE "User" (
    "UserID" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "RoleId" INTEGER NOT NULL,
    "EmployeeId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserID")
);

-- CreateTable
CREATE TABLE "Employee" (
    "EmployeeID" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "ContactNumber" TEXT NOT NULL,
    "EmploymentStartDate" TIMESTAMP(3) NOT NULL,
    "DepartmentID" INTEGER NOT NULL,
    "ManagerID" INTEGER,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("EmployeeID")
);

-- CreateTable
CREATE TABLE "Role" (
    "RoleID" SERIAL NOT NULL,
    "RoleName" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("RoleID")
);

-- CreateTable
CREATE TABLE "Department" (
    "DepartmentID" SERIAL NOT NULL,
    "DepartmentName" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("DepartmentID")
);

-- CreateTable
CREATE TABLE "Salary" (
    "SalaryID" SERIAL NOT NULL,
    "EmployeeID" INTEGER NOT NULL,
    "BasicSalary" DOUBLE PRECISION NOT NULL,
    "Bonuses" DOUBLE PRECISION NOT NULL,
    "Allowances" DOUBLE PRECISION NOT NULL,
    "Deductions" DOUBLE PRECISION NOT NULL,
    "PaymentFrequency" TEXT NOT NULL,
    "PaymentStatus" TEXT NOT NULL,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("SalaryID")
);

-- CreateTable
CREATE TABLE "Advance" (
    "AdvanceID" SERIAL NOT NULL,
    "EmployeeID" INTEGER NOT NULL,
    "AdvanceAmount" DOUBLE PRECISION NOT NULL,
    "DateIssued" TIMESTAMP(3) NOT NULL,
    "Reason" TEXT NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "Advance_pkey" PRIMARY KEY ("AdvanceID")
);

-- CreateTable
CREATE TABLE "Expense" (
    "ExpenseID" SERIAL NOT NULL,
    "EmployeeID" INTEGER NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "CategoryID" INTEGER NOT NULL,
    "Purpose" TEXT NOT NULL,
    "ApprovalStatus" TEXT NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("ExpenseID")
);

-- CreateTable
CREATE TABLE "ExpenseCategory" (
    "CategoryID" SERIAL NOT NULL,
    "CategoryName" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "ExpenseCategory_pkey" PRIMARY KEY ("CategoryID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Salary_EmployeeID_key" ON "Salary"("EmployeeID");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_RoleId_fkey" FOREIGN KEY ("RoleId") REFERENCES "Role"("RoleID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_EmployeeId_fkey" FOREIGN KEY ("EmployeeId") REFERENCES "Employee"("EmployeeID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_DepartmentID_fkey" FOREIGN KEY ("DepartmentID") REFERENCES "Department"("DepartmentID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_ManagerID_fkey" FOREIGN KEY ("ManagerID") REFERENCES "Employee"("EmployeeID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salary" ADD CONSTRAINT "Salary_EmployeeID_fkey" FOREIGN KEY ("EmployeeID") REFERENCES "Employee"("EmployeeID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advance" ADD CONSTRAINT "Advance_EmployeeID_fkey" FOREIGN KEY ("EmployeeID") REFERENCES "Employee"("EmployeeID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_EmployeeID_fkey" FOREIGN KEY ("EmployeeID") REFERENCES "Employee"("EmployeeID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_CategoryID_fkey" FOREIGN KEY ("CategoryID") REFERENCES "ExpenseCategory"("CategoryID") ON DELETE RESTRICT ON UPDATE CASCADE;

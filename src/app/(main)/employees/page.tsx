import EmployeesScreen from "@/screens/Employees/Employees";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Персонал"
}

const EmployeesPage: NextPage = () => <EmployeesScreen/>
export default EmployeesPage
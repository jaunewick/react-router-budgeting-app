// rrd imports
import { useLoaderData } from "react-router-dom"

// libraries
import { toast } from "react-toastify"

// helper functions
import { createBudget, fetchData } from "../helpers"

// components
import { Intro } from "../components/Intro"
import { AddBudgetForm } from "../components/AddBudgetForm"

// loader
export function dashBoardLoader() {
    const userName = fetchData('userName')
    const budgets = fetchData('budgets')
    return { userName, budgets }
}

// action
export async function dashboardAction({ request }) {
    const data = await request.formData()
    const { _action, ...values } = Object.fromEntries(data)

    if (_action === 'newUser') {
        try {
            localStorage.setItem('userName', JSON.stringify(values.userName))
            return toast.success(`Welcome, ${values.userName}!`)
        } catch (e) {
            throw new Error("There was a problem creating your account.")
        }
    }

    if (_action === "createBudget") {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success("Budget created!")
        } catch (error) {
            throw new Error("There was a problem creating your budget.")
        }
    }
}

export const Dashboard = () => {
    const { userName, budgets } = useLoaderData()
    console.log(userName);
    return (
        <div>
            {userName ? (
                <div className="dashboard">
                    <h1>Welcome back, <span className="accent">{userName}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? () : ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Intro />}
        </div>
    )
}

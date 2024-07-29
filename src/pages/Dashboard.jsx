// rrd imports
import { useLoaderData } from "react-router-dom"

// libraries
import { toast } from "react-toastify"

// helper functions
import { fetchData } from "../helpers"

// components
import { Intro } from "../components/Intro"

// loader
export function dashBoardLoader() {
    const userName = fetchData('userName')
    return { userName }
}

// action
export async function dashboardAction({ request }) {
    const data = await request.formData()
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem('userName', JSON.stringify(formData.userName))
        return toast.success(`Welcome, ${formData.userName}!`)
    } catch (e) {
        throw new Error("There was a problem creating your account.")
    }
}

export const Dashboard = () => {
    const { userName } = useLoaderData()
    console.log(userName);
    return (
        <div>
            {userName ? (<p>{userName}</p>) : <Intro />}
        </div>
    )
}

// rrd imports
import { useLoaderData } from "react-router-dom"

// helper functions
import { fetchData } from "../helpers"

// loader
export function dashBoardLoader() {
    const userName = fetchData('userName')
    return { userName }
}

export const Dashboard = () => {
    const { userName } = useLoaderData()
    console.log(userName);
    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
}

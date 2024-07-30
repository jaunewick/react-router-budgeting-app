// rrd imports
import { redirect } from "react-router-dom";

// libraries
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })
    toast.success("You've deleted you account!")
    return redirect("/")
}
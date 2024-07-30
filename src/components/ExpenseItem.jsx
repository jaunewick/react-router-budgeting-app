// helpers import
import { formatCurrency, formatDateToLocaleString } from "../helpers"

export const ExpenseItem = ({ expense }) => {
    const { name, amount, createdAt } = expense
    return (
        <>
            <td>{name}</td>
            <td>{formatCurrency(amount)}</td>
            <td>{formatDateToLocaleString(createdAt)}</td>
        </>
    )
}

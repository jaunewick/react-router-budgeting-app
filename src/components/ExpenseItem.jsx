// rrdm imports
import { Link, useFetcher } from "react-router-dom"

// libraries import
import { TrashIcon } from "@heroicons/react/24/solid"

// helpers import
import { formatCurrency, formatDateToLocaleString, getAllMatchingItems } from "../helpers"

export const ExpenseItem = ({ expense, showBudget = true }) => {
    const { name, amount, createdAt, budgetId, id } = expense
    const budget = getAllMatchingItems({
        category: 'budgets',
        key: 'id',
        value: budgetId
    })[0]

    const fetcher = useFetcher()

    console.log(budget);

    return (
        <>
            <td>{name}</td>
            <td>{formatCurrency(amount)}</td>
            <td>{formatDateToLocaleString(createdAt)}</td>
            {
                showBudget && <td>
                    <Link
                        to={`/budget/${budget.id}`}
                        style={{
                            '--accent': budget.color
                        }}
                    >
                        {budget.name}
                    </Link>
                </td>
            }
            <td>
                <fetcher.Form
                    method="delete"
                >
                    <input type="hidden" name="_action" value="deleteExpense" />
                    <input type="hidden" name="expenseId" value={id} />
                    <button
                        type="submit"
                        className="btn btn--warning"
                        aria-label={`delete ${name} expense`}
                    >
                        <TrashIcon width={20} />
                    </button>
                </fetcher.Form>
            </td>
        </>
    )
}

// react imports
import { useEffect, useRef } from "react"

// rrd imports
import { useFetcher } from "react-router-dom"

// libraries
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"

export const AddBudgetForm = () => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting"

    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() => {
        if (!isSubmitting) {
            // clear form
            formRef.current.reset()
            // reset focus
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input
                        type="text"
                        name="newBudget"
                        id="newBudget"
                        placeholder="e.g., Groceries"
                        required
                        ref={focusRef}
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input
                        type="number"
                        step={0.01}
                        name="newBudgetAmount"
                        id="newBudgetAmount"
                        placeholder="e.g., CA$350"
                        required
                        inputMode="decimal"
                    />
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting
                            ? <span>Submitting...</span>
                            : (
                                <>
                                    <span>Create budget</span>
                                    <CurrencyDollarIcon width={20} />
                                </>
                            )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

import { useEffect } from "react";
import { BudgetForm } from "./components/BudgetForm"
import { BudgetTracket } from "./components/BudgetTracket";
import { ExpenseList } from "./components/ExpenseList";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";
import { BudgetFilter } from "./components/BudgetFilter";

function App() {

  const { state } = useBudget();

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(state.budget));
    localStorage.setItem('expenses', JSON.stringify(state.expense));
  }, [state.budget, state.expense])

  const isBudgetExist = state.budget > 0;

  return (
    <>
      {
        isBudgetExist
          ? <BudgetTracket />
          : <BudgetForm />
      }

      {isBudgetExist &&
        <main className="max-w-3xl m-auto">
          <BudgetFilter />
          <ExpenseList />
          <ExpenseModal />
        </main>}
    </>
  )
}

export default App

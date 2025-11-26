import { BudgetForm } from "./components/BudgetForm"
import { BudgetTracket } from "./components/BudgetTracket";
import { ExpenseList } from "./components/ExpenseList";
import ExpenseModal from "./components/ExpenseModal";
import { useBudget } from "./hooks/useBudget";

function App() {

  const { state } = useBudget();

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
          <ExpenseList />
          <ExpenseModal />
        </main>}
    </>
  )
}

export default App

import { useBudget } from "../hooks/useBudget";
import { ExpenseDetail } from "./ExpenseDetail";

export function ExpenseList() {

  const { state } = useBudget();

  const budgetFilter =
    state.idCategory
      ? state.expense.filter((exp) => exp.category == state.idCategory)
      : state.expense

  const isEmpty = budgetFilter.length > 0;

  return (
    <div>
      {
        isEmpty
          ?
          <section>
            <h1 className="text-white text-center text-3xl py-10 font-semibold">
              Ultimos Gastos
            </h1>

            <div className="pb-25 space-y-7">
              {
                budgetFilter.map((expense) => (
                  <ExpenseDetail key={expense.id} expense={expense} />
                ))
              }
            </div>

          </section>
          : <h1 className="text-white text-center text-3xl py-10 pb-25">Sín Gastos</h1>
      }
    </div>
  );
};
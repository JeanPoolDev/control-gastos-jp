import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducer/budget-reducer";

interface ContextProps {
  state: BudgetState,
  dispatch: Dispatch<BudgetActions>,
  totalDisponible: number,
  totalGastado: number
}

interface ProviderProps {
  children: ReactNode
}

export const BudgetContext = createContext<ContextProps>(null!);

export function BudgetProvider({ children }: ProviderProps) {

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalGastado = state.expense.reduce((acc, { amount }) => acc + amount, 0);
  const totalDisponible = state.budget - totalGastado;

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch,
        totalDisponible,
        totalGastado
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}
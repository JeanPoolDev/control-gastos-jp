import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducer/budget-reducer";

interface ContextProps {
  state: BudgetState,
  dispatch: Dispatch<BudgetActions>
}

interface ProviderProps {
  children: ReactNode
}

export const BudgetContext = createContext<ContextProps>(null!);

export function BudgetProvider({ children }: ProviderProps) {

  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <BudgetContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export function useBudget() {

  const context = useContext(BudgetContext);

  if (!context) {
    throw new Error('Hubo un problema con el useBudget');
  }

  return context;
}
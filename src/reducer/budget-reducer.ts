import type { Category, DraftExpense, Expense } from "@/types";
import { v4 as uuid4 } from 'uuid'

export type BudgetActions =
  { type: 'set-category', payload: { idCategory: Category["id"] } } |
  { type: 'remove-expense', payload: { idExpense: Expense["id"] } } |
  { type: 'set-idExpense', payload: { idExpense: Expense["id"] } } |
  { type: 'add-expense', payload: { expense: DraftExpense } } |
  { type: 'edit-expense', payload: { expense: Expense } } |
  { type: 'add-budget', payload: { budget: number } } |
  { type: 'reset-app' } |
  { type: 'toogle-modal', }


export type BudgetState = {
  budget: number;
  modal: boolean;
  expense: Expense[];
  idExpense: Expense["id"];
  idCategory: Category["id"];
}

const initialBudget = () => {
  const value = localStorage.getItem('budget');
  return value ? JSON.parse(value) : [];
}

const initialExpenses = () => {
  const value = localStorage.getItem('expenses');
  return value ? JSON.parse(value) : [];
}

export const initialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expense: initialExpenses(),
  idExpense: '',
  idCategory: '',
}

const createExpense = (drafExpense: DraftExpense): Expense => {
  return {
    ...drafExpense,
    id: uuid4()
  }
}

export const budgetReducer = (
  state: BudgetState,
  action: BudgetActions
) => {
  if (action.type === 'add-budget') {
    return {
      ...state,
      budget: action.payload.budget
    }
  }

  if (action.type === 'add-expense') {

    const expense = createExpense(action.payload.expense)

    return {
      ...state,
      expense: [...state.expense, expense],
      modal: false
    }
  }

  if (action.type === 'edit-expense') {

    return {
      ...state,
      expense: state.expense.map(exp => exp.id === action.payload.expense.id ? action.payload.expense : exp),
      modal: false,
      idExpense: ''
    }
  }

  if (action.type === 'remove-expense') {
    return {
      ...state,
      expense: state.expense.filter(exp => exp.id !== action.payload.idExpense)
    }
  }

  if (action.type === 'set-idExpense') {
    return {
      ...state,
      idExpense: action.payload.idExpense,
      modal: true
    }
  }

  if (action.type === 'toogle-modal') {
    return {
      ...state,
      modal: !state.modal
    }
  }

  if (action.type === 'reset-app') {
    return {
      budget: 0,
      modal: false,
      expense: [],
      idExpense: ''
    }
  }

  if (action.type === 'set-category') {
    return {
      ...state,
      idCategory: action.payload.idCategory
    }
  }

  return state;
}
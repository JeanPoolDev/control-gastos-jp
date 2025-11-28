import { formatCurrency } from "../helpers";
import type { Expense } from "../types";
import { categories } from "../data/categories";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list";
import 'react-swipeable-list/dist/styles.css';
import { useBudget } from "../hooks/useBudget";


interface Props {
  expense: Expense
}

export function ExpenseDetail({ expense }: Props) {

  const infoCategory = categories.find(cat => cat.id === expense.category) ?? {
    name: 'desconocido',
    icon: 'no-encontrado'
  };

  const { dispatch } = useBudget();

  const loadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({ type: 'set-idExpense', payload: { idExpense: expense.id } })}>
        Actulizar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => dispatch({ type: 'remove-expense', payload: { idExpense: expense.id } })}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={1}
        leadingActions={loadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="flex items-center w-full select-none">
          <div className="w-2/6 h-[100px] flex items-center justify-center">
            <img
              src={`/icono_${infoCategory.icon}.svg`}
              alt={`${infoCategory.name}`}
              draggable="false"
              className="bg-cover h-[80%] w-[80%] md:h-full md:w-full select-none" />
          </div>
          <div className="w-2/6 space-y-3">
            <h2 className="text-white font-semibold text-xl md:text-2xl">{expense.expenseName}</h2>
            <p className="text-zinc-300 text-sm md:text-base">{expense.date}</p>
          </div>
          <div className="w-2/6 text-center">
            <span className="text-white font-semibold px-3 md:px-4 py-2 border border-zinc-400 rounded-full">
              {formatCurrency(expense.amount)}
            </span>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
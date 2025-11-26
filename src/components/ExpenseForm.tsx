import { useState, type ChangeEvent, type FormEvent } from "react";
import { categories } from "../data/categories";
import type { DraftExpense } from "@/types";
import { ErrorMessage } from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

const initalValue = (): DraftExpense => ({
  amount: 0,
  category: '',
  date: new Date().toISOString().split('T')[0],
  expenseName: ''
})

export function ExpenseForm() {

  const [expense, setExpense] = useState(initalValue);
  const [error, setError] = useState<string>();
  const { dispatch } = useBudget();

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {

    const { id, value } = e.target;
    const isNumberField = ['amount'].includes(id);

    setExpense({
      ...expense,
      [id]: isNumberField ? Number(value) : value
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(expense).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }

    dispatch({ type: 'add-expense', payload: { expense: expense } })

  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <legend className="text-3xl text-center font-bold border-b-4 border-blue-600">
        Nuevo Gasto
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col space-y-2">
        <label htmlFor="expenseName">Nombre Gasto :</label>
        <input
          type="text"
          id="expenseName"
          className="p-2 border rounded-lg"
          placeholder="Añade un gasto"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="amount">Cantidad :</label>
        <input
          type="number"
          id="amount"
          className="p-2 border rounded-lg"
          placeholder="100, 200, 3"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="category">Categoría :</label>
        <select
          id="category"
          value={expense.category}
          onChange={handleChange}
          className="p-2 border rounded-lg cursor-pointer">
          <option value="">-Seleccione-</option>
          {
            categories.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))
          }
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="date">Categoría :</label>
        <input
          id="date"
          type="date"
          value={expense.date}
          onChange={handleChange}
          className="p-2 border rounded-lg cursor-pointer" />
      </div>

      <div className="flex flex-col">
        <button className="bg-[#558d99] p-2 rounded-lg text-white cursor-pointer font-semibold">
          Registrar Gasto
        </button>
      </div>

    </form>
  );
};
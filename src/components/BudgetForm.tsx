import { useState } from "react";
import { useBudget } from "../hooks/useBudget";

export function BudgetForm() {

  const [budget, setBudget] = useState(0);

  const { dispatch } = useBudget();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'add-budget', payload: { budget: budget } })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value))
  }

  const isValid = budget <= 0 || isNaN(budget);

  return (

    <section className="h-screen flex justify-center items-center">
      <div className="w-[90%] lg:w-[40%] h-[60%] shadow-lg rounded-4xl p-5 space-y-4 bg-[#e2ddda]">

        <div className="h-2/3 shadow rounded-4xl">
          <img
            src="https://i.pinimg.com/originals/5d/91/a6/5d91a69ade488948d864eb0c1eeb83da.gif"
            className="bg-cover w-full h-full rounded-4xl"
            alt="imagen-contador-gastos" />
        </div>

        <div className="h-1/3 pb-5 pl-5 pr-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="budget" className="font-bold text-2xl">
                Definir Presupuesto
              </label>
              <input
                id="budget"
                type="number"
                placeholder="0"
                value={budget}
                onChange={handleChange}
                className="border-2 w-full rounded-lg p-2" />
            </div>

            <div className="flex justify-end">
              <button
                disabled={isValid}
                className="bg-black text-white py-2 px-3 rounded-lg cursor-pointer font-semibold
            disabled:opacity-60">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
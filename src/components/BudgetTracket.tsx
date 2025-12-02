import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

export function BudgetTracket() {

  const { state, totalDisponible, totalGastado, dispatch } = useBudget();

  const pocentage = Math.round((totalGastado / state.budget) * 100);

  return (
    <section className="max-w-3xl m-auto">

      <div className="flex justify-between items-center py-10 px-5">
        <h1 className="text-white font-medium text-center text-2xl md:text-4xl">
          Hola, Jean Pool
        </h1>
        <div>
          <button
            onClick={() => dispatch({ type: 'reset-app' })}
            className="py-2 px-3 md:px-4 md:py-3 bg-[#cfc6c1] rounded-lg font-bold cursor-pointer">
            Reiniciar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="px-10 md:px-0">
          <CircularProgressbar
            value={pocentage}
            styles={buildStyles({
              pathColor: `${pocentage === 100 ? '#E15554' : '#1a3138'}`,
              trailColor: '#d6d6d6',
              textSize: 10,
              textColor: '#fff',
            })}
            text={`%${pocentage} Gastado`}
          />
        </div>
        <div className="space-y-2 px-6 md:p-0">
          <AmountDisplay
            imagen="/imagen1.png"
            label='Presupuesto'
            amount={state.budget}
            colorbg="#1a3139" />
          <AmountDisplay
            imagen="/imagen2.png"
            label='Disponible'
            amount={totalDisponible}
            colorbg="#558d99" />
          <AmountDisplay
            imagen="/imagen3.png"
            label='Gastado'
            amount={totalGastado}
            colorbg="#cfc6c1" textBlack />
        </div>
      </div>

    </section>
  );
};
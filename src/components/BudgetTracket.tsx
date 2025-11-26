import { AmountDisplay } from "./AmountDisplay";

export function BudgetTracket() {
  return (
    <section className="max-w-3xl m-auto">

      <h1 className="text-white font-medium text-center text-3xl md:text-4xl py-10">
        Hola, Jean Pool
      </h1>

      {/* md:grid-cols-2 */}
      <div className="grid grid-cols-1">
        {/* <div>
          <img src="/grafico.jpg" alt="estadustica" className="" />
        </div> */}
        <div className="space-y-2 px-6 md:p-0">
          <AmountDisplay
            imagen="/imagen1.png"
            label='Presupuesto'
            amount={1000}
            colorbg="#1a3139" />
          <AmountDisplay
            imagen="/imagen2.png"
            label='Disponible'
            amount={1000}
            colorbg="#558d99" />
          <AmountDisplay
            imagen="/imagen3.png"
            label='Gastado'
            amount={1000}
            colorbg="#cfc6c1" textBlack />
        </div>
      </div>

    </section>
  );
};
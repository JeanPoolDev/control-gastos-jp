import { formatCurrency } from "../helpers";

interface Props {
  label: string;
  amount: number;
  colorbg: string;
  textBlack?: boolean;
  imagen: string;
}

export function AmountDisplay({ label, amount, colorbg, textBlack, imagen }: Props) {

  return (
    <div
      style={{
        backgroundColor: colorbg,
        color: textBlack ? 'black' : 'white',
      }}
      className="text-white rounded-3xl space-y-2 flex justify-between relative">
      <div className="pb-7 pl-6 pr-6 pt-6 md:pb-9 md:pl-7 md:pr-7 md:pt-7">
        <p className="font-semibold">{label} :</p>
        <h2 className="text-2xl font-bold">{formatCurrency(amount)}</h2>
      </div>
      <div className="h-[110px] md:h-[120px] absolute right-1 bottom-1">
        <img src={imagen} className="w-full h-full bg-cover" />
      </div>
    </div>
  );
};
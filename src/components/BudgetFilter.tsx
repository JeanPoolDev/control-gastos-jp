import { useBudget } from '../hooks/useBudget';
import { categories } from '../data/categories'

export function BudgetFilter() {

  const { dispatch } = useBudget();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch({ type: "set-category", payload: { idCategory: e.target.value } })
  }

  return (
    <section className="max-w-3xl m-auto text-white flex gap-4 p-5 rounded-lg my-10 items-center">
      <label htmlFor="filter-budget" className="font-semibold">Filtrar por categoria: </label>
      <select
        onChange={handleChange}
        id="filter-budget"
        className="flex-1 border rounded-lg px-4 py-1">
        <option value="" className='text-black'>--Categoría--</option>
        {
          categories.map(({ id, name }) => (
            <option value={id} key={id} className='text-black'>
              {name}
            </option>
          ))
        }
      </select>
    </section >
  );
};

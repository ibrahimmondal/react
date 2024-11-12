
import { useState } from 'react';
import './App.css'
import ExpenesList from './Component/ExpenesList'

function App() {
  
 const categories = ["home", "family", "tour", "move", "university"];
  const [expenes, setExpenes] = useState ([
    {id: 1, category: "tour", description: "kolkata", amount: 6500},
    {id: 2, category: "family", description: "kolkata", amount: 6500},
    {id: 3, category: "home", description: "kolkata", amount: 6500},
    {id: 4, category: "tour", description: "kolkata", amount: 6500},
    {id: 5, category: "tour", description: "kolkata", amount: 6500}
  ]);
const [selectCategory, setSelectCategory] = useState("");
  const handleRemoveCost = (id) => {
    setExpenes(expenes.filter((item) => item.id !== id));
  }
const filterExpense = selectCategory ? expenes.filter((e) => e.category === selectCategory) : expenes;

  return (
    <>
    <div>
    <select className="select select-primary w-full max-w-xs" onChange={(e) => setSelectCategory(e.target.value)}>
  <option disabled selected>Filter By categories</option>
  <option value={""}>All</option>
  {
    categories.map((item) => (
      <option value={item} key={item}>{item}</option>
    ))
  }
</select>

    </div>
      <ExpenesList expenes={filterExpense} onremove={handleRemoveCost}/>
      </>
  )
}

export default App




import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const contextValue = { budgetMode, setBudgetMode };
  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudget() {
  return useContext(BudgetContext);
}

export { BudgetProvider, useBudget };

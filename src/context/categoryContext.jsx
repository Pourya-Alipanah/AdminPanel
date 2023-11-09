import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider
      value={{ category, setCategory, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => useContext(CategoryContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useCategoryContext, CategoryProvider };

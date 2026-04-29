import { createContext } from 'react';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CategoryContext = createContext({userId: 1});

export const CategoryContextProvider = ({ children }) => {
	const [categoryId, setCategoryId] = useState(2);
	return <CategoryContext.Provider value={{categoryId, setCategoryId}}>{children}</CategoryContext.Provider>;
};
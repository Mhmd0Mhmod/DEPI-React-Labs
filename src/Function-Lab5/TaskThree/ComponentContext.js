const { createContext, useContext } = require("react");

const ComponentContext = createContext();

const ComponentProvider = ({ value, children }) => {
  return <ComponentContext.Provider value={value}>{children}</ComponentContext.Provider>;
};

const useComponentContext = () => {
  return useContext(ComponentContext);
};

export { ComponentProvider, useComponentContext };

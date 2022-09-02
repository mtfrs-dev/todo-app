import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import defaultTheme from "./theme/default"
export const ThemeContext = createContext({
    theme: defaultTheme,
});
export function useTheme() {
    return useContext(ThemeContext);
}
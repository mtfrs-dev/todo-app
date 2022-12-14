import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from 'react';
import { mergeDeep } from '../../helpers/mergeDeep';
import windowExists from '../../helpers/window-exists';
import defaultTheme from '../../theme/default';
import { ThemeContext, useThemeMode } from './ThemeContext';
export const Flowbite = ({ children, theme = {} }) => {
    const { theme: customTheme = {}, dark, usePreferences = true } = theme;
    const [mode, setMode, toggleMode] = useThemeMode(usePreferences);
    const mergedTheme = mergeDeep(defaultTheme, customTheme);
    useEffect(() => {
        if (dark) {
            if (setMode != null) {
                setMode('dark');
            }
            if (windowExists()) {
                document.documentElement.classList.add('dark');
            }
        }
    }, [dark, setMode]);
    const themeContextValue = useMemo(() => ({
        theme: mergedTheme,
        mode,
        toggleMode,
    }), [mode, toggleMode, mergedTheme]);
    return _jsx(ThemeContext.Provider, { value: themeContextValue, children: children });
};

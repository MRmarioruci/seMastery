import {useContext, useReducer, createContext} from 'react';

export type ThemeType = 'theme-dark' | 'theme-light';
type ProviderProps = {
	children: React.ReactNode
}
type State = {
	theme: ThemeType,
	highlighterTheme: string
}
type StateAction = {type: 'SET_THEME', payload: ThemeType} | {type: 'SET_HIGHLIGHT_THEME', payload: string}
type ThemeContext = { state: State; dispatch: React.Dispatch<StateAction> } | undefined;

const reducer = (state: State, action: StateAction): State => {
	switch (action.type) {
		case 'SET_THEME':
		return { ...state, theme: action.payload };
		case 'SET_HIGHLIGHT_THEME':
		return { ...state, highlighterTheme: action.payload };
		default:
		return state;
	}
};
export const ThemeContext = createContext<ThemeContext>(undefined);
export const useCustomContext = () => {
	const context = useContext(ThemeContext);
	if(!context) {
		throw new Error('useCustomContext must be used within a ThemeContextProvider');
	}
	return context;
}

export default function ThemeContextProvider({children}: ProviderProps) {
	const [state, dispatch] = useReducer(reducer, { theme: 'theme-light', highlighterTheme: '' });
	
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	)
}
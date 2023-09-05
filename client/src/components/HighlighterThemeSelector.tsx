import { useEffect, useMemo } from "react";
import { useCustomContext } from "../contexts/theme-context"

type Option = {key: string, value: string};
function HighlighterThemeSelector() {
    const {dispatch} = useCustomContext();
    const options = useMemo(() => {
        return [
            { key: 'Vs Dark', value: 'vsDark'},
            { key: 'Vs Light', value: 'vsLight'},
            { key: 'Dracula', value: 'dracula'},
            { key: 'Duotone Dark', value: 'duotoneDark'},
            { key: 'Github', value: 'github'},
            { key: 'Jetta Wave Dark', value: 'jettwaveDark'},
            { key: 'Jetta Wave Light', value: 'jettwaveLight'},
            { key: 'Night Owl', value: 'nightOwl'},
            { key: 'Night Owl Light', value: 'nightOwlLight'},
            { key: 'Shades Of Purple', value: 'shadesOfPurple'},
            { key: 'Pale Night', value: 'palenight'},
            { key: 'Oceanic Next', value: 'oceanicNext'}
        ]
    }, [])
    const setOption = (newOption: string) => {
        dispatch({type: 'SET_HIGHLIGHT_THEME', payload: newOption})
        localStorage.setItem('highlightertheme', newOption)
    }
    useEffect(() => {
        const existingTheme = localStorage.getItem('highlightertheme');
        setOption(existingTheme ? existingTheme : 'vsDark')
    }, [])
    return (
        <select onChange={e => {setOption(e.target.value)}}>
            { options.map((option: Option) => {
                return (
                    <option key={option.key} value={option.value}>{option.key}</option>
                )
            })}
        </select>
    )
}

export default HighlighterThemeSelector
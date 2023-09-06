export type Cheatsheet = {
    "title"?: string,
    "description"?: any,
    "code"?: string,
    "image"?: string
}
export type CheatSheetGroup = {
    "title": string,
    "docs": Cheatsheet[]
}
export type Highlighter = 'js' | 'tsx' | 'py'
export type CheatsheetDoc = {
    "collectionName": string,
	"title": string,
	"icon": string,
    "color"?: string,
	"groups": CheatSheetGroup[],
    "highlighter": Highlighter
}
export type html = {
    htmlContent: string
}
export type ToggleCheatsheetFunction = (cheatsheet: Cheatsheet | null) => void;
export interface CheatsheetItemProps {
	item: Cheatsheet,
    highlighter: Highlighter,
    highlighterTheme: string,
	toggleCheatsheet: ToggleCheatsheetFunction
}
export interface CheatsheetModalItemProps {
	item: Cheatsheet | null,
    highlighter: Highlighter,
    highlighterTheme: string,
	toggleCheatsheet: ToggleCheatsheetFunction
}
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
export type CheatsheetDoc = {
    "collectionName": string,
	"title": string,
	"icon": string,
    "color"?: string,
	"groups": CheatSheetGroup[]
}
export type html = {
    htmlContent: string
}
export type ToggleCheatsheetFunction = (cheatsheet: Cheatsheet | null) => void;
export interface CheatsheetItemProps {
	item: Cheatsheet,
	toggleCheatsheet: ToggleCheatsheetFunction
}
export interface CheatsheetModalItemProps {
	item: Cheatsheet | null,
	toggleCheatsheet: ToggleCheatsheetFunction
}
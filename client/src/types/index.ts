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
	"groups": CheatSheetGroup[]
}
export type html = {
    htmlContent: string
}
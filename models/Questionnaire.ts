export default interface Questionnaire {
	id: string
	title: string
	description: string
	downloads: number
	author: QuestionnaireAuthor
}

export interface QuestionnaireAuthor {
	id: string
	name: string
}

export default interface Questionnaire {
	id: string
	title: string
	description: string
	author: QuestionnaireAuthor
}

export interface QuestionnaireAuthor {
	id: string
	name: string
}

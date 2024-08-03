import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://api.flashcards.andrii.es',
	headers: {
		'x-auth-skip': true,
	},
})

export const desksAPI = {
	fetchDecks() {
		return instance.get<FetchDecksResponse>('/v2/decks')
	},
	addDeck(params: AddDeckParams) {
		return instance.post<BaseDeck>('/v1/decks', params)
	}
}

export type AddDeckParams = {
	name: string
}

type FetchDecksResponse = {
	items: Deck[],
	pagination: Pagination
}
export type Deck = {
	isFavorite: boolean,
} & BaseDeck

export type BaseDeck = {
	id: string,
	userId: string,
	name: string,
	isPrivate: boolean,
	cover: string,
	created: string,
	updated: string,
	cardsCount: number,
	author: {
		id: string,
		name: string
	},
}

type Pagination = {
	currentPage: number,
	itemsPerPage: number,
	totalPages: number,
	totalItems: number
}
import { Deck } from './decks-api'

const initialState = {
	decks: [] as Deck[], // todo: add type
	searchParams: {
		name: '',
	},
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
	switch (action.type) {
		case 'DECKS/SET-DECKS':
			return { ...state, decks: action.decks }
		case 'DECKS/ADD-DECK':
			return { ...state, decks: [action.model, ...state.decks] }
		default:
			return state
	}
}

export const setDecks = (decks: Deck[]) => ({ type: 'DECKS/SET-DECKS' as const, decks })
export const addDeck = (model: Deck) => ({ type: 'DECKS/ADD-DECK' as const, model })
type DecksActions = ReturnType<typeof setDecks> | ReturnType<typeof addDeck>

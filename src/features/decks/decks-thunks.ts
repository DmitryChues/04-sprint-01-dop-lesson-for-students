import { Dispatch } from 'redux'
import { AppThunk } from '../../app/store'
import { AddDeckParams, desksAPI } from './decks-api'
import { addDeck, setDecks } from './decks-reducer'
import { AxiosPromise } from 'axios'

export const fetchDecksTC = (): AppThunk => (dispatch) => {
	desksAPI.fetchDecks()
		.then((res) => {
			dispatch(setDecks(res.data.items))
		})
}

export const addDeckTC = (params: AddDeckParams): AppThunk<Promise<void>> => async (dispatch) => {
	return desksAPI.addDeck(params)
		.then(res => {
			const model = {
				...res.data,
				isFavorite: true,
			}

			dispatch(addDeck(model))
		})
}
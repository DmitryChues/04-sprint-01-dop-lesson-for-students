import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { Deck } from '../decks-api'
import { selectDecks } from '../decks-selectors'
import { fetchDecksTC } from '../decks-thunks'

export const useFetchDecks = () => {
	const dispatch = useAppDispatch()
	const decks = useAppSelector<Deck[]>(selectDecks)
	useEffect(() => {
		dispatch(fetchDecksTC())
	}, [])
	return {
		decks,
	}
}
window.addEventListener('DOMContentLoaded', () => {
	// DOM nodes
	const tiles = Array.from(document.querySelectorAll('.tile'))
	const playerDisplay = document.querySelector('.display-player')
	const resetButton = document.querySelector('#reset')
	const announcer = document.querySelector('.announcer')

	// global variables
	let board = ['', '', '', '', '', '', '', '', '']
	let currentPlayer = 'X'
	let isGameActive = true

	const PLAYERX_WON = 'PLAYERX_WON'
	const PLAYERO_WON = 'PLAYERO_WON'
	const TIE = 'TIE'

	/*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

	const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	// utility functions
	const isValidAction = (tile) => {
		if (tile.innerText === 'X' || tile.innerText === 'O') {
			return false
		}

		return true
	}

	const updateBoard = (index) => {
		board[index] = currentPlayer
	}

	// handle player change
	const switchPlayer = () => {
		playerDisplay.classList.remove(`player${{ currentPlayer }}`)
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
		playerDisplay.innerText = currentPlayer
		playerDisplay.classList.add(`player${{ currentPlayer }}`)
	}
})

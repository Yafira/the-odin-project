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

	// announce end game result
	const announce = (type) => {
		switch (type) {
			case PLAYERO_WON:
				announcer.innerHTML = 'Player <span class="playerO">O</span> Won!'
				break
			case PLAYERX_WON:
				announcer.innerHTML = 'Player <span class="playerX">X</span> Won'
				break
			case TIE:
				announcer.innerText = 'Tie'
		}
		announcer.classList.remove('hide')
	}

	// result evaluation, is there a winner? or tie?
	function handleResultValidation() {
		let roundWon = false
		for (let i = 0; i <= 7; i++) {
			const win = winningConditions[i]
			const a = board[win[0]]
			const b = board[win[1]]
			const c = board[win[2]]
			if ((a === '') | (b === '') | (c === '')) {
				continue
			}
			if (a === b && b == c) {
				roundWon = true
				break
			}
		}

		if (roundWon) {
			announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON)
			isGameActive = false
			return
		}
		if (!board.includes('')) announce(TIE)
	}

	// user action
	const userAction = (title, index) => {
		if (isValidAction(tile) && isGameActive) {
			tile.innerText = currentPlayer
			tile.classList.add(`player${{ currentPlayer }}`)
			updateBoard(index)
			handleResultValidation()
			switchPlayer()
		}
	}

	// event listeners for tiles
	tiles.forEach((tile, index) => {
		tile.addEventListener('click', () => userAction(tile, index))
	})
})

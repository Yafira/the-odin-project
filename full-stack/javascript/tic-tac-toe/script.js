window.addEventListener('DOMContentLoaded', () => {
	// DOM nodes
	const tiles = Array.from(document.querySelectorAll('.tile'))
	const playerDisplay = document.querySelector('.display-player')
	const resetButton = document.querySelector('#reset')
	const announcer = document.querySelector('.announcer')

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
})

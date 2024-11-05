'use client'

import { Button } from '@repo/ui/button'
import { GuessingGameEngineProps } from './page'
import { useState } from 'react'
import { Input } from '@repo/ui/input'

export default function RandomNumberGame({ randomNumber, endGame, maxGuessCount }: GuessingGameEngineProps) {
  const [guessCount, setGuessCount] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [guess, setGuess] = useState(0)
  const [hasWon, setGameOver] = useState(false)

  function submitGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newGuessCount = guessCount + 1
    if (newGuessCount == maxGuessCount) {
      setFeedback(`Uh oh! You lost this one, because the correct number was ${randomNumber}. Maybe try again.`)
      setGameOver(true)
    } else if (guess > randomNumber) {
      setFeedback('The correct answer is smaller')
    } else if (guess < randomNumber) {
      setFeedback('The correct answer is larger')
    } else if (guess == randomNumber) {
      setFeedback(`Congrats on winning in ${newGuessCount} guess(es)!`)
      setGameOver(true)
    }
    setGuessCount(newGuessCount)
  }

  function onSubmitEndGame(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGuessCount(0)
    setFeedback('')
    setGameOver(false)
    endGame()
  }
  return (
    <div
      className={`${maxGuessCount - 1 == guessCount ? 'bg-red-50 border border-dashed border-fuchsia-400' : ''}
        ${maxGuessCount == guessCount ? 'bg-red-200 border border-dashed border-fuchsia-400' : ''}
        ${hasWon ? 'bg-green-100 border border-dashed border-fuchsia-400' : ''}
        p-10 rounded-md transition-color`}
    >
      {hasWon ? (
        <form
          className="flex flex-col gap-2 p-4 m-auto justify-center bg-fuchsia-400 rounded-xl shadow-2xl outline-dashed outline-rose-600"
          onSubmit={onSubmitEndGame}
        >
          <div>{feedback}</div>
          <Button>Restart?</Button>
        </form>
      ) : (
        <form
          className="flex flex-col gap-2 p-4 m-auto justify-center bg-fuchsia-400 rounded-xl shadow-2xl outline-dashed outline-rose-600"
          onSubmit={submitGuess}
        >
          <Input
            name="guess"
            id="guess"
            type="number"
            placeholder="What's your guess"
            value={guess}
            setValue={(newValue) => setGuess(Number(newValue))}
          />
          <div>{feedback}</div>
          <div>{guessCount} Attempt(s)</div>
          <div>Only {maxGuessCount - guessCount} guess(es) remains</div>
          <Button>Try Answer</Button>
        </form>
      )}
    </div>
  )
}

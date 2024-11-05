'use client'

import { Button } from '@repo/ui/button'
import { GuessingGameMenuProps } from './page'
import { useState } from 'react'
import { Input } from '@repo/ui/input'

export default function RandomNumberGameMenu({ startGame }: GuessingGameMenuProps) {
  const [showSettings, setShowSettings] = useState(false)

  function onSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const min = Number(data.get('min'))
    const max = Number(data.get('max'))
    const maxGuessCount = Number(data.get('maxGuessCount'))
    startGame({ min, max, maxGuessCount })
    setShowSettings(false)
  }
  return (
    <div className="flex flex-col gap-2 p-4 m-auto justify-center bg-fuchsia-400 rounded-xl shadow-2xl outline-dashed outline-rose-600">
      {showSettings ? (
        <div className="flex flex-col gap-8">
          <header>
            <h1 className="text-2xl font-extrabold text-amber-400">
              Please enter the Min/Max values you would like to guess between
            </h1>
          </header>
          <form className="flex flex-col gap-4" onSubmit={onSubmitSettings}>
            <Input defaultValue={0} type="number" placeholder={'Minimum guessing value'} name="min" id="min" />
            <Input defaultValue={10} type="number" placeholder={'Maximum guessing value'} name="max" id="max" />
            <Input
              defaultValue={3}
              type="number"
              placeholder={'Allotted guesses'}
              name="maxGuessCount"
              id="maxGuessCount"
            />
            <Button>Submit</Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-2 p-4 m-auto justify-center bg-fuchsia-400 rounded-xl shadow-2xl outline-dashed outline-rose-600">
          <header className="flex flex-col gap-4">
            <h1 className="text-8xl font-bold text-center text-amber-400">RNG</h1>
            <p className="text-2xl text-center">Guess like your life depends on it, with no reward</p>
            <p className="text-center">\/ Click to Play \/</p>
          </header>
          <form
            className="flex justify-center"
            onSubmit={(e) => {
              e.preventDefault()
              setShowSettings(true)
            }}
          >
            <Button>Begin Here</Button>
          </form>
        </div>
      )}
    </div>
  )
}

'use client'
import { Button } from '@repo/ui/button'
import Input from '@repo/ui/input'
import { Size } from '@repo/ui/size'
import { Variant } from '@repo/ui/variant'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function InputPage() {
  const [name, setName] = useState('')
  const [food, setFood] = useState('')
  const [color, setColor] = useState('')
  return (
    <div>
      <Navbar />
      <div className="p-20">
        <div className="flex gap-8 flex-wrap">
          <div className="flex gap-4">
            <Input value={name} setValue={setName} size={Size.MEDIUM} variant={Variant.PRIMARY} name="name" id="name" />
            <Button onClick={() => alert(`Your name is: ${name}`)} size={Size.MEDIUM} variant={Variant.PRIMARY}>
              Name
            </Button>
          </div>
          <div className="flex gap-4">
            <Input
              value={food}
              setValue={setFood}
              size={Size.MEDIUM}
              variant={Variant.SECONDARY}
              name="food"
              id="food"
            />
            <Button
              onClick={() => alert(`Your favorite food is: ${food}`)}
              size={Size.MEDIUM}
              variant={Variant.SECONDARY}
            >
              Food
            </Button>
          </div>
          <div className="flex gap-4">
            <Input
              value={color}
              setValue={setColor}
              size={Size.MEDIUM}
              variant={Variant.TERTIARY}
              name="color"
              id="color"
            />
            <Button
              onClick={() => alert(`Your favorite color is: ${color}`)}
              size={Size.MEDIUM}
              variant={Variant.TERTIARY}
            >
              Color
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

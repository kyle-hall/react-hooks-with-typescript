import React from 'react'

interface Props {
  name?: string
  enthusiasm?: number
}

const Hello = ({ name = 'darling', enthusiasm = 1 }: Props) => (
  <div>
    Hello, {name}
    {translateEnthusiasm(enthusiasm)}
  </div>
)

const translateEnthusiasm = (enthusiasm: number) => '!'

export default Hello

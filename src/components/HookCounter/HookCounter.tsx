import React, { useState } from 'react'

const HookCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p data-testid={'count-display'}>{count}</p>
      <button
        data-testid={'increment'}
        type="button"
        style={buttonStyle}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  )
}

export default HookCounter

const buttonStyle = {
  width: 260,
  height: 50
}

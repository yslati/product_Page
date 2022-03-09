import React, { useState } from 'react'

const Counter = () => {

	const [count, setCount] = useState(0)

	const decrement = (e) => {
		count > 0 && setCount(count - 1)
	}
	
	const increment = (e) => {
		count < 100 &&setCount(count + 1)
	}

	return (
		<div className="flex h-10 w-32 rounded-lg bg-Counter items-center">
			<button onClick={() => decrement()} type="button"
				className="text-My_orange h-full w-10 rounded-l-lg text-2xl font-bold cursor-pointer outline-none flex justify-center"
			>
				−
			</button>
			<input id="counter" type="number" onChange={() => setCount(count)}  value={count} min={0} max={100}
				className="bg-Counter text-center w-12 outline-none focus:outline-none appearance-none"
			/>
			<button onClick={() => increment()} type="button"
				className="ml-auto text-My_orange h-full w-10 rounded-l-lg text-2xl font-bold cursor-pointer outline-none flex justify-center"
			>
				+
			</button>
		</div>
	)
}

export default Counter
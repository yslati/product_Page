import React from 'react'

const Counter = ({ count, setCount }) => {

	const decrement = (e) => {
		count > 0 && setCount(count - 1)
	}
	
	const increment = (e) => {
		count < 100 &&setCount(count + 1)
	}

	return (
		<div className="flex h-10 md:w-32 w-full rounded-lg bg-Counter items-center md:mb-0 mb-3">
			<button onClick={() => decrement()} type="button"
				className="text-My_orange hover:text-My_orange/60 h-full md:w-10 w-16 rounded-l-lg text-2xl font-bold cursor-pointer outline-none flex justify-center"
			>
				−
			</button>
			<input id="counter" type="number" onChange={() => setCount(count)}  value={count} min={0} max={100}
				className="bg-Counter text-center md:w-12 w-full outline-none focus:outline-none appearance-none"
			/>
			<button onClick={() => increment()} type="button"
				className="ml-auto text-My_orange hover:text-My_orange/60 h-full md:w-10 w-16 rounded-l-lg text-2xl font-bold cursor-pointer outline-none flex justify-center"
			>
				+
			</button>
		</div>
	)
}

export default Counter
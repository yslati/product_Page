import React, { useState } from 'react'
import Counter from './Counter'
import { ShoppingCartIcon } from '@heroicons/react/outline'

const Info = () => {

	const [count, setCount] = useState(0)

	const addToCart = () => {
		// add to cart
		setCount(0);
	}

  return (
	<div className="md:w-1/3 w-full max-w-lg h-full flex flex-col md:justify-center md:mt-0 mt-5 transition-all px-5">
		<h2 className="text-My_orange tracking-widest text-sm font-bold">
			SNEAKER COMPANY
		</h2>
		<h1 className="font-extrabold md:text-4xl text-2xl md:mt-5 mt-3 tracking-wider text-My_dark">
			Fall Limited Edition Sneakers
		</h1>
		<p className="text-My_gray_D md:mt-10 mt-7 tracking-tight">
			These low-profile sneakers are your perfect casual wear companion. Featuring a 
  			durable rubber outer sole, they’ll withstand everything the weather can offer.
		</p>
		<div className="flex md:flex-col flex-row md:items-start items-center mt-5">
			<div className="flex space-x-5 items-center ">
				<h2 className="font-bold md:text-3xl text-2xl text-My_dark">
					$125.00
				</h2>
				<h2 className="px-2 text-My_orange bg-My_orange_ho font-bold rounded-md select-none">
					50%
				</h2>
			</div>
			<h2 className="text-My_gray_L font-bold line-through md:ml-0 ml-auto md:mt-0">
				$250.00
			</h2>
		</div>
		<div className="flex md:flex-row flex-col md:space-x-4 mt-8">
			<Counter count={count} setCount={setCount} />
			<button type="submit" onClick={() => addToCart()}
				className="w-full md:h-auto h-10 shadow-lg shadow-My_orange/30 hover:bg-My_orange/90 rounded-lg bg-My_orange text-white flex items-center justify-center text-sm font-bold"
			>
				<ShoppingCartIcon className="text-white w-8 h-8 py-2" />
				Add to cart
			</button>
		</div>
	</div>
  )
}

export default Info
import React from 'react'
import Counter from './Counter'
import { ShoppingCartIcon } from '@heroicons/react/outline'

const Info = () => {

	const addToCart = () => {

	}

  return (
	<div className="w-1/3 max-w-lg h-full flex flex-col justify-center transition-all">
		<h2 className="text-My_orange tracking-widest text-sm font-bold">
			SNEAKER COMPANY
		</h2>
		<h1 className="font-extrabold text-4xl mt-5 tracking-wider">
			Fall Limited Edition Sneakers
		</h1>
		<p className="text-My_gray_D mt-10 tracking-tight">
			These low-profile sneakers are your perfect casual wear companion. Featuring a 
  			durable rubber outer sole, they’ll withstand everything the weather can offer.
		</p>
		<div className="flex space-x-5 items-center mt-5">
			<h2 className="font-bold text-3xl">
				$125.00
			</h2>
			<h2 className="px-2 text-My_orange bg-My_orange_ho font-bold rounded-md">
				50%
			</h2>
		</div>
		<h2 className="text-My_gray_L font-bold line-through">
			$250.00
		</h2>
		<div className="flex space-x-4 mt-8">
			<Counter />
			<button type="submit" onClick={() => addToCart()}
				className="w-full shadow-lg shadow-My_orange/30 hover:bg-My_orange/90 rounded-lg bg-My_orange text-white flex items-center justify-center text-sm font-bold"
			>
				<ShoppingCartIcon className="text-white w-8 h-8 py-2" />
				Add to cart
			</button>
		</div>
	</div>
  )
}

export default Info
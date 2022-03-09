import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const productImages = [
	{
		id: 0,
		cover: "./images/image-product-1-thumbnail.jpg",
		path: "./images/image-product-1.jpg"
	},
	{
		id: 1,
		cover: "./images/image-product-2-thumbnail.jpg",
		path: "./images/image-product-2.jpg"
	},
	{
		id: 2,
		cover: "./images/image-product-3-thumbnail.jpg",
		path: "./images/image-product-3.jpg"
	},
	{
		id: 3,
		cover: "./images/image-product-4-thumbnail.jpg",
		path: "./images/image-product-4.jpg"
	},
]

const Images = () => {

	const [selected, setSelected] = useState(0)

	const toRight = (e) => {
		selected >= 0 && setSelected(selected + 1)
	}
	
	const toLeft = (e) => {
		selected < productImages.length &&setSelected(selected - 1)
	}

	return (
		<div className="md:w-1/3 w-full md:max-w-lg md:h-full h-64 flex flex-col md:justify-center transition-all relative">
			<div className="absolute inset-0 md:hidden flex items-center justify-between px-4">
				<ChevronLeftIcon onClick={() => toLeft()} className="w-9 h-9 bg-white p-1 rounded-full " />
				<ChevronRightIcon onClick={() => toRight()} className="w-9 h-9 bg-white p-1 rounded-full " />
			</div>
			<img src={productImages[selected].path} alt="" 
				className="w-full h-64 object-cover object-center md:rounded-xl md:cursor-zoom-in"
			/>
			<div className="flex w-full justify-between mt-10">
				{
					productImages.map(img => 
						<div  key={img.id}  className="relative md:block hidden" onClick={() => setSelected(img.id)}>
							<div className={`absolute inset-0 hover:bg-white/50 z-10 rounded-md ${selected === img.id && "bg-white/50 border-2 border-My_orange"}`} />
							<img src={img.cover} alt="" className="lg:w-16 w-14 lg:h-16 h-14 object-cover object-center z-0 rounded-lg cursor-pointer"/>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Images
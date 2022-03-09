import React, { useState } from 'react'

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

  return (
	<div className="w-1/3 h-full flex flex-col justify-center">
		<img src={productImages[0].path} className="w-full object-cover object-center rounded-xl" alt="" />
		<div className="flex w-full justify-between mt-10">
			{
				productImages.map(img => 
					<img src={img.cover} className="w-16 h-16 object-cover object-center rounded-lg" alt="" />
				)
			}
		</div>
	</div>
  )
}

export default Images
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
	<div className="w-1/3 h-full flex flex-col justify-center transition-all">
		<img src={productImages[selected].path} className="w-full object-cover object-center rounded-xl cursor-zoom-in" alt="" />
		<div className="flex w-full  justify-between mt-10">
			{
				productImages.map(img => 
					<div  key={img.id}  className="relative" onClick={() => setSelected(img.id)}>
						{selected === img.id && 
							<div className="absolute inset-0.5 bg-white/50 z-10 rounded-md" />
						}
						<img src={img.cover} alt=""
						className={`w-16 h-16 object-cover object-center z-0 rounded-lg cursor-pointer 
							${selected === img.id ? "border-2 border-My_orange " : ""}`}
						/>
					</div>
				)
			}
		</div>
	</div>
  )
}

export default Images
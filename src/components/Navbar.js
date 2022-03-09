import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
	<div className="w-4/5 py-7 mx-auto flex flex-none items-center select-none transition-all text-My_gray border-b">
		<Link to="/">
			<img src="./images/logo.svg" alt="" />
		</Link>
		<div className="flex ml-10 space-x-7 items-center font-[400] text-My_gray_L">
			<Link className="hover:text-My_gray_D" to="#/Collections">
				Collections
			</Link>
			<Link className="hover:text-My_gray_D" to="#/Men">
				Men
			</Link>
			<Link className="hover:text-My_gray_D" to="#/Women">
				Women
			</Link>
			<Link className="hover:text-My_gray_D" to="#/About">
				About
			</Link>
			<Link className="hover:text-My_gray_D" to="#/Contact">
				Contact
			</Link>
		</div>
		<div className="flex ml-auto items-center space-x-6">
			<Link to="#/Cart">
				<ShoppingCartIcon className="w-6 h-6 text-My_gray_L hover:text-My_gray_D" />
			</Link>
			<Link to="#/profile">
				<img src="./images/image-avatar.png" alt="profile" 
					className="w-12 h-12 object-cover object-center hover:border-2 rounded-full border-My_orange"
				/>
			</Link>
		</div>
	</div>
  )
}

export default Navbar
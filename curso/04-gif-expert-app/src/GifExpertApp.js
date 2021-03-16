import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One punch']);

	return (
		<>
			<h2>GifExpertApp</h2>
			<hr></hr>

			<AddCategory setCategory={setCategories} />

			<ol>
				{
					categories.map(category => (
						<GifGrid key={category} category={category} />
					))
				}
			</ol>
		</>
	);
};

export default GifExpertApp;

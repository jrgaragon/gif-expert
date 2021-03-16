const API_KEY = 'QlHPnFHiqUwYfjKmOmk9zdZGWyOLo0E4';
const URL_API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=10&q=`;

export const getGif = async category => {
	const response = await fetch(URL_API + encodeURI(category));
	const { data } = await response.json();

	const gifs = data.map(image => {
		return {
			id: image.id,
			title: image.title,
			url: image.images.downsized_medium.url
		};
	});

	return gifs;
};

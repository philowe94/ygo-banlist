import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Banlist() {

	const [banlist, setBanlist] = useState({});
	const [cards, setCards] = useState([]);

	let { banlistId } = useParams();

	//get banlist
	useEffect(() => {
		fetch(`http://localhost:5001/banlist/${banlistId}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setBanlist(data[0])
			});
	}, [banlistId]);

	//get banlist cards
	useEffect(() => {
		fetch(`http://localhost:5001/banlist/${banlistId}/cards`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setCards(data)
			});
	}, [banlistId]);

	return (
		<div>
			<h1>{banlist.date}</h1>
			<ul>
				{cards.map(card => (
					<li key={card.id}>
						{card.name}
					</li>
				))}
			</ul>

		</div>
	)
}

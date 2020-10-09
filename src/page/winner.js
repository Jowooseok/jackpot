import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
const Winner = () => {
	const [count, setCount] = useState(0);
	const [dates, setDates] = useState([]);
	const [names, setNames] = useState([]);
	const [bS, setBS] = useState([]);
	const [types, setTypes] = useState([]);
	const [modify, setModify] = useState('');
	const [reverseTrigger, setReverseTrigger] = useState(false);

	useEffect(() => {
		firebase
			.database()
			.ref('/winner')
			.once('value', function (snapshot) {
				snapshot.forEach(function (data) {
					setDates(oldArray => [...oldArray, data.val().date]);
					setNames(oldArray => [...oldArray, data.val().name]);
					setBS(oldArray => [...oldArray, data.val().totalB]);
					setTypes(oldArray => [...oldArray, data.val().type]);
				});

				setReverseTrigger(true);
			});
	}, []);

	useEffect(() => {
		console.log(dates);
		dates.reverse();
		console.log(dates);
		names.reverse();
		bS.reverse();
		types.reverse();
		setReverseTrigger(false);
	}, [reverseTrigger]);
	return (
		<div>
			{dates.map((value, index) => {
				return (
					<div
						key={index}
						style={{
							border: '1px solid',
							width: 'fit-content',
						}}
					>
						<h4 style={{ fontWeight: 'bold' }}>{dates[index]}</h4>
						<h3>GameType : {types[index]}</h3>
						<h3>Winner : {names[index]}</h3>
						<h4>총 바이인 : {bS[index]}</h4>
						<input
							type="text"
							value={modify}
							onChange={e => {
								setModify(e.target.value);
							}}
							style={{ display: count % 2 !== 0 ? 'block' : 'none', width: '100px', marginLeft: '60px', marginBottom: '10px' }}
						/>
						<p>
							<button
								style={{
									marginLeft: '6px',
								}}
								onClick={() => {
									firebase
										.database()
										.ref('winner/' + dates[index])
										.remove();
									window.location.reload(false);
								}}
							>
								삭제
							</button>
							<button
								style={{
									marginLeft: '12px',
								}}
								onClick={() => {
									setCount(count + 1);
									console.log(count);
									if (count % 2 !== 0 && modify !== '') {
										firebase
											.database()
											.ref('winner/' + dates[index])
											.update({
												date: dates[index],
												name: modify,
												totalB: bS[index],
												type: types[index],
											});
										window.location.reload(false);
									}
								}}
							>
								우승자 수정
							</button>
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Winner;

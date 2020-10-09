import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/ko';
import * as firebase from 'firebase';
import back from '../static/back4.png';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rank = () => {
	var moment = require('moment');
	moment().format();
	moment.locale('ko');

	const [winnerPrint, setWinnerPrint] = useState([]);
	const [rankPrint, setRankPrint] = useState([]);
	//동기적 처리를 위해서 Hooks 를 쓸꺼고 변수를 선언함과 동시에 상태가 변할때 그 상태값을 반영 시킬 함수하나를 추가로 정의해야함
	//useState 내부에는 초기값

	useEffect(() => {
		const winner = [];
		const rankArr = [];
		//Effect 함수 내부에서 배열처리해서 최종적으로 만들어진 Array 를 hooks 에 반영하자

		firebase
			.database()
			.ref('/winner')
			.once('value', function (snapshot) {
				winner.push(snapshot.val());

				// snapshot.forEach(function (data) {
				//     const state = snapshot.val();
				//
				//     winner.push(state);
				// }); 이렇게 해버리면 forEach 구문이 그냅샷 개수만큼돌아와서 여러번 상태가 정의될 것
				//
				winner.forEach(function (element) {
					Object.entries(element).forEach(([key, value]) => {
						Object.entries(value).forEach(([key, value]) => {
							if (key === 'name') {
								rankArr.push(value.toUpperCase());
							}
						});
					});
				});
				const result = rankArr.reduce((t, a) => {
					if (t[a]) {
						t[a]++;
					} else {
						t[a] = 1;
					}
					return t;
				}, {});

				let winnerNameResult = Object.keys(result).sort(function (a, b) {
					return result[b] - result[a];
				});
				let winnerCntResult = [];
				let key = [];
				//let rank = {};
				for (key in result) {
					if (result.hasOwnProperty(key)) winnerCntResult.push(result[key]);
				}
				winnerCntResult.sort(function (a, b) {
					return b - a;
				});
				// winnerNameResult.forEach((key, i) => rank[key] = winnerCntResult[i]);
				// useEffect 내부에서 rank 를 규정하고 있으나 effect 함수 내부에서의 rank 만 변할뿐 실제로
				// 컴포넌트에서 사용할 rank 에는 반영 되지 못한다, 따라서 위의 let rank 도 필요없다
				// 편의를 위해 rank 라는 객체를 따로 만들지 않고 진행하게, 랭크 명단과 카운트를 각각 출력 할 예정

				setWinnerPrint(winnerNameResult);
				setRankPrint(winnerCntResult);
				//이렇고롬 위에서 winnerPrint 와 rankPrint 의 상태를 수정하는 각각의 함수를 써서 결과 배열을 반영한다.
				//이런식으로 해서 훅스의 상태값을 변화시키며 동기적 처리는 덤.
			});
	}, []);

	return (
		<div>
			<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet"></link>
			<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap" rel="stylesheet"></link>
			<div style={{ color: 'black', paddingRight: '30px', fontFamily: `Nanum Gothic, sans-serif` }}>
				<Row style={{ fontSize: '50px', textAlign: 'center' }}>
					<Col span={5}></Col>
					<Col span={14}>{moment().format('MMMM')} 랭킹</Col>
					<Col span={5}></Col>
				</Row>
				<div
					style={{
						minHeight: '100%',
						height: '80vh',
						backgroundImage: 'url(' + back + ')',
						backgroundSize: '100% 50%',
					}}
				>
					<Row style={{ fontSize: '40px', textAlign: 'center' }}>
						<Col span={5}>Rank</Col>
						<Col span={14}>Name</Col>
						<Col span={5}>Wins</Col>
					</Row>

					<Row style={{ borderBottom: '2px solid', marginLeft: '3%' }} />
					{winnerPrint.map((value, index) => {
						//나는 array 만 map 해봐서 객체 맵은 잘모르겠다
						//winnerPrint 에 이름 정렬해둔 배열
						//rankPrint 에 카운트 정렬해둔 배열 각각 넣어서 index 따라서 개별 출력

						return (
							<Row key={index} style={{ fontSize: '30px', textAlign: 'center' }}>
								<Col span={5}>
									{index === 0 ? (
										<FontAwesomeIcon icon={faCrown} color="#EEE02A" size="1x" />
									) : rankPrint[index] === rankPrint[0] ? (
										<FontAwesomeIcon color="#EEE02A" icon={faCrown} size="1x" />
									) : (
										index + 1
									)}
								</Col>
								<Col span={14}>{winnerPrint[index]}</Col>
								<Col span={5}>{rankPrint[index]}</Col>
							</Row>
						);
					})}

					{/*{Object.keys(rank).map((key, index) => {*/}
					{/*    return (*/}
					{/*        <div>*/}
					{/*            <Col>{index}</Col>*/}
					{/*            <Col>{key}</Col>*/}
					{/*            <Col>{rank[key]}</Col>*/}
					{/*        </div>*/}
					{/*    );*/}
					{/*})}*/}
				</div>
			</div>
		</div>
	);
};
export default Rank;

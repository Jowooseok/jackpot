import React from "react";
import * as firebase from 'firebase';
import { useObject } from 'react-firebase-hooks/database';
import back from '../static/table.png'


const Table = () => {

    const [one] = useObject(firebase.database().ref('/user/1/name'));
    const [two] = useObject(firebase.database().ref('/user/2/name'));
    const [three] = useObject(firebase.database().ref('/user/3/name'));
    const [four] = useObject(firebase.database().ref('/user/4/name'));
    const [five] = useObject(firebase.database().ref('/user/5/name'));
    const [six] = useObject(firebase.database().ref('/user/6/name'));
    const [seven] = useObject(firebase.database().ref('/user/7/name'));
    const [eight] = useObject(firebase.database().ref('/user/8/name'));
    const [nine] = useObject(firebase.database().ref('/user/9/name'));
    const [ten] = useObject(firebase.database().ref('/user/10/name'));
    const [eleven] = useObject(firebase.database().ref('/user/11/name'));

    return (
        <div style={{
            minHeight: "100%",
            height: "100vh",
            backgroundImage: "url(" + back + ")",
            backgroundSize: '100% 100%'
        }}>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
            <div style={{fontSize:'4em' , color:'white', fontFamily:`Noto Sans KR, sans-serif`}}>
                <span style={{position:'absolute', top:'90px', right:'500px' }}>1.&nbsp;{one && one.val()}</span>
                <span style={{position:'absolute' , top:'240px', right:'30px'}}>2.&nbsp;{two && two.val()}</span>
                <span style={{position:'absolute' ,top:'580px', right:'30px' }}>3.&nbsp;{three && three.val()}</span>
                <span style={{position:'absolute' ,top:'925px', right:'200px'}}>4.&nbsp;{four && four.val()}</span>
                <span style={{position:'absolute' ,top:'965px', right:'620px' }}>5.&nbsp;{five && five.val()}</span>
                <span style={{position:'absolute' ,top:'965px', left:'730px'}}>6.&nbsp;{six && six.val()}</span>
                <span style={{position:'absolute' ,top:'925px', left:'240px' }}>7.&nbsp;{seven && seven.val()}</span>
                <span style={{position:'absolute' , top:'585px', left:'20px' }}>8.&nbsp;{eight && eight.val()}</span>
                <span style={{position:'absolute', top:'240px', left:'90px' }}>9.&nbsp;{nine && nine.val()}</span>
                <span style={{position:'absolute', top:'90px', left:'540px' }}>10.&nbsp;{ten && ten.val()}</span>
                <span style={{position:'absolute' }}>{eleven && eleven.val()}</span>
            </div>

        </div>
    )
}

export default Table;

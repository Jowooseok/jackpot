import React, { useEffect, useState } from "react";
import * as firebase from 'firebase';
import { useObject } from 'react-firebase-hooks/database';
import useInterval from "react-useinterval";
import 'moment/locale/ko';
const Dealer = () => {
    let moment = require('moment');
    moment().format();
    moment.locale('ko');

    const [levelDB] = useObject(firebase.database().ref('/timer/level'));
    const [blindDB] = useObject(firebase.database().ref('/timer/blind'));
    const [total, setTotal] = useState(0);
    const [trigger] = useObject(firebase.database().ref('/timer/trigger'));
    const [type] = useObject(firebase.database().ref('/timer/gametype'));


    const [seconds] = useObject(firebase.database().ref('/timer/seconds'));
    const [minutes] = useObject(firebase.database().ref('/timer/minutes'));

    const [temp, setTemp] = useState(0);
    const [isTemp, setIsTemp] = useState(false);
    const [nextCount, setNextCount] = useState(0);
    const [modifyBlind, setModifyBlind] = useState(0);

    const [addWait, setAddWait] = useState("");

    const [waitList, setWaitList] = useState([]);
    const [modify, setModify] = useState(false);
    const [waitDB] = useObject(firebase.database().ref('/wait/name'));
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

    const [oneB] = useObject(firebase.database().ref('/user/1/b'));
    const [twoB] = useObject(firebase.database().ref('/user/2/b'));
    const [threeB] = useObject(firebase.database().ref('/user/3/b'));
    const [fourB] = useObject(firebase.database().ref('/user/4/b'));
    const [fiveB] = useObject(firebase.database().ref('/user/5/b'));
    const [sixB] = useObject(firebase.database().ref('/user/6/b'));
    const [sevenB] = useObject(firebase.database().ref('/user/7/b'));
    const [eightB] = useObject(firebase.database().ref('/user/8/b'));
    const [nineB] = useObject(firebase.database().ref('/user/9/b'));
    const [tenB] = useObject(firebase.database().ref('/user/10/b'));
    const [elevenB] = useObject(firebase.database().ref('/user/11/b'));
    const [subB] = useObject(firebase.database().ref('/user/sub/b'));

    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player3, setPlayer3] = useState("");
    const [player4, setPlayer4] = useState("");
    const [player5, setPlayer5] = useState("");
    const [player6, setPlayer6] = useState("");
    const [player7, setPlayer7] = useState("");
    const [player8, setPlayer8] = useState("");
    const [player9, setPlayer9] = useState("");
    const [player10, setPlayer10] = useState("");
    const [player11, setPlayer11] = useState("");

    const [player1d, setPlayer1d] = useState(false);
    const [player2d, setPlayer2d] = useState(false);
    const [player3d, setPlayer3d] = useState(false);
    const [player4d, setPlayer4d] = useState(false);
    const [player5d, setPlayer5d] = useState(false);
    const [player6d, setPlayer6d] = useState(false);
    const [player7d, setPlayer7d] = useState(false);
    const [player8d, setPlayer8d] = useState(false);
    const [player9d, setPlayer9d] = useState(false);
    const [player10d, setPlayer10d] = useState(false);
    const [player11d, setPlayer11d] = useState(false);

    const [shuffleD, setShuffleD] = useState(false);
    const [winnerD, setWinnerD] = useState(false);

    Array.prototype.shuffle = function () {
        var length = this.length;
        while (length) {
            var index = Math.floor((length--) * Math.random());
            var temp = this[length];
            this[length] = this[index];
            this[index] = temp;
        }

        return this;
    };

    useEffect(() => {
        if (subB && oneB && twoB && threeB && sevenB && eightB && nineB && tenB && elevenB) {
            setTotal(subB.val() + oneB.val() + twoB.val() + threeB.val() + fourB.val() + fiveB.val() + sixB.val() + sevenB.val() + eightB.val() + nineB.val() + tenB.val() + elevenB.val())
        }
    }, [oneB, twoB, threeB, fourB, fiveB, sixB, sevenB, eightB, nineB, tenB, elevenB, subB]);

    useEffect(() => {
        if (trigger && trigger.val() === 1) {
        } else if (trigger && trigger.val() === 2) {
            setShuffleD(false)
        } else if (trigger && trigger.val() === 3) {
            if (type && type.val() === "Monster" || type.val() === "KSOP Seed" || type.val() === "FastDaily") {
                firebase.database().ref('timer').update({
                    seconds: 0
                })
                firebase.database().ref('timer').update({
                    minutes: 10
                })
            }
            else if (type && type.val() === "Tournament") {
                firebase.database().ref('timer').update({
                    trigger: 2
                })
                firebase.database().ref('timer').update({
                    seconds: 0
                })
                firebase.database().ref('timer').update({
                    minutes: 30
                })
            } else if (type && type.val() === "TSO") {
                firebase.database().ref('timer').update({
                    seconds: 0
                })
                firebase.database().ref('timer').update({
                    minutes: 20
                })
                firebase.database().ref('timer').update({
                    trigger: 2
                })
            }
            else {
                firebase.database().ref('timer').update({
                    seconds: 0
                })
                firebase.database().ref('timer').update({
                    minutes: 7
                })
                firebase.database().ref('timer').update({
                    trigger: 2
                })
            }
        }
    }, [trigger]);

    useEffect(() => {
        if (one && one.val() !== "" && one.val() !== "-") {
            setPlayer1(one.val());
            setPlayer1d(true);

        }
    }, [one && one.val()]);
    useEffect(() => {
        if (two && two.val() !== "" && two.val() !== "-") {
            setPlayer2(two.val());
            setPlayer2d(true);

        }
    }, [two]);
    useEffect(() => {
        if (three && three.val() !== "" && three.val() !== "-") {
            setPlayer3(three.val());
            setPlayer3d(true);

        }
    }, [three]);
    useEffect(() => {
        if (four && four.val() !== "" && four.val() !== "-") {
            setPlayer4(four.val());
            setPlayer4d(true);

        }
    }, [four]);
    useEffect(() => {
        if (five && five.val() !== "" && five.val() !== "-") {
            setPlayer5(five.val());
            setPlayer5d(true);

        }
    }, [five]);
    useEffect(() => {
        if (six && six.val() !== "" && six.val() !== "-") {
            setPlayer6(six.val());
            setPlayer6d(true);

        }
    }, [six]);
    useEffect(() => {
        if (seven && seven.val() !== "" && seven.val() !== "-") {
            setPlayer7(seven.val());
            setPlayer7d(true);

        }
    }, [seven]);
    useEffect(() => {
        if (eight && eight.val() !== "" && eight.val() !== "-") {
            setPlayer8(eight.val());
            setPlayer8d(true);

        }
    }, [eight]);
    useEffect(() => {
        if (nine && nine.val() !== "" && nine.val() !== "-") {
            setPlayer9(nine.val());
            setPlayer9d(true);

        }
    }, [nine]);
    useEffect(() => {
        if (ten && ten.val() !== "" && ten.val() !== "-") {
            setPlayer10(ten.val());
            setPlayer10d(true);

        }
    }, [ten]);
    useEffect(() => {
        if (eleven && eleven.val() !== "" && eleven.val() !== "-") {
            setPlayer11(eleven.val());
            setPlayer11d(true);

        }
    }, [eleven]);

    useEffect(() => {

        if (waitDB && waitDB.val() !== "") {
            setWaitList(waitDB.val().split("/"))
        }

    }, [waitDB]);


    return (
        <div style={{ marginLeft: "10px" }}>
            {type && <h3>type : {type.val()}</h3>}
            {/*<button onClick={() => {*/}
            {/*    firebase.database().ref('timer').update({*/}
            {/*        gametype: "testMode"*/}
            {/*    });*/}
            {/*    setMinutes(0);*/}
            {/*    setSeconds(3);*/}
            {/*}}>*/}
            {/*    testMode*/}
            {/*</button>*/}
            <button onClick={
                () => {
                    firebase.database().ref('timer').update({
                        gametype: "TSO"
                    });

                    firebase.database().ref('timer').update({
                        seconds: 0
                    })
                    firebase.database().ref('timer').update({
                        minutes: 20
                    })
                }
            }>
                TSO
            </button>
            <button onClick={
                () => {
                    firebase.database().ref('timer').update({
                        gametype: "Daily"
                    });
                    firebase.database().ref('timer').update({
                        seconds: 0
                    })
                    firebase.database().ref('timer').update({
                        minutes: 1
                    })
                }
            }>
                Daily
            </button>
            <button onClick={
                () => {
                    firebase.database().ref('timer').update({
                        gametype: "KSOP Seed"
                    });
                    firebase.database().ref('timer').update({
                        seconds: 0
                    })
                    firebase.database().ref('timer').update({
                        minutes: 10
                    })
                }
            }>
                KSOP Seed
            </button>
            <button onClick={
                () => {
                    firebase.database().ref('timer').update({
                        gametype: "Monster"
                    });
                    firebase.database().ref('timer').update({
                        seconds: 0
                    })
                    firebase.database().ref('timer').update({
                        minutes: 10
                    })

                }
            }>
                Monster
            </button>
            <div>
                <button onClick={
                    () => {
                        firebase.database().ref('timer').update({
                            gametype: "FastDaily"
                        });
                        firebase.database().ref('timer').update({
                            seconds: 0
                        })
                        firebase.database().ref('timer').update({
                            minutes: 10
                        })

                    }
                }>
                    FastDaily
                </button>
                <button onClick={
                    () => {
                        firebase.database().ref('timer').update({
                            gametype: "Tournament"
                        });
                        firebase.database().ref('timer').update({
                            seconds: 0
                        })
                        firebase.database().ref('timer').update({
                            minutes: 30
                        })

                    }
                }>
                    Tournament
                </button>
            </div>

            <h1>
                Level : {levelDB && levelDB.val()}
            </h1>
            <h2>
                blind : {blindDB && blindDB.val()} / {blindDB && blindDB.val() * 2}
            </h2>
            <p>

                <input style={{ width: '100px' }} type="text" value={modifyBlind}
                    onChange={e => setModifyBlind(e.target.value)} />
                <button onClick={() => {
                    firebase.database().ref('timer').update({
                        blind: parseInt(modifyBlind)
                    });
                    setModifyBlind(0);
                }} style={{ marginLeft: '4px' }}>임의 블라인드 설정
                </button>
            </p>
            {type && type.val() === "Monster"
                ?
                <h2>
                    ante : {levelDB && levelDB.val() >= 3 ? blindDB && blindDB.val() * 2 : 0}
                </h2>
                :
                <></>
            }
            {type && type.val() === "Tournament"
                ?
                <h2>
                    ante : {levelDB && levelDB.val() >= 3 ? blindDB && blindDB.val() * 2 : 0}
                </h2>
                :
                <></>
            }
            {type && type.val() === "FastDaily"
                ?
                <h2>
                    ante : {levelDB && levelDB.val() >= 4 ? blindDB && blindDB.val() * 2 : 0}
                </h2>
                :
                <></>
            }
            {type && type.val() === "TSO"
                ?
                <h2>
                    ante : {levelDB && levelDB.val() >= 5 ? blindDB && blindDB.val() * 2 : 0}
                </h2>
                :
                <></>
            }

            <h1>
                Time Remaining {minutes && minutes.val()} : {seconds && seconds.val() < 10 ? '0' + seconds && seconds.val() : seconds && seconds.val()}
            </h1>
            <input style={{ width: '100px' }} type="text" value={temp} onChange={e => setTemp(e.target.value)} />
            <button style={{ marginLeft: '4px' }} onClick={() => {
                if (temp !== 0) {
                    firebase.database().ref('timer').update({
                        seconds: 0
                    })
                    firebase.database().ref('timer').update({
                        minutes: temp
                    })
                    setTemp(temp);
                    setIsTemp(true)
                }

            }}>임의 시간 설정
            </button>
            <h4>* 분 단위로 입력</h4>
            <div style={{ marginTop: '20px' }}>

                <button style={{
                    display: trigger && trigger.val() === 1 ? 'none' : 'inline',
                    fontWeight: "bold",
                    fontSize: '40px',
                    border: "none",
                    borderRadius: '4px',
                    backgroundColor: '#6981DF',
                    width: '120px'
                }} onClick={
                    () => {
                        firebase.database().ref('timer').update({
                            trigger: 1
                        })
                    }
                }>
                    Start
                </button>
                <button style={{
                    display: trigger && trigger.val() === 2 ? 'none' : 'inline',
                    fontWeight: "bold",
                    fontSize: '40px',
                    border: "none",
                    borderRadius: '4px',
                    backgroundColor: '#DF5F5B',
                    width: '120px'
                }} onClick={
                    () => {
                        firebase.database().ref('timer').update({
                            trigger: 2
                        })
                    }
                }>
                    Pause
                </button>

            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>웨이팅 명단</h2>
            </div>
            <input maxLength="5" type="text" value={addWait} onChange={e => setAddWait(e.target.value)} />
            <button style={{ marginLeft: "4px" }} onClick={() => {
                if (addWait !== "") {
                    firebase.database().ref('wait').update({
                        name: waitDB.val() + "/" + addWait
                    })
                } else {
                    console.log("어짜피 안들어감");
                }
                setAddWait("");
            }}>
                입력
            </button>
            {
                waitDB && waitDB.val().toString().split('/').map((value, index) => {
                    return (
                        <p style={{ fontWeight: 'bold' }} key={index}>
                            {value}
                            <button onClick={() => {
                                firebase.database().ref('wait').update({
                                    name: waitDB.val().replace('/' + value, '')
                                })

                            }} style={{ marginLeft: '6px', display: index === 0 ? 'none' : 'inline' }}>x
                            </button>
                        </p>
                    )
                })
            }
            <button onClick={() => {
                var length = 0;
                var availableSeat = [];
                if (one && one.val() === "" || one && one.val() === "-") {
                    length++;
                    availableSeat.push(1);
                }
                if (two && two.val() === "" || two && two.val() === "-") {
                    length++;
                    availableSeat.push(2)
                }
                if (three && three.val() === "" || three && three.val() === "-") {
                    length++;
                    availableSeat.push(3)
                }
                if (four && four.val() === "" || four && four.val() === "-") {
                    length++;
                    availableSeat.push(4)
                }
                if (five && five.val() === "" || five && five.val() === "-") {
                    length++;
                    availableSeat.push(5)
                }
                if (six && six.val() === "" || six && six.val() === "-") {
                    length++;
                    availableSeat.push(6)
                }
                if (seven && seven.val() === "" || seven && seven.val() === "-") {
                    length++;
                    availableSeat.push(7)
                }
                if (eight && eight.val() === "" || eight && eight.val() === "-") {
                    length++;
                    availableSeat.push(8)
                }
                if (nine && nine.val() === "" || nine && nine.val() === "-") {
                    length++;
                    availableSeat.push(9)
                }
                if (ten && ten.val() === "" || ten && ten.val() === "-") {
                    length++;
                    availableSeat.push(10)
                }
                console.log(length);
                if (length !== 0) {
                    availableSeat.shuffle();
                    waitList.shift();
                    const range = length - waitList.length;
                    console.log(range);
                    for (var indexWait = 0; indexWait < range; indexWait++) {
                        waitList.push('-');
                    }
                    const temp = waitList.length;

                    for (var index = 0; index < temp; index++) {
                        if (length !== 0) {
                            firebase.database().ref('user/' + availableSeat[index]).update({
                                name: waitList[0],
                                b: 0
                            });
                            waitList.shift();
                            length--;
                        }
                    }
                    firebase.database().ref('wait').update({
                        name: waitList.length > 0 ? '/' + waitList.join('/') : ""
                    });
                }


            }} style={{
                fontWeight: 'bold',
                fontSize: '30px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#6981DF',
                display: shuffleD ? 'none' : 'block'
            }}>Shuffle
            </button>
            <button style={{ marginTop: '20px' }} onClick={() => {
                setWaitList([]);
                setAddWait("");
                firebase.database().ref('wait').update({
                    name: ""
                });
            }}>
                웨이팅 초기화
            </button>
            <div style={{ marginTop: '20px' }}>
                <h2>플레이어 명단</h2>

                <button style={{
                    width: '120px', marginBottom: '10px',
                    display: modify ? 'none' : 'block'
                }} onClick={() => {
                    setModify(true);
                }}>바이인 수정
                </button>

                <button style={{
                    width: '120px',
                    marginBottom: '10px',
                    display: modify ? 'block' : 'none'
                }}
                    onClick={() => {
                        setModify(false);
                    }}>수정 완료
                </button>
                <h2
                >Total : {total} </h2>
            </div>
            <p style={{ fontWeight: 'bold' }}>1. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player1}
                onChange={e => setPlayer1(e.target.value)} disabled={player1d} />
                <button onClick={() => {
                    setPlayer1d(true);
                    firebase.database().ref('user/1').update({
                        name: player1,
                        b: 0
                    });

                }}>
                    입력
                </button>


                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{oneB && oneB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/1').update({
                        b: oneB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/1').update({
                        b: oneB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer1d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + oneB.val()
                    });
                    firebase.database().ref('user/1').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer1("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: one && one.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (one && one.val() !== "") && (one && one.val() !== "-") ? 'block' : 'none'
                }}>
                    {one && one.val()} 우승
                </button>
            </p>


            <p style={{ fontWeight: 'bold' }}>2. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player2}
                onChange={e => setPlayer2(e.target.value)} disabled={player2d} />
                <button onClick={() => {
                    setPlayer2d(true);
                    firebase.database().ref('user/2').update({
                        name: player2,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{twoB && twoB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/2').update({
                        b: twoB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/2').update({
                        b: twoB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer2d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + twoB.val()
                    });
                    firebase.database().ref('user/2').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer2("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: two && two.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (two && two.val() !== "") && (two && two.val() !== "-") ? 'block' : 'none'
                }}>
                    {two && two.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>3. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player3}
                onChange={e => setPlayer3(e.target.value)} disabled={player3d} />
                <button onClick={() => {
                    setPlayer3d(true);
                    firebase.database().ref('user/3').update({
                        name: player3,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{threeB && threeB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/3').update({
                        b: threeB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/3').update({
                        b: threeB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer3d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + threeB.val()
                    });
                    firebase.database().ref('user/3').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer3("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: three && three.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (three && three.val() !== "") && (three && three.val() !== "-") ? 'block' : 'none'
                }}>
                    {three && three.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>4. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player4}
                onChange={e => setPlayer4(e.target.value)} disabled={player4d} />
                <button onClick={() => {
                    setPlayer4d(true);
                    firebase.database().ref('user/4').update({
                        name: player4,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{fourB && fourB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/4').update({
                        b: fourB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/4').update({
                        b: fourB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer4d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + fourB.val()
                    });
                    firebase.database().ref('user/4').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer4("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: four && four.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (four && four.val() !== "") && (four && four.val() !== "-") ? 'block' : 'none'
                }}>
                    {four && four.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>5. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player5}
                onChange={e => setPlayer5(e.target.value)} disabled={player5d} />
                <button onClick={() => {
                    setPlayer5d(true);
                    firebase.database().ref('user/5').update({
                        name: player5,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{fiveB && fiveB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/5').update({
                        b: fiveB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/5').update({
                        b: fiveB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer5d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + fiveB.val()
                    });
                    firebase.database().ref('user/5').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer5("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: five && five.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (five && five.val() !== "") && (five && five.val() !== "-") ? 'block' : 'none'
                }}>
                    {five && five.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>6. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player6}
                onChange={e => setPlayer6(e.target.value)} disabled={player6d} />
                <button onClick={() => {
                    setPlayer6d(true);
                    firebase.database().ref('user/6').update({
                        name: player6,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}> {sixB && sixB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/6').update({
                        b: sixB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/6').update({
                        b: sixB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer6d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + sixB.val()
                    });
                    firebase.database().ref('user/6').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer6("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: six && six.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (six && six.val() !== "") && (six && six.val() !== "-") ? 'block' : 'none'
                }}>
                    {six && six.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>7. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player7}
                onChange={e => setPlayer7(e.target.value)} disabled={player7d} />
                <button onClick={() => {
                    setPlayer7d(true);
                    firebase.database().ref('user/7').update({
                        name: player7,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{sevenB && sevenB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/7').update({
                        b: sevenB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/7').update({
                        b: sevenB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer7d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + sevenB.val()
                    });
                    firebase.database().ref('user/7').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer7("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: seven && seven.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (seven && seven.val() !== "") && (seven && seven.val() !== "-") ? 'block' : 'none'
                }}>
                    {seven && seven.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>8. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player8}
                onChange={e => setPlayer8(e.target.value)} disabled={player8d} />
                <button onClick={() => {
                    setPlayer8d(true);
                    firebase.database().ref('user/8').update({
                        name: player8,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{eightB && eightB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/8').update({
                        b: eightB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/8').update({
                        b: eightB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer8d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + eightB.val()
                    });
                    firebase.database().ref('user/8').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer8("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: eight && eight.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (eight && eight.val() !== "") && (eight && eight.val() !== "-") ? 'block' : 'none'
                }}>
                    {eight && eight.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>9. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player9}
                onChange={e => setPlayer9(e.target.value)} disabled={player9d} />
                <button onClick={() => {
                    setPlayer9d(true);
                    firebase.database().ref('user/9').update({
                        name: player9,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{nineB && nineB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/9').update({
                        b: nineB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/9').update({
                        b: nineB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer9d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + nineB.val()
                    });
                    firebase.database().ref('user/9').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer9("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: nine && nine.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (nine && nine.val() !== "") && (nine && nine.val() !== "-") ? 'block' : 'none'
                }}>
                    {nine && nine.val()} 우승
                </button>

            </p>
            <p style={{ fontWeight: 'bold' }}>10. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player10}
                onChange={e => setPlayer10(e.target.value)}
                disabled={player10d} />
                <button onClick={() => {
                    setPlayer10d(true);
                    firebase.database().ref('user/10').update({
                        name: player10,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{tenB && tenB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/10').update({
                        b: tenB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/10').update({
                        b: tenB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer10d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + tenB.val()
                    });
                    firebase.database().ref('user/10').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer10("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: ten && ten.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);
                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (ten && ten.val() !== "") && (ten && ten.val() !== "-") ? 'block' : 'none'
                }}>
                    {ten && ten.val()} 우승
                </button>
            </p>
            <p style={{ fontWeight: 'bold' }}>11. <input style={{ width: '160px', fontWeight: 'bold' }} maxLength="5"
                type="text" value={player11}
                onChange={e => setPlayer11(e.target.value)}
                disabled={player11d} />
                <button onClick={() => {
                    setPlayer11d(true);
                    firebase.database().ref('user/11').update({
                        name: player11,
                        b: 0
                    });
                }}>
                    입력
                </button>
                <p style={{
                    display: 'inline',
                    marginLeft: '10px',
                    marginRight: '10px',
                    fontWeight: 'bold'
                }}>{elevenB && elevenB.val()}</p>
                <button style={{
                    display: modify ? 'none' : 'inline',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/11').update({
                        b: elevenB.val() + 1
                    })
                }}>+
                </button>
                <button style={{
                    display: modify ? 'inline' : 'none',
                    width: '40px'
                }} onClick={() => {
                    firebase.database().ref('user/11').update({
                        b: elevenB.val() - 1
                    })
                }}>-
                </button>

                --------
                <button onClick={() => {
                    setPlayer11d(false);
                    firebase.database().ref('user/sub').update({
                        b: subB.val() + elevenB.val()
                    });
                    firebase.database().ref('user/11').update({
                        name: "-",
                        b: 0
                    });

                    setPlayer11("");
                }}>
                    x
                </button>
                <button onClick={() => {
                    firebase.database().ref('winner/' + moment().format('LLL')).update({
                        date: moment().format('LLL'),
                        name: eleven && eleven.val(),
                        totalB: total,
                        type: type && type.val()
                    });
                    setWinnerD(false);

                }} style={{
                    marginLeft: '16px',
                    marginTop: '8px',
                    display: winnerD && (eleven && eleven.val() !== "") && (eleven && eleven.val() !== "-") ? 'block' : 'none'
                }}>
                    {eleven && eleven.val()} 우승
                </button>
            </p>

            <button
                onClick={() => {
                    setWinnerD(true);
                }
                }
                style={{
                    width: '300px',
                    fontWeight: "bold",
                    fontSize: '20px',
                    border: "none",
                    borderRadius: '4px',
                    backgroundColor: '#28C41B',
                    marginTop: '20px',
                    marginBottom: '20px',
                    display: winnerD ? "none" : 'block'
                }}>
                우승자 선정
            </button>

            <button style={{
                display: 'block',
                marginBottom: '20px',
                width: '300px',
                fontWeight: "bold",
                fontSize: '20px',
                border: "none",
                borderRadius: '4px',
                backgroundColor: '#6981DF'
            }} onClick={() => {
                ; firebase.database().ref('timer').update({
                    trigger: 2
                });
                firebase.database().ref('user/sub').update({
                    b: 0
                });
                firebase.database().ref('user/1').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/2').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/3').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/4').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/5').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/6').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/7').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/8').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/9').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/10').update({
                    name: "",
                    b: 0
                });
                firebase.database().ref('user/11').update({
                    name: "",
                    b: 0
                });
                setPlayer1("");
                setPlayer1d(false);
                setPlayer2("");
                setPlayer2d(false);
                setPlayer3("");
                setPlayer3d(false);
                setPlayer4("");
                setPlayer4d(false);
                setPlayer5("");
                setPlayer5d(false);
                setPlayer6("");
                setPlayer6d(false);
                setPlayer7("");
                setPlayer7d(false);
                setPlayer8("");
                setPlayer8d(false);
                setPlayer9("");
                setPlayer9d(false);
                setPlayer10("");
                setPlayer10d(false);
                setPlayer11("");
                setPlayer11d(false);

            }}>
                플레이어 명단 초기화
            </button>
            <button style={{
                width: '300px',
                fontWeight: "bold",
                fontSize: '20px',
                border: "none",
                borderRadius: '4px',
                backgroundColor: '#DF5F5B'
            }} onClick={() => {
                firebase.database().ref('timer').update({
                    blind: 1
                });
                firebase.database().ref('timer').update({
                    level: 1
                });
                firebase.database().ref('timer').update({
                    trigger: 3
                });

                firebase.database().ref('timer').update({
                    time: 0
                });

                setIsTemp(false);
                setTemp(0);
                setWinnerD(false);
                firebase.database().ref('next').update({
                    count: 0
                });

            }}>
                게임종료, 레벨 초기화
            </button>
            <h2>

            </h2>

            <div style={{ marginTop: '20px' }}>
                <h1>NextGame config</h1>
            </div>
            <h3>테이블 번호</h3>
            <button onClick={
                () => {
                    firebase.database().ref('next').update({
                        table: 1
                    });
                }
            }>1
            </button>
            <button onClick={
                () => {
                    firebase.database().ref('next').update({
                        table: 2
                    });
                }
            }>2
            </button>
            <h3>게임 타입</h3>
            <button onClick={
                () => {
                    firebase.database().ref('next').update({
                        type: "Daily"
                    });
                }
            }>Daily
            </button>
            <button onClick={
                () => {
                    firebase.database().ref('next').update({
                        type: "KSOP Seed"
                    });
                }
            }>KSOP Seed
            </button>
            <button onClick={
                () => {
                    firebase.database().ref('next').update({
                        type: "Monster"
                    });
                }
            }>Monster
            </button>
            <h3>남은시간 설정</h3>
            <input type="text" value={nextCount} onChange={e => setNextCount(e.target.value)} />
            <button style={{ marginBottom: '20px' }} onClick={() => {
                firebase.database().ref('next').update({
                    count: nextCount
                });
            }}>남은 시간 설정
            </button>
        </div>
    );
};
export default Dealer;
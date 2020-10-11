import React, { Fragment, useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { useObject } from 'react-firebase-hooks/database';
import useInterval from "react-useinterval";
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import back from '../static/back1.png'
import beep from '../static/beep.mp3'

const Monitor = () => {

    let audio = new Audio(beep);
    const [blindDB] = useObject(firebase.database().ref('/timer/blind'));
    const [levelDB] = useObject(firebase.database().ref('/timer/level'));
    const [nextGameTable] = useObject(firebase.database().ref('/next/table'));
    const [nextGameType] = useObject(firebase.database().ref('/next/type'));
    const [nextGameCount] = useObject(firebase.database().ref('/next/count'));
    const [trigger] = useObject(firebase.database().ref('/timer/trigger'));
    const [type] = useObject(firebase.database().ref('/timer/gametype'));
    const [total, setTotal] = useState(0);

    const [seconds] = useObject(firebase.database().ref('/timer/seconds'));
    const [minutes] = useObject(firebase.database().ref('/timer/minutes'));

    const [wait] = useObject(firebase.database().ref('/wait/name'));
    const [waitList, setWaitList] = useState([]);

    const [tempTime] = useObject(firebase.database().ref('/timer/time'));
    //명단
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
    //buy-in
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

    useInterval(() => {
        if (trigger && trigger.val() === 1) {
            if (seconds && seconds.val() > 0) {
                firebase.database().ref('timer').update({
                    seconds: seconds.val() - 1,
                });
            }

            if (seconds && seconds.val() === 0) {

                if (nextGameCount && nextGameCount.val() !== 0) {
                    firebase.database().ref('next').update({
                        count: nextGameCount.val() - 1
                    });
                }

                if (minutes && minutes.val() === 0) {
                    audio.play();
                    if (tempTime && tempTime.val() !== 0) {

                        firebase.database().ref('timer').update({
                            minutes: tempTime && tempTime.val() - 1,
                        });
                        firebase.database().ref('timer').update({
                            seconds: 59,
                        });

                    } else {
                        if (type.val() === "TSO") {
                            if (levelDB && levelDB.val() < 6) {

                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 1
                                })
                            }
                            else {

                                if (blindDB && blindDB.val() === 6) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 2
                                    })
                                }

                                else if (blindDB && blindDB.val() === 8) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 2
                                    })
                                }
                                else if (blindDB && blindDB.val() >= 10 && blindDB && blindDB.val() < 60) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 10
                                    })
                                }
                                else if (blindDB && blindDB.val() === 60) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 20
                                    })
                                }
                                else if (blindDB && blindDB.val() === 80) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 20
                                    })
                                }
                                else if (blindDB && blindDB.val() > 80) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 100
                                    })
                                }
                            }

                            firebase.database().ref('timer').update({
                                seconds: 59,
                            });
                        }
                        if (type.val() === "Tournament") {
                            if (levelDB && levelDB.val() < 5) {

                                if (blindDB && blindDB.val() < 5) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 1
                                    })
                                } else if (blindDB && blindDB.val() === 5) {
                                    firebase.database().ref('timer/').update({
                                        blind: 10
                                    })
                                } else if (blindDB && blindDB.val() >= 10 && blindDB && blindDB.val() < 100) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 10
                                    })
                                } else if (blindDB && blindDB.val() >= 100 && blindDB && blindDB.val() < 1000) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 100
                                    })
                                }
                                else if (blindDB && blindDB.val() >= 1000 && blindDB && blindDB.val() < 10000) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 1000
                                    })
                                }


                            } else {



                                if (blindDB && blindDB.val() < 5) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 1
                                    })
                                } else if (blindDB && blindDB.val() === 5) {
                                    firebase.database().ref('timer/').update({
                                        blind: 10
                                    })
                                } else if (blindDB && blindDB.val() >= 10 && blindDB && blindDB.val() < 100) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 10
                                    })
                                } else if (blindDB && blindDB.val() >= 100 && blindDB && blindDB.val() < 1000) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 100
                                    })
                                }
                                else if (blindDB && blindDB.val() >= 1000 && blindDB && blindDB.val() < 10000) {
                                    firebase.database().ref('timer/').update({
                                        blind: blindDB.val() + 1000
                                    })
                                }
                            }

                        }
                        if (type.val() === "Monster") {

                            if (blindDB && blindDB.val() < 10) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 1
                                })
                            } else if (blindDB && blindDB.val() >= 10 && blindDB && blindDB.val() < 50) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 10
                                })
                            } else if (blindDB && blindDB.val() === 50) {
                                firebase.database().ref('timer/').update({
                                    blind: 100
                                })
                            } else if (blindDB && blindDB.val() >= 100 && blindDB && blindDB.val() < 500) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 100
                                })
                            } else if (blindDB && blindDB.val() === 500) {
                                firebase.database().ref('timer/').update({
                                    blind: 1000
                                })
                            } else if (blindDB && blindDB.val() >= 1000 && blindDB && blindDB.val() < 5000) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 1000
                                })
                            } else if (blindDB && blindDB.val() === 5000) {
                                firebase.database().ref('timer/').update({
                                    blind: 10000
                                })
                            } else if (blindDB && blindDB.val() >= 10000 && blindDB && blindDB.val() < 50000) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 10000
                                })
                            }
                        }
                        if (type.val() === "FastDaily") {
                            if (blindDB && blindDB.val() === 5 || blindDB && blindDB.val() === 50 || blindDB && blindDB.val() === 500 || blindDB && blindDB.val() === 5000) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() * 2
                                })
                            } else if (blindDB && blindDB.val() < 5) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 2
                                })
                            } else if (blindDB && blindDB.val() >= 10 && blindDB && blindDB.val() < 100) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 20
                                })
                            } else if (blindDB && blindDB.val() >= 100 && blindDB && blindDB.val() < 1000) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 100
                                })
                            } else if (blindDB && blindDB.val() >= 1000 && blindDB && blindDB.val() < 10000) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 1000
                                })
                            }

                        }
                        if (type.val() === "Daily" || type.val() === "KSOP Seed") {


                            if (blindDB && blindDB.val() === 5 || blindDB && blindDB.val() === 50 || blindDB && blindDB.val() === 500) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() * 2
                                })
                            } else if (blindDB && blindDB.val() < 5) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 1
                                })
                            } else if (blindDB && blindDB.val() >= 10 && blindDB && blindDB.val() < 50) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 10
                                })
                            } else if (blindDB && blindDB.val() >= 100 && blindDB && blindDB.val() < 500) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 100
                                })
                            } else if (blindDB && blindDB.val() >= 1000 && blindDB && blindDB.val() < 5000) {
                                firebase.database().ref('timer/').update({
                                    blind: blindDB.val() + 10000
                                })
                            }


                        }


                    }
                       firebase.database().ref('timer').update({
                        minutes: minutes.val() - 1,
                    });

                    firebase.database().ref('timer').update({
                        seconds: 59,
                    });
                    firebase.database().ref('timer/').update({
                        level: levelDB.val() + 1
                    })

                }
                else {
                    firebase.database().ref('timer').update({
                        minutes: minutes.val() - 1,
                    });

                    firebase.database().ref('timer').update({
                        seconds: 59,
                    });
                }
            }
        }
    }, 1000);
    useEffect(() => {
        console.log(wait && wait.val().toString().split('/'));
        if (tempTime && tempTime.val() !== 0) {
            firebase.database().ref('timer').update({
                minutes: tempTime.val(),
            });

            firebase.database().ref('timer').update({
                seconds: 0,
            });
        }

    }, [type, tempTime]);

    useEffect(() => {
        setWaitList(wait && wait.val().toString().split("/"));
    }, [wait]);

    useEffect(() => {
        var text = "";
        console.log(waitList)
        // for(var i=1;i<waitList.length;i++){
        //      text = text + i + " " + waitList[i].toString();
        // }

    }, [waitList]);


    useEffect(() => {
        if (subB && oneB && twoB && threeB && sevenB && eightB && nineB && tenB && elevenB) {
            setTotal(subB.val() + oneB.val() + twoB.val() + threeB.val() + fourB.val() + fiveB.val() + sixB.val() + sevenB.val() + eightB.val() + nineB.val() + tenB.val() + elevenB.val())
        }
    }, [oneB, twoB, threeB, fourB, fiveB, sixB, sevenB, eightB, nineB, tenB, elevenB, subB]);

    return (
        <div style={{
            minHeight: "100%",
            height: "100vh",
            backgroundImage: "url(" + back + ")",
            backgroundSize: '100% 100%'
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap"
                rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap"
                rel="stylesheet"></link>
            <div style={{ color: 'white', paddingRight: '30px', fontFamily: `Nanum Gothic, sans-serif` }}>
                <Row>
                    <Col span={18}>
                        <Row align={'middle'}>
                            <Col span={6}>
                                <Row justify={'center'} style={{ fontSize: '60px', paddingTop: '20px' }}>
                                    <div>{type && type.val()}</div>
                                </Row>
                                <Row justify={'center'} style={{ fontSize: '50px' }}>
                                    Table 1
                                </Row>
                            </Col>
                            <Col span={4}></Col>
                            <Col span={14}
                                style={{
                                    fontSize: '100px',
                                    fontFamily: `Roboto, sans-serif`
                                }}>LV. {levelDB && levelDB.val()}</Col>
                        </Row>

                        <Row align={'middle'}>
                            <Col
                                style={{ marginLeft: (type && type.val() !== "FastDaily") && (type && type.val() !== "TSO") && (type && type.val() !== "Monster") && (type && type.val() !== "Tournament") ? '25%' : '0%', }}
                                span={12}>
                                <Row justify={'center'} style={{ fontSize: '110px', lineHeight: '1.2' }}>SB / BB</Row>
                                <Row justify={'center'}
                                    style={{
                                        color: 'yellow',
                                        fontSize: '110px',
                                        lineHeight: '1.2'
                                    }}>{blindDB && blindDB.val()} / {blindDB && blindDB.val() * 2}</Row>
                            </Col>
                            {(type && type.val() === "Monster") || (type && type.val() === "Tournament")
                                ?
                                <Col span={12}>
                                    <Row justify={'center'} style={{ fontSize: '110px', lineHeight: '1.2' }}>ANTE</Row>
                                    <Row justify={'center'}
                                        style={{
                                            color: 'yellow',
                                            fontSize: '110px',
                                            lineHeight: '1.2'
                                        }}>{levelDB && levelDB.val() >= 3 ? blindDB && blindDB.val() * 2 : 0}</Row>
                                </Col>
                                : <Fragment />
                            }
                            {type && type.val() === "FastDaily"
                                ?
                                <Col span={12}>
                                    <Row justify={'center'} style={{ fontSize: '110px', lineHeight: '1.2' }}>ANTE</Row>
                                    <Row justify={'center'}
                                        style={{
                                            color: 'yellow',
                                            fontSize: '110px',
                                            lineHeight: '1.2'
                                        }}>{levelDB && levelDB.val() >= 4 ? blindDB && blindDB.val() * 2 : 0}</Row>
                                </Col>
                                :
                                <></>
                            }
                            {type && type.val() === "TSO"
                                ?
                                <Col span={12}>
                                    <Row justify={'center'} style={{ fontSize: '110px', lineHeight: '1.2' }}>ANTE</Row>
                                    <Row justify={'center'}
                                        style={{
                                            color: 'yellow',
                                            fontSize: '110px',
                                            lineHeight: '1.2'
                                        }}>{levelDB && levelDB.val() >= 5 ? blindDB && blindDB.val() * 2 : 0}</Row>
                                </Col>
                                :
                                <></>
                            }

                        </Row>
                        <Row justify={'center'}>
                            <div style={{
                                fontSize: '33em',
                                lineHeight: '0.95'
                            }}>{minutes && minutes.val()}:{seconds && seconds.val() < 10 ? '0' + seconds && seconds.val() : seconds && seconds.val()}</div>
                        </Row>
                    </Col>

                    <Col span={6}>
                        <div style={{ height: '10%', paddingTop: '1px' }}>
                            <Row justify={'center'} style={{ fontSize: '60px' }}>Next Game</Row>
                            <Row justify={'center'}
                                style={{ fontSize: '32px' }}>Table{nextGameTable && nextGameTable.val()} &nbsp;&nbsp; {nextGameType && nextGameType.val()}</Row>
                            <Row justify={'center'}
                                style={{
                                    fontSize: '32px',
                                    color: '#ff2221',
                                    fontFamily: `Nanum Gothic, sans-serif`
                                }}>{nextGameCount && nextGameCount.val()}분
                                뒤</Row>
                        </div>
                        <div style={{ height: '15%' }}>

                        </div>
                        <div style={{ height: '70%' }}>
                            <Row style={{ fontSize: '38px', textAlign: 'center' }}>
                                <Col span={5}></Col>
                                <Col span={10}>Name</Col>
                                <Col span={9}>Buy-in</Col>
                            </Row>
                            <Row
                                style={{ border: '1px solid', textAlign: 'center', fontSize: '35px', lineHeight: '1.5' }}>
                                <Col span={24}>

                                    <Row style={{ display: one && one.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>1.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{one && one.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{oneB && oneB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: two && two.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: two && two.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>2.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{two && two.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{twoB && twoB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: three && three.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: three && three.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>3.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{three && three.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{threeB && threeB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: four && four.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: four && four.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>4.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{four && four.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{fourB && fourB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: five && five.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: five && five.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>5.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{five && five.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{fiveB && fiveB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: six && six.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: six && six.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>6.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{six && six.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{sixB && sixB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: seven && seven.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: seven && seven.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>7.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{seven && seven.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{sevenB && sevenB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: eight && eight.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: eight && eight.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>8.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{eight && eight.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{eightB && eightB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: nine && nine.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: nine && nine.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>9.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{nine && nine.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{nineB && nineB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: ten && ten.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: ten && ten.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>10.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{ten && ten.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{tenB && tenB.val()}</Col>
                                    </Row>
                                    <Row style={{
                                        borderBottom: '1px solid',
                                        marginLeft: '5%',
                                        marginRight: '7%',
                                        visibility: eleven && eleven.val() !== "" ? 'visible' : 'hidden'
                                    }}></Row>

                                    <Row style={{ display: eleven && eleven.val() !== "" ? 'flex' : 'none' }}>
                                        <Col span={5} style={{ fontFamily: `Roboto, sans-serif` }}>11.</Col>
                                        <Col span={10} style={{
                                            fontFamily: `Nanum Gothic, sans-serif`,
                                            color: 'rgb(255,215,0)'
                                        }}>{eleven && eleven.val()}</Col>
                                        <Col span={9} style={{ color: 'rgb(255,215,0)' }}>{elevenB && elevenB.val()}</Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{ right: '1px' }}>
                                <Col span={22} style={{ fontSize: '33px', textAlign: 'end' }}>Total {total}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>


                <Row align={'middle'} style={{ fontSize: '33px', lineHeight: '1.6', paddingTop: '25px' }}>
                    <Col span={2} style={{ textAlign: 'center' }}>Waiting</Col>
                    <Col span={22}
                        style={{ border: '1px solid' }}>&nbsp;{wait && wait.val().toString().split("/").join(" ♠")}</Col>
                </Row>

            </div>
        </div>
    )
};

export default Monitor;
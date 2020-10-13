import React from "react";
import * as firebase from 'firebase';
import { useObject } from 'react-firebase-hooks/database';
import back from '../static/table.png'
import buyin1 from '../static/buyin1.png'
import buyin2 from '../static/buyin2.png'
import buyin3 from '../static/buyin3.png'
import buyin4 from '../static/buyin4.png'



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
    const [totalB] = useObject(firebase.database().ref('/user/totalBuyin'));

    return (
        <div style={{
            position: 'static',
            minHeight: "100%",
            height: "100vh",
            backgroundImage: "url(" + back + ")",
            backgroundSize: '100% 100%'
        }}>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet" />
            <div style={{ fontSize: '4em', color: 'white', fontFamily: `Noto Sans KR, sans-serif` }}>
                <div>
                    <span style={{ position: 'absolute', top: '120px', right: '500px' }}>1.&nbsp;{one && one.val()}</span>
                    {oneB && oneB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '310px', right: '620px' }} />
                        :
                        <></>
                    }
                    {oneB && oneB.val() === 2 ?
                        <div>
                            <img src={buyin2} style={{ position: 'absolute', top: '310px', right: '620px' }} />

                        </div>
                        :
                        <></>
                    }
                    {oneB && oneB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '310px', right: '620px' }} />

                        </div>
                        :
                        <></>
                    }
                    {oneB && oneB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '310px', right: '620px' }} />

                        </div>
                        :
                        <></>
                    }

                </div>
                <div>
                    <span style={{ position: 'absolute', top: '270px', right: '30px' }}>2.&nbsp;{two && two.val()}</span>
                    {twoB && twoB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '370px', right: '320px' }} />
                        :
                        <></>
                    }
                    {twoB && twoB.val() === 2 ?
                        <div>
                            <img src={buyin2} style={{ position: 'absolute', top: '370px', right: '320px' }} />

                        </div>
                        :
                        <></>
                    }
                    {twoB && twoB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '370px', right: '320px' }} />
                        </div>
                        :
                        <></>
                    }
                    {twoB && twoB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '370px', right: '320px' }} />
                        </div>
                        :
                        <></>
                    }

                </div>
                <div>
                    <span style={{ position: 'absolute', top: '610px', right: '30px' }}>3.&nbsp;{three && three.val()}</span>
                    {threeB && threeB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '540px', right: '280px' }} />
                        :
                        <></>
                    }
                    {threeB && threeB.val() === 2 ?
                        <div>
                            <img src={buyin2} style={{ position: 'absolute', top: '540px', right: '280px' }} />

                        </div>
                        :
                        <></>
                    }
                    {threeB && threeB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '540px', right: '280px' }} />
                        </div>
                        :
                        <></>
                    }
                    {threeB && threeB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '540px', right: '280px' }} />
                        </div>
                        :
                        <></>
                    }


                </div>
                <div>
                    <span style={{ position: 'absolute', top: '945px', right: '160px' }}>4.&nbsp;{four && four.val()}</span>
                    {fourB && fourB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '740px', right: '410px' }} />
                        :
                        <></>
                    }
                    {fourB && fourB.val() === 2 ?
                        <div>


                            <img src={buyin2} style={{ position: 'absolute', top: '740px', right: '410px' }} />
                        </div>
                        :
                        <></>
                    }
                    {fourB && fourB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '740px', right: '410px' }} />
                        </div>
                        :
                        <></>
                    }
                    {fourB && fourB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '740px', right: '410px' }} />
                        </div>
                        :
                        <></>
                    }
                </div>
                <div>
                    <span style={{ position: 'absolute', top: '995px', right: '620px' }}>5.&nbsp;{five && five.val()}</span>
                    {fiveB && fiveB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '760px', right: '700px' }} />

                        :
                        <></>
                    }
                    {fiveB && fiveB.val() === 2 ?
                        <div>

                            <img src={buyin2} style={{ position: 'absolute', top: '760px', right: '700px' }} />


                        </div>
                        :
                        <></>
                    }
                    {fiveB && fiveB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '760px', right: '700px' }} />

                        </div>
                        :
                        <></>
                    }
                    {fiveB && fiveB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '760px', right: '700px' }} />

                        </div>
                        :
                        <></>
                    }

                </div>
                <div>
                    <span style={{ position: 'absolute', top: '995px', left: '730px' }}>6.&nbsp;{six && six.val()}</span>
                    {sixB && sixB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '760px', left: '700px' }} />

                        :
                        <></>
                    }
                    {sixB && sixB.val() === 2 ?
                        <div>

                            <img src={buyin2} style={{ position: 'absolute', top: '760px', left: '700px' }} />

                        </div>
                        :
                        <></>
                    }
                    {sixB && sixB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '760px', left: '700px' }} />
                        </div>
                        :
                        <></>
                    }
                    {sixB && sixB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '760px', left: '700px' }} />
                        </div>
                        :
                        <></>
                    }


                </div>
                <span style={{ position: 'absolute', top: '955px', left: '200px' }}>7.&nbsp;{seven && seven.val()}</span>
                {sevenB && sevenB.val() === 1 ?
                    <img src={buyin1} style={{ position: 'absolute', top: '740px', left: '410px' }} />

                    :
                    <></>
                }
                {sevenB && sevenB.val() === 2 ?
                    <div>
                        <img src={buyin2} style={{ position: 'absolute', top: '740px', left: '410px' }} />


                    </div>
                    :
                    <></>
                }
                {sevenB && sevenB.val() === 3 ?
                    <div>
                        <img src={buyin3} style={{ position: 'absolute', top: '740px', left: '410px' }} />
                    </div>
                    :
                    <></>
                }
                {sevenB && sevenB.val() === 4 ?
                    <div>
                        <img src={buyin4} style={{ position: 'absolute', top: '740px', left: '410px' }} />
                    </div>
                    :
                    <></>
                }

                <div>
                    <span style={{ position: 'absolute', top: '615px', left: '20px' }}>8.&nbsp;{eight && eight.val()}</span>
                    {eightB && eightB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '540px', left: '280px' }} />

                        :
                        <></>
                    }
                    {eightB && eightB.val() === 2 ?
                        <div>
                            <img src={buyin2} style={{ position: 'absolute', top: '540px', left: '280px' }} />


                        </div>
                        :
                        <></>
                    }
                    {eightB && eightB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '540px', left: '280px' }} />
                        </div>
                        :
                        <></>
                    }
                    {eightB && eightB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '540px', left: '280px' }} />
                        </div>
                        :
                        <></>
                    }

                </div>
                <div>
                    <span style={{ position: 'absolute', top: '250px', left: '90px' }}>9.&nbsp;{nine && nine.val()}</span>
                    {nineB && nineB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '370px', left: '320px' }} />

                        :
                        <></>
                    }
                    {nineB && nineB.val() === 2 ?
                        <div>
                            <img src={buyin2} style={{ position: 'absolute', top: '370px', left: '320px' }} />

                        </div>
                        :
                        <></>
                    }
                    {nineB && nineB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '370px', left: '320px' }} />
                        </div>
                        :
                        <></>
                    }
                    {nineB && nineB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '370px', left: '320px' }} />
                        </div>
                        :
                        <></>
                    }

                </div>
                <div>
                    <span style={{ position: 'absolute', top: '120px', left: '540px' }}>10.&nbsp;{ten && ten.val()}</span>
                    {tenB && tenB.val() === 1 ?
                        <img src={buyin1} style={{ position: 'absolute', top: '310px', left: '620px' }} />

                        :
                        <></>
                    }
                    {tenB && tenB.val() === 2 ?
                        <div>

                            <img src={buyin2} style={{ position: 'absolute', top: '310px', left: '620px' }} />
                        </div>
                        :
                        <></>
                    }
                    {tenB && tenB.val() === 3 ?
                        <div>
                            <img src={buyin3} style={{ position: 'absolute', top: '310px', left: '620px' }} />

                        </div>
                        :
                        <></>
                    }
                    {tenB && tenB.val() === 4 ?
                        <div>
                            <img src={buyin4} style={{ position: 'absolute', top: '310px', left: '620px' }} />

                        </div>
                        :
                        <></>
                    }


                </div>
            </div>
        </div>
    )
}

export default Table;

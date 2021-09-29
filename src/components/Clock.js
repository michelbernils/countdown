import React, {Fragment} from 'react'

export const Clock = ( {timerDays, timerHours, timerMinutes} ) => {
    

    
    return <Fragment>
                <section className="timer-container">
                    <section className="timer"> 
                        <div className="clock">
                            <section>
                                <p>{timerDays}</p>
                                {/* <small>dia(s)</small> */}
                            </section>
                            <span>:</span>
                            <section>
                                <p>{timerHours}</p>
                                {/* <small>hora(s)</small> */}
                            </section>
                            <span>:</span>
                            <section>
                                <p>{timerMinutes}</p>
                                {/* <small>minuto(s)</small> */}
                            </section>
                        </div>
                    </section>
                </section>
            </Fragment>
}

export default Clock;

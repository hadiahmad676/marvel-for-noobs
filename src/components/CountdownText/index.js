import React, { Component } from "react";
import Countdown from "react-countdown";

const Complete = () => <span>In theaters now!</span>;

const CountdownText = ({ timetill, name }) => (
    <div>
        <h3 className="countdown-name">{name}</h3>
        <div className="countdown-wrapper countdowntext-time">
            <Countdown date={timetill}>
                <Complete />
            </Countdown>
        </div>
    </div>
);

export default CountdownText;
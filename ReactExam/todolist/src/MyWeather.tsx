import React from 'react';

interface MyProps {
    weather : string;
}

const MyWeather : React.FC<MyProps> = (props) => {
    return (
        <div>
            오늘의 날씨는 {props.weather} 입니다. 
        </div>
    )
}

export default MyWeather;

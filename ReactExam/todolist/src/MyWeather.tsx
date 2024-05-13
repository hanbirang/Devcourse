import React from 'react';

interface MyProps {
    weather : string;
    children : React.ReactNode;
}

const MyWeather : React.FC<MyProps> = (props) => {
    return (
        <div>
            {props.children}<p />
            오늘의 날씨는 {props.weather} 입니다. 
        </div>
    )
}

export default MyWeather;

import React from 'react';

function Minibar(props) {
    return (
        <ul className={"bar"}>
            <li className={"minibar fill"}/>
            <li className={"minibar pulse"}/>
            <li className={"minibar close"}/>
            <li className={"minibar raise"}/>
            <li className={"minibar up"}/>
            <li className={"minibar slide"}/>
        </ul>
    );
}

export default Minibar;
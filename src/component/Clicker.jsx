import React, { useState } from 'react'
import './Button.css';

const Clicker = ({ value }) => {
    const [num, setNum] = useState(value); // useState(value ?? 0)
    const [isDark, setIsDark] = useState(!!value%2);

    const clickHandler = (ev) => {
        setNum(num + 1);
        setIsDark(!isDark);
    };

    return (
        <button className={"btn" + (isDark ? " btn-dark" : "")} onClick={clickHandler}>
            Clicker {num}
        </button >
    );
};



// class Clicker extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             num: props.value,
//             isDark: false
//         }

//         this.clickHandler = this.clickHandler.bind(this);
//     }

//     clickHandler(ev) {
//         const newState = {
//             num: this.state.num + 1,
//             isDark: !this.state.isDark
//         }
//         this.setState(newState)
//     }

//     render() {
//         return (
//             <button
//                 className={"btn" + (this.state.isDark ? " btn-dark" : "")}
//                 onClick={this.clickHandler}
//             >
//                 Clicker {this.state.num}
//             </button>
//         );
//     }
// }


// Установка свойства value по умолчанию в 0
Clicker.defaultProps = {
    value: 0
};

export default Clicker;

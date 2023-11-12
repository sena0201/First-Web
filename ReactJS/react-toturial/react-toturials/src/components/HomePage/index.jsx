import { useState } from 'react';
import './style.scss';

const HomePage = (props) => {

    const [count, setCount] = useState(0)

    const handleHomeClick = (e) => {
        setCount(count + 1)
    }
    return (
        <div className="home">
            <p className="home__title">Hello {props.name}, I'm {props.age} years old</p>
            <div className="home__desc">
                <a href='#' className="home__desc--active" onClick={handleHomeClick}>Click me</a>
                <p>{count}</p>
            </div>
        </div>
    )
}

export default HomePage
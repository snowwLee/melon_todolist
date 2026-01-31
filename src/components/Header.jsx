import './Header.css'
import melon from '../assets/melon.png'

const Header = () =>{
    return <div className="Header">
        <h3><img className="melon" src={melon} alt="뿌메론"/>오늘은 </h3>
        <h1>{new Date().toDateString()}</h1>
    </div>
};

export default Header;
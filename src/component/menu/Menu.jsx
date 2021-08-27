import './menu.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Menu = ({ isActive, setIsActive }) => {
  return (
    <div className={'menu ' + (isActive && 'active')}>
      <ArrowForwardIosIcon
        className="arrow"
        onClick={() => setIsActive(false)}
      />
      <ul>
        <li onClick={() => setIsActive(false)}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={() => setIsActive(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setIsActive(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setIsActive(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setIsActive(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

import './topbar.scss';
import { Email, Person } from '@material-ui/icons';
const Topbar = ({ isActive, setIsActive }) => {
  return (
    <div className={isActive ? 'topbar active' : 'topbar'}>
      <div className="wrapper">
        <div className="left">
          <a href="#info" className="logo">
            Mark.
          </a>
          <div className="contactContainer">
            <Person className="icon" />
            <span>+01786-066566</span>
          </div>
          <div className="contactContainer">
            <Email className="icon" />
            <span>ashikex49@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setIsActive(!isActive)}>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

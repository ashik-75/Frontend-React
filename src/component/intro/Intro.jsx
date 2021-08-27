import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { ArrowDownward } from '@material-ui/icons';

const Intro = () => {
  const inputRef = useRef();

  useEffect(() => {
    init(inputRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ['React', 'Js', 'Node', 'Express', 'Redux'],
    });
  }, []);
  return (
    <div className="info" id="intro">
      <div className="left">
        <img src="asset/bro.png" alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi, There How are you?</h1>
          <h2>I'm Ashik</h2>

          <h2>
            Professional , <span ref={inputRef}></span>
          </h2>
        </div>
        <a href="#portfolio">
          <ArrowDownward className="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

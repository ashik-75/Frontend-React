import React from 'react';

const PortfolioList = ({ title, active, setData }) => {
  return (
    <li className={active && 'active'} onClick={() => setData(title)}>
      {title}
    </li>
  );
};

export default PortfolioList;

import './portfolio.scss';
import { useState } from 'react';
import PortfolioList from '../PortfolioList/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from '../../data';
import { useEffect } from 'react';

const list = [
  {
    id: 1,
    title: 'Featured',
  },
  {
    id: 2,
    title: 'Web',
  },
  {
    id: 3,
    title: 'Mobile',
  },
  {
    id: 4,
    title: 'Design',
  },
];

const Portfolio = () => {
  const [data, setData] = useState('Featured');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    switch (data) {
      case 'Featured':
        setProjects(featuredPortfolio);
        break;
      case 'Web':
        setProjects(webPortfolio);
        break;
      case 'Mobile':
        setProjects(mobilePortfolio);
        break;
      case 'Design':
        setProjects(designPortfolio);
        break;
      default:
        setProjects(featuredPortfolio);
    }
  }, [data]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((dt) => (
          <PortfolioList
            title={dt.title}
            active={data === dt.title}
            setData={setData}
          />
        ))}
      </ul>
      <div className="container">
        {projects.map((project) => (
          <div className="item">
            <img src={project.img} alt="" />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

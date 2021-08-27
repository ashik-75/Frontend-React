import React from 'react';
import { Link } from 'react-router-dom';

const menus = [
  {
    id: 1,
    title: 'part1',
    url: '/part/1',
  },
  {
    id: 2,
    title: 'part2',
    url: '/part/2',
  },
  {
    id: 3,
    title: 'part3',
    url: '/part/3',
  },
];

const SectionList = () => {
  return (
    <div>
      <ul>
        {menus.map((dt) => (
          <Link key={dt.id} to={dt.url}>
            <li>
              <span>{dt.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SectionList;

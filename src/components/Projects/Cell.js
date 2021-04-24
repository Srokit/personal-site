import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => {
  const githubLinkSection = (data.githubLink)
    ? (<h3><a href={data.githubLink}>Github Repo</a></h3>) : null;

  return (
    <div className="cell-container">
      <article className="mini-post">
        <header>
          <h3><a href={data.link}>{data.title}</a></h3>
          {githubLinkSection}
          <p>{data.date}</p>
        </header>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </article>
    </div>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;

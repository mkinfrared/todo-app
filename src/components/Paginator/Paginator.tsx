import React from "react";

import css from "components/Paginator/Paginator.module.scss";

const Paginator: React.FC = () => {
  const pages: React.ReactElement[] = [];

  for (let i = 1; i < 11; i++) {
    pages.push(<button key={i}>{i}</button>);
  }

  return <div className={css.Paginator}>{pages}</div>;
};

export default Paginator;

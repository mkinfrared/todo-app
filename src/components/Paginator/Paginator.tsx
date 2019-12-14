import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTasksSelector } from "store/reducers/tasks/selectors";
import css from "components/Paginator/Paginator.module.scss";

const Paginator: React.FC = () => {
  const tasks = useSelector(getTasksSelector);
  const pagesCount = tasks.length / 10 + 1;
  const pages: React.ReactElement[] = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <Link key={i} to={`/tasks/${i}`}>
        {i}
      </Link>
    );
  }

  return <div className={css.Paginator}>{pages}</div>;
};

export default Paginator;

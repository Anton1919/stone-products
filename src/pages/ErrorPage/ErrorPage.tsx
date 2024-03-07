import { FC } from 'react';
import { Link, useRouteError } from 'react-router-dom';

export const ErrorPage: FC = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <Link to={'/'}> Back</Link>
    </div>
  );
};

import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <div>
      <img src="" alt="logo" />
      <Link to="/">Главная</Link>
      <Link to="/сatalog">Каталог</Link>
      <Link to="/">Акции</Link>
      <Link to="/">Блог</Link>
      <Link to="/">Сотрудничество</Link>
    </div>
  );
};

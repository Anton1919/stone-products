import { Outlet } from 'react-router-dom';
import { Header } from '../shared/ui-kit/Header';
import { Footer } from '../shared/ui-kit/Footer';
import { FC } from 'react';
import './styles/index.scss';
import s from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  return (
    <div className={s.layout}>
      <div className={s.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

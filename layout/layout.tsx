import { LayoutProps } from './layout.props';
import styles from './p.module.css';
import cn from 'classnames';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const Layout = ({ children}: LayoutProps): JSX.Element => {
  return (
    <>
      <Header/>
      <div className="">
        <Sidebar/>
        <div className="">
          {children}
        </div>
      </div>
      <Footer/>
    </>
  );
};

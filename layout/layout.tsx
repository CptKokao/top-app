import { LayoutProps } from './layout.props';
import styles from './layout.module.css';
import cn from 'classnames';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { Footer } from './footer/footer';

export const Layout = ({ children}: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <div className={styles.body}>
          {children}
      </div>
      <Footer className={styles.footer}/>
    </div>
  );
};

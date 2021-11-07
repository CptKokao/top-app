import { SidebarProps } from './sidebar.props';
import styles from './p.module.css';
import cn from 'classnames';

export const Sidebar = ({ ...props}: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};

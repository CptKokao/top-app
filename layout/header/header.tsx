import { HeaderProps } from './header.props';
import styles from './p.module.css';
import cn from 'classnames';

export const Header = ({ ...props}: HeaderProps): JSX.Element => {
  return (
    <div {...props}>
      Header
    </div>
  );
};

import { FooterProps } from './footer.props';
import styles from './p.module.css';
import cn from 'classnames';

export const Footer = ({ ...props}: FooterProps): JSX.Element => {
  return (
    <div {...props}>
      Footer
    </div>
  );
};

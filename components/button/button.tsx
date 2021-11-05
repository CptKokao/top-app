import styles from './button.module.css';
import { ButtonProps } from './button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ appearance, arrow, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost'
      })}
      {...props}
    >
      {children}
      {arrow && (
        <span className={cn(styles.arrow, {
          [styles.down]: arrow === 'down', 
          [styles.right]: arrow === 'right' 
        })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

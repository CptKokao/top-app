import { KeyboardEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import StartIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StartIcon 
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(e, i + 1)}
          tabIndex = {isEditable ? 0 : -1}
          key={i}
        />
      );
    });
    setRatingArray(updateArray);
  };

  const changeDisplay = (r: number) => {
    if(!isEditable) {
      return false;
    }
    constructRating(r);
  };

  const changeRating = (r: number) => {
    if(!isEditable || !setRating) {
      return false;
    }
    setRating(r);
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>,  r: number) => {
    if(e.code !== 'Space' || !setRating) {
      return false;
    }

    setRating(r);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};

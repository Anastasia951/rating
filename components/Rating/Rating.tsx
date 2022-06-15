import React, { useEffect, useState } from 'react'
import { IRatingProps } from './Rating.props'
import styles from './Rating.module.scss'
import Star from './star.svg'

import cn from 'classnames'

const Rating = ({
  isEditable,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )
  const fillStars = (num: number) => {
    if (isEditable) {
      initRating(num)
    }
  }
  const changeRating = (num: number) => {
    if (isEditable && setRating) {
      setRating(num)
    }
  }
  const handleSpace = (num: number, e: React.KeyboardEvent<SVGAElement>) => {
    if (e.code === 'Space' && setRating) {
      setRating(num)
    }
  }
  useEffect(() => {
    initRating(rating)
  }, [rating])

  const initRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((r: JSX.Element, i: number) => (
      <Star
        key={i}
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onClick={() => changeRating(i + 1)}
        onMouseEnter={() => fillStars(i + 1)}
        onMouseLeave={() => fillStars(rating)}
        onKeyDown={(e: React.KeyboardEvent<SVGAElement>) =>
          isEditable && handleSpace(i + 1, e)
        }
        tabIndex={isEditable ? 0 : -1}
      />
    ))
    setRatingArr(updatedArr)
  }
  return <div {...props}>{ratingArr.map((r, i) => r)}</div>
}

export default Rating

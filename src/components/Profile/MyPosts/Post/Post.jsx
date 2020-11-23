import React from 'react';
import s from './Post.module.css';
import myPhoto from '../../../../assets/images/img1.png'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.container}>
        <img src={myPhoto} />
        <div className={s.textContainer}>
          <div className={s.text}>
            {props.message}
          </div>
        </div>
      </div>
      <div className={s.likesNum}>
        <span className={s.like}>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;
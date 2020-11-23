import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.usersPage}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={styles.userPhoto} />
                    </NavLink>
                </div>
                <span>
                    <div className={styles.userName}>{user.name}</div>
                    <div className={styles.userStatus}>{user.status}</div>
                </span>
                <div>
                    {user.followed
                        ? <button className={styles.userPageBtn} disabled={followingInProgress
                            .some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className={styles.userPageBtn} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}

                </div>
            </span>

        </div>)
}

export default User;
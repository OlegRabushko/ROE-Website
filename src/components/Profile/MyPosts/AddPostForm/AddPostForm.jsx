import React from 'react';
import { Field, reduxForm } from "redux-form";
import s from '../MyPosts.module.css';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.textarea} component={"textarea"} name="postText" />
            </div>
            <div>
                <button className={s.postBtn}>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'profile-add-post' })(AddPostForm)

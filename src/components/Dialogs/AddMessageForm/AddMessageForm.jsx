import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import s from './AddMessageForm.module.css'

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textareaContainer}>
                <Field className={s.textarea} component={Textarea}
                    validate={[required, maxLength50]}
                    placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button className={s.messageBtn}>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm);


























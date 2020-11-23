import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
    posts: [
        { id: 1, message: 'Check input for validation', likesCount: 12 },
        { id: 2, message: 'If you want, you can try change my status)))', likesCount: 15 },
        { id: 3, message: 'All is good!', likesCount: 19 },
        { id: 4, message: 'Looking for a job...', likesCount: 8 }
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);

});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});



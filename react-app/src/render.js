import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"))

export let renderEntireTree = (stateParam, addPostIdeaParam, updateNewPostIdeaParam, addMessageParam, updateNewMessageParam) => {
    root.render(
        <BrowserRouter>
            <App
                state={stateParam}
                addPostIdea={addPostIdeaParam}
                updateNewPostIdea={updateNewPostIdeaParam}
                addMessage={addMessageParam}
                updateNewMessage={updateNewMessageParam}
            />
        </BrowserRouter>
    );
};

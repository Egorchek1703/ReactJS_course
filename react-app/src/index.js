import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import state, { addPostIdea, updateNewPostIdea, addMessage, updateNewMessage, subscribe } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById("root"))

let renderEntireTree = (stateParam, addPostIdeaParam, updateNewPostIdeaParam, addMessageParam, updateNewMessageParam) => {
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

// Функция передает местный renderEntireTree() в state.js не используя импорт
subscribe(renderEntireTree)

// Функция первоначального рендера страницы
renderEntireTree(state, addPostIdea, updateNewPostIdea, addMessage, updateNewMessage)

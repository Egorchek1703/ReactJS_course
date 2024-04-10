import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById("root"))

let renderEntireTree = (store) => {
    root.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPostIdea={store.addPostIdea.bind(store)}
                updateNewPostIdea={store.updateNewPostIdea.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
            />
        </BrowserRouter>
    );
};

store.subscribe(renderEntireTree)

renderEntireTree(store)

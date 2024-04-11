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
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    );
};

store.subscribe(renderEntireTree)

renderEntireTree(store)

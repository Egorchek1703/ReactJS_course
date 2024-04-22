import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContext';

import store from './redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById("root"))

let renderEntireTree = (store) => {
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App
                    store={store}
                />
            </StoreContext.Provider>
        </BrowserRouter>
    );
};

store.subscribe(() => {
    renderEntireTree(store)
})

renderEntireTree(store)

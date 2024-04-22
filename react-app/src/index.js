import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/redux-store';


const root = ReactDOM.createRoot(document.getElementById("root"))

let renderEntireTree = (store) => {
    root.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>
    );
};

// Присваиваем _callSubscriber получение updatedStore внутри store.js и вызов renderEntireTree() внутри index.js, но передавая в него обновленный store из store.js
store.subscribe(() => {
    // Обновляем значение store на каждый вызов функции
    // let updatedStore = structuredClone(store)
    // Вызываем функцию ререндера опираясь на обновленный store
    renderEntireTree(store)
})

renderEntireTree(store)

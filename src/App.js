import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Route } from 'react-router-dom';
import books from './container/books';
import bookDetails from './container/bookDetails';
import userBookList from './container/userBookList';
import cogknitColors from './container/cogknit';
import {store, persistor} from './store/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
         <Route exact path="/" component={books}/>
         <Route exact path="/bookDetails" component={bookDetails}/>
         <Route exact path="/my-book-list" component={userBookList}/>
         <Route exact path="/cogknit" component={cogknitColors}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

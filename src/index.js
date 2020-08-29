import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import { firebase } from './firebase/firebase';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>, document.getElementById('root')
);


firebase.auth().onAuthStateChanged((user) => {  
    console.log(/* eslint-disable */`
    ____________________________________________________

    ${user ? `Rawwwwrrrrrrrrrrrrr, yourrrrrrrrrrrr email issssssss
              ${user.email}` 
           : `Rawrrrrrrrrr, what arrrrrre you looking forrrrrrrrr?           
           `}         
    ----------------------------------------------------
         \\ 
          \\                    / \\  //\\
           \\    |\\___/|      /   \\//  \\\\
                /0  0  \\__  /    //  | \\ \\    
               /     /  \\/_/    //   |  \\  \\  
               @_^_@'/   \\/_   //    |   \\   \\ 
               //_^_/     \\/_ //     |    \\    \\
            ( //) |        \\///      |     \\     \\
          ( / /) _|_ /   )  //       |      \\     _\\
        ( // /) '/,_ _ _/  ( ; -.    |    _ _\\.-~        .-~~~^-.
      (( / / )) ,-{        _      '-.|.-~-.           .~         '.
     (( // / ))  '/\\      /                 ~-. _ .-~      .-~^-.  \\
     (( /// ))      '.   {            }                   /      \\  \\
      (( / ))     .----~-.\\        \\-'                 .~         \\  '. \\^-.
                 ///.----..>        \\             _ -~             '.  ^-'  ^-_
                   ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~
                                                                      /.-~
    `)
    if(user) {
      sessionStorage.setItem('isLoggedIn', true);
      sessionStorage.setItem('uid', user.uid);
      sessionStorage.setItem('photoURL', user.photoURL);

    } else {
      sessionStorage.setItem('isLoggedIn', false);
      sessionStorage.setItem('uid', '');
      sessionStorage.setItem('photoURL', '');
    }
  })
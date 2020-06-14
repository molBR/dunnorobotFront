import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Form from './Form';
import Text from './TranslatedText';

import store from './reducer';

class App extends Component {
  render()
  {
    return(
      <div className="App">
        <Provider store={store}>
          <Text />
          <Form />
          <div class="footerinfo">
            Designed by <a href="https://www.twitch.tv/codinggiantcodes">
               CodingGiantCodes</a>
          </div>
        </Provider>
      </div> 
    );
    
  }
}

export default App;

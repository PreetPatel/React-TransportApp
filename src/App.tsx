import * as React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;

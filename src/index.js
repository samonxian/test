import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

class Test extends React.Component {
  componentWillReceiveProps(nextProps) {
    //这里页面重载时，不应该运行的
    //When page reloaded,it should not run.
    console.log('componentWillReceiveProps');
  }
  render() {
    console.log('render');
    return <div>test</div>;
  }
}
render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  document.getElementById('root')
);

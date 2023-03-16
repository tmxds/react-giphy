import '../assets/stylesheets/application.scss';

import React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './components/App';

const containerDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(containerDiv);
root.render(<App />);

// // React class component
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     return <h1>Hi {name}, your age is {age}!</h1>;
//   };
// };

// const Hello = (props) => {
//   console.log(props);

//   // const name = props.name;
//   // const age = props.age;
//   const { name, age } = props; // equal to above two lines

//   return <h1>Hi {name}, your age is {age}!</h1>;
// };

// // select html element
// const containerDiv = document.querySelector('#root');
// // put React inside element
// const root = ReactDOM.createRoot(containerDiv);
// // render new element
// root.render(<Hello name="Sarah" age="21" />);

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function handleClickAlert() {
  alert('You clicked me!');
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

let content;
let isLoggedIn=true;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}

function AdminPanel(){
  return (<p>admin</p>);
}

function LoginForm(){
  return (<p>loginForm</p>);
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
);

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <div>
        <p>conditionals</p>
        {isLoggedIn ? (
          <AdminPanel />
        ) : (
          <LoginForm />
        )}
      </div>
      <div>
        {isLoggedIn && <AdminPanel />}
      </div>
      <div>
        {content}
      </div>
      <ul>{listItems}</ul>
      <button onClick={handleClickAlert}>
        Click me
      </button>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

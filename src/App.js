import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className="body">

          <section>
            <main className='Operational'>
              <h1>You know that big wheel keep on turning</h1>
              <h3>The hours we keep on burning</h3>
              <p>And we're rolling, rolling, rolling yeah (rolling)
                Rolling on the River</p>

            </main>
          </section>
          <footer className="body-footer">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React | Proud Marry
            </a>

          </footer>

        </div>
      </body>
    </div>
  );
}


console.log(`Operational`);

export default App;

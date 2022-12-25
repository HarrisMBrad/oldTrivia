import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Review: </code>

          <view>Use this to view again, and technically it is a code review!</view>
        </p>

      </header>

      <body>
        <div className="body">

          <section>
            <main className='Operational'>

            </main>
          </section>
          <footer className="body-footer">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

          </footer>

        </div>
      </body>
    </div>
  );
}


console.log(`App-header`);

export default App;

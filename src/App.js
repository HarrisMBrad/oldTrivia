import logo from './logo.svg';
import './App.css';
import { Friday } from './days/off/offdays';
import offDays from '../../days/off/offdays';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>

      <body>
        <div className="body">
          <section>
            <main>
              <offDays>
                <Friday>
                  <done>
                    <p>This is what I have done.</p>
                  </done>
                </Friday>
              </offDays>
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

offDays();
console.log(`body`);

export default App;


import './App.css';

function App() {
  return (
    <div className="container">
      {/* Top Row */}
      <div className="top">
        <div className="tbox"></div>
        <div className="hmiddle">
          <div className="outer">
            <div className="inner">
              <div className="left-box"></div>
              <div className="right-box"></div>
            </div>
          </div>
        </div>
        <div className="tbox"></div>
      </div>

      {/* Middle Content */}
      <div className="middle">
        <div className="mleft"></div>
        <div className="mright">
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom">
        <div className="bwide"></div>
        <div className="bnarrow"></div>
        <div className="bnarrow"></div>
        <div className="bwide"></div>
      </div>
    </div>
  );
}

export default App;

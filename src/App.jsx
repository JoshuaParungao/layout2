import './App.css';

function FooterInfo({ subjCode, section }) {
  return (
    <>
      <div className="bnarrow">{subjCode}</div>
      <div className="bnarrow">{section}</div>
    </>
  );
}

function HeaderName({ firstName, lastName }) {
  return (
    <>
      <div className="left-box">{firstName}</div>
      <div className="right-box">{lastName}</div>
    </>
  );
}

function App() {
  return (
    <div className="container">
      {/* Top Row */}
      <div className="top">
        <div className="tbox"></div>
        <div className="hmiddle">
          <div className="outer">
            <div className="inner">
              <HeaderName firstName="Joshua" lastName="Parungao" />
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
        <FooterInfo subjCode="PCIT9" section="IT3B" />
        <div className="bwide"></div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'

function App() {
  return (
    <div className="container">
      <div className="setting">
        <div className="toolbar">
          <div>
            <input className='input' placeholder='Input your APi key.' type="text" />
            <input className='input' placeholder='Input your custom API domain.' type="text" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <select name="lang_select" id="lang_select">
            <option value="en(us)">English (American)</option>
            <option value="en(uk)">English (British)</option>
            <option value="ko">Korean</option>
            <option value="zh">Chinese</option>
          </select>
        </div>
        <div className="row">
          <textarea name="input-form" id="input-form" cols={5}></textarea>
          <textarea name="input-form" id="input-form" cols={5}></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import qs from "qs";
import './App.css';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [templates, setTemplates] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [meme, setMeme] = useState(null);

  useEffect(() =>{
    fetch("https://api.imgflip.com/get_memes")
    .then(resp => resp.json())
    .then(json => setTemplates(json.data.memes));
  }, []);

  const handleChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === "top") {
      setTopText(fieldValue);
    } else {
      setBottomText(fieldValue);
    }
  }

  const handleClick = imageId => {
    setSelectedId(imageId)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const params = {
      template_id: selectedId,
      text0: topText,
      text1: bottomText,
      username: 'xzk03017',
      password: 'xzk03017@cndps.com'
    }
    fetch(`https://api.imgflip.com/caption_image?${qs.stringify(params)}`)
    .then(resp => resp.json())
    .then(json => {
      if (json.success) {
        setMeme(json.data.url);
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="top" 
          value={topText} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="bottom" 
          value={bottomText} 
          onChange={handleChange} 
        />
        <input type="submit" value="Generate meme" />
      </form>
      <div className="meme">
        {meme ? <img src={meme} alt="" /> : null}
      </div>
      <div className="meme-container">
        {templates && 
          templates.map(elem => <img 
                                  key={elem.id}
                                  id={elem.id} 
                                  onClick={() => handleClick(elem.id)} 
                                  src={elem.url} 
                                  alt=""
                                />)}
      </div>
    </div>
  );
}

export default App;

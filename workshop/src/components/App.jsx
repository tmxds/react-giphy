import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const App = () => {
  // const gifIds = [ "WuGSL4LFUMQU", "wuk4K58OTyYec" ];
  // const selectedGifId = "WuGSL4LFUMQU";
  const [ selectedGifId, setSelectedGifId ] = useState("WuGSL4LFUMQU");
  const [ gifIds, setGifIds ] = useState([ "WuGSL4LFUMQU", "wuk4K58OTyYec" ]);
  return (
    // only one parent per react component
    // className is used to avoid confusion with vanilla .js classes
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>
    </div>
  );
};

export default App;

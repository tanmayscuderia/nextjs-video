import React, { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';
import Skeleton from 'react-loading-skeleton';
import { ServiceContext } from '../context/servicecontext';
import 'react-loading-skeleton/dist/skeleton.css';
import './Player.css';

function Player() {
  const { state } = useContext(ServiceContext);

  let data = state.selectedVideo[0];

  function returnLocalDateTime(dateTime) {
    const date = new Date(dateTime);
    const monthName = date.toLocaleDateString('default', { month: 'long' });
    const year = date.getFullYear();

    return `${monthName} ${year}`;
  }
  return (
    <div className='flex flex-col player-container'>
      <div className='relative '>
        {data ? (
          <>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${data ? data?.id?.videoId : 'Ux_LFXpOrd4'}`}
              light
              controls
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                },
              }} />
            <div className='video-details-outside'>
              <div className='snippet-channel-details'>
                  <div className='snippet-channelTitle'>
                      {data?.snippet?.channelTitle}
                  </div>
                  <div className='snippet-publishTime'>
                      {returnLocalDateTime(data?.snippet?.publishTime)}
                  </div>
              </div>
              <div>
                {data?.snippet?.description}
              </div>
            </div>
          </>
        ) : <Skeleton />}
      </div>

      <div className=''>
      </div>

    </div>
  )
}


export default Player

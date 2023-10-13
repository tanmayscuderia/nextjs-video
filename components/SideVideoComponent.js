import React, { useContext } from 'react'
import './SideVideoComponent.css';
import { ServiceContext } from '../context/servicecontext';

function SideVideoComponent() {
    const { state, dispatch } = useContext(ServiceContext);
    let data = state.filtertedData[0]?.items;

    function selectVideo(video) {
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: video });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div id="default-sidebar"
                className="h-screen side-video-container" aria-label="Sidebar">
                <div className="">
                    {data ? data?.map((item, index) => (
                        <div key={index} onClick={() => selectVideo(item)}>
                            <div className={state.selectedVideo[0].id?.videoId === item.id?.videoId ? "selected-video side-image-container" : "side-image-container"}>
                                <div className="image-container">
                                    <img className="rounded-lg side-video-image"
                                        src={item.snippet.thumbnails.default.url}/>
                                </div>
                                <div className='side-image-snippet-text-container'>
                                    <div>
                                        <h6 className='image-snippet-title'>{item.snippet.title}</h6>
                                    </div>
                                    <div>
                                        <span className='image-snippet-channelTitle'>{item.snippet.channelTitle}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )) : ''}
                </div>
            </div>

        </>
    );
}

export default SideVideoComponent
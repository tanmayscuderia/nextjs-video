"use client";
import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Service from '../components/Data/SidebarItems';
import { ServiceContext } from '../context/servicecontext';

// const ServiceContext = createContext();

export default function Home() {
  const { state, dispatch } = useContext(ServiceContext);

  //API Getting data
  useEffect(() => {
    fetch('https://file.notion.so/f/f/9834da59-4b25-437e-9b97-c4b1bc343b93/e4118546-34f6-4c76-ba9a-8e8cf3199aa0/data.json?id=a2671176-8f90-4d02-8132-8b977edf9783&table=block&spaceId=9834da59-4b25-437e-9b97-c4b1bc343b93&expirationTimestamp=1697169600000&signature=vIzZTtwB_cfQwYeoESRoZTorQJLEV1FH7UsYH2a6f2E&downloadName=data.json')
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'SET_SERVICE_DATA', payload: data})
        dispatch({type: 'SET_SELECTED_VIDEO', payload: data.items[0]});
      })
  }, []);

  // useEffect(() => {
  //   dispatch({type: 'SET_SERVICE_DATA', payload: Service});
  //   dispatch({type: 'SET_SELECTED_VIDEO', payload: Service.items[0]});
  // }, []);

  return (
    <main>
      <div>
        <Header />
        <div className=''>
          <Body />
        </div>
      </div>
    </main>
  )
}

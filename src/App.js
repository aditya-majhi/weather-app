import { useEffect, useState } from 'react';
import day from './Assets/bg-image.jpg' ;
import night from './Assets/bg-night.jpg' ;
import Body from './components/body';


function App() {
  const [img , setImg] = useState() ;
  const func = (time) => {
    (time < 6 || time > 18) ? setImg(night) : setImg(day) ;
  }

  useEffect(() => {
    const hour = new Date().getHours() + 1 ;
    (hour < 6 || hour > 18) ? setImg(night) : setImg(day) ;
  } , [])

  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center" style={{backgroundImage: `url(${img})`}}>
        <Body 
          func = {func}
        />
    </div>
  );
}

export default App;

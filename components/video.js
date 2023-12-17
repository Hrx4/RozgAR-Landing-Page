import { useState } from "react";
import Container from "./container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
      
          
            <iframe
              src="https://www.youtube-nocookie.com/embed/GCTAiL6kOlM?controls=0&autoplay=1"
              title="YouTube video player"
              width="900"
              height="500"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
       
        </div>
      
    </Container>
  );
}

export default Video;
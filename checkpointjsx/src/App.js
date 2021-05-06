
import './style.css'; 
import image from "./imageInSrc.png";


function App() {
  return (
    <div className = 'App'>
          <div style = {{border: "solid 1px black" , maxWidth:" 100vw"}}>
               
           <h1 className = 'title'> GOmycode </h1>
           

           <img src ={image}  alt="film" className ='imgsrc' />
           
           <br />
          

           <img src = "/imageInPublic.png" alt="film"  className ='imgpublic'/>
           

          </div>

          <video width= '720'  height='540' controls= {true}  className='video'/>

          <source src= "/myVideo.mp4" type = "video/mp4" />

          
     </div>
  );
}

export default App;

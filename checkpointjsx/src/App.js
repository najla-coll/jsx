
import './App.css';
import image from "./imageInSrc.png"
import video from "./myVideo.mp4"

function App() {
  return (
    <>
          <div style = {{border: "solid 1px black" , maxWidth:" 100vw"}}>
               
           <h1 className = 'title red'> Votre nom ici </h1>
           

           <img src ={image}  alt="film" />
           
           <br />
          

           <img src = "/imageInPublic.PNG" alt="film" />
           

          </div>

          <video width= '320'  height='240' controls={true} />

          <source src= {video} type = "video/mp4"/>

          
     </>
  );
}

export default App;

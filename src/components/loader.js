import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoaderComponent(props) {
    return (
        <>
        <Loader type="Grid" color="#00BFFF" height={150} width={150} />
        
        </>
      )
}

export default LoaderComponent
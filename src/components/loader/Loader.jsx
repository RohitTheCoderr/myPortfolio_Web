import { useLoaderStore } from "../../libs/zustand";
import { CubeSpinner, ClassicSpinner, SwapSpinner, StageSpinner } from "react-spinners-kit";
import { Bars,Blocks,Triangle ,Comment,MagnifyingGlass,DNA} from 'react-loader-spinner'


export default function Loader() {
    const { loading } = useLoaderStore()
    return loading ?
        <div className="h-screen w-screen bg-green-400 fixed flex justify-center items-center backdrop-blur-sm">

            <CubeSpinner />
            <ClassicSpinner/>
            <SwapSpinner/>
            <StageSpinner/>

            {/* /////////////// */}
            
            <Bars height="100" width="100" color="#4fa24d" ariaLabel="bars-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
          
            <Blocks height="80" width="80" color="#4fa94d" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" visible={true}/>

            <Triangle  visible={true} height="80"  width="80"  color="#4fa94d"  ariaLabel="triangle-loading" wrapperStyle={{}} rapperClass=""  />

            <Comment visible={true}  height="80"  width="80"  ariaLabel="comment-loading"   wrapperStyle   wrapperClass="comment-wrapper"  color="#fff "  backgroundColor="#F4442E"/>

            <DNA visible={true} height="120"  width="120"  ariaLabel="dna-loading"  wrapperStyle={{}}  wrapperClass="dna-wrapper"/>

            <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="magnifying-glass-loading" wrapperStyle={{}} wrapperClass="magnifying-glass-wrapper" glassColor="#c0efff" color="#e15b64"/>

        </div> : null

}


/* import { CubeSpinner } from "react-spinners-kit";
https://dmitrymorozoff.github.io/react-spinners-kit/ */

//  https://mhnpd.github.io/react-loader-spinner/
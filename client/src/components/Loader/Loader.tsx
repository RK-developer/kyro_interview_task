import { useState } from "react";
import SpinLoader from "./SpinLoader";

const LoaderHOC = (WrappedComponent:any, loadingMsg?:string) => {
    const ContainerHOC = (props:any) => {
        const [isLoading, setIsLoading] = useState(false);

        const setLoading = (isComponentLoading:boolean) => {
            setIsLoading(isComponentLoading);
        }

        return(
            <>
                {
                    isLoading && <SpinLoader message={loadingMsg} />
                }
                <WrappedComponent {...props} setLoading={setLoading} />
            </>
        )
    }

    return ContainerHOC;
}

export default LoaderHOC;
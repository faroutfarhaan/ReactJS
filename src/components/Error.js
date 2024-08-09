// Using Hook for error detection provided by React Router DOM
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();

    return (
        <div>
        <h1>Ooooops!...</h1>
        <h2>Something went wrong</h2>
        <h2>
            {err.status} {err.text}
        </h2>
        </div>
    )
};
export default Error;
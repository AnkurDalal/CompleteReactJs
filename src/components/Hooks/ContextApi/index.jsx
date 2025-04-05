import { BioProvider } from "./ContextApi"
import { Home } from "./Home"
export  function Main () {
    return(
        <BioProvider>
            <Home/>
        </BioProvider>
    )
}
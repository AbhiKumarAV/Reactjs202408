import ClassComponent from "./Components/ClassComponent";
import FirstComponent from "./Components/FirstComponent";
import ComponentDefault from "./Props/ComponentDefault";
import ParentComponent from "./Props/ParentComponent";

const App=()=>{
    let olympics="paris";
    
    return(
        <>
            <h1>JSX RULES</h1>
            <label htmlFor="">1. htmlFor property in label tag</label>       
            <h3 className="">2. className property</h3>
            <h3>3. {olympics}- javascript expression shouldbe inside flower bracket</h3>
            <FirstComponent/>
            <ClassComponent/>
            <h1>Props concept</h1>
            <ParentComponent value={olympics}/>
            <ComponentDefault name="scott" sal={20000} loc="bangalore" />
            <ComponentDefault/>
        </>
        
    )
}
export default App
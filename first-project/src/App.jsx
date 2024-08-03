import FirstComponent from "./FirstComponent";

const App=()=>{
    let olympics="paris";
    return(
        <>
            <h1>JSX RULES</h1>
            <label htmlFor="">1. htmlFor property in label tag</label>       
            <h3 className="">2. className property</h3>
            <h3>3. {olympics}- javascript expression shouldbe inside flower bracket</h3>
            <FirstComponent/>
        </>
        
    )
}
export default App
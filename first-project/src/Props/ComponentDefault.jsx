const ComponentDefault=(props)=>{
    let {name,sal,loc}=props
    //2nd way of implementing default props
    //let {name="Abhishek",sal=100000,loc="mysore"}=props
    return(
        <>
            <h1>ComponentDefault</h1>
            <ul>
            {/*3rd way of implementing default props*/}
                <li>name: {name || "Abhishek"}</li>
                <li>sal: {sal || 200000}</li>
                <li>loc:{loc || "mysore"}</li>
            </ul>
        </>
    )
}
export default ComponentDefault

//1st way of implementing default props
// ComponentDefault.defaultProps={
//     name:"Abhishek",
//     sal:100000,
//     loc:"mysore"
// }
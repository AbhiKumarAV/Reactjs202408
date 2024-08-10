const Component1=(props)=>{
    let {value,isAvailable,isUndefined,isNull}=props  //destructuring obect
   
    return(
        //parent,,,-received from parent
        <>
            <h3>Component1</h3>
            
            <h3>
            {value},{isAvailable},{isUndefined},{isNull}-received from parent</h3>
        </>
    )
}
export default Component1
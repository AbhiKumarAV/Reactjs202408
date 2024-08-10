const Component2=(props)=>{
    console.log(props)
     let [m1,m2,m3,m4,m5]=props.mobile  //destructuring array
     
    return(
        <>
            <h1>Component2</h1>
            <ul>
                <li>{m1}</li>
                <li>{m2}</li>
                <li>m3</li>
                <li>m4</li>
                <li>m5</li>
                <li></li>
            </ul>
        </>
    )
}
export default Component2
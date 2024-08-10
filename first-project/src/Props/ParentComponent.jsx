import Component1 from "./Component1"
import Component2 from "./Component2"

const ParentComponent=(props)=>{
    let {value}=props
    let name='parent'
    let phones=["oneplus","samsung","iphone","xiaomi","pixle","oppo"]
    return(
        <>
            <h1>Parent component</h1>
            <h3>{value}-from app component</h3>
            <Component1 value={name} isAvailable={true} isUndefined={undefined} isNull={null}/>
            <Component2 mobile={phones}/>
        </>
    )
}
export default ParentComponent
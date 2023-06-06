const shimmer =()=>{
    return <div className="flex flex-wrap">
        {Array(20).fill("").map((e,index)=><div  key ={index} className="bg-gray-200 w-80 h-60 py-2 m-2 "></div>)}
        
    </div>
}
 export default shimmer;
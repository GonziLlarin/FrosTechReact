// import { useState } from "react"
// import Button from "./Button"

// export default function Card(props) {

//     const { price, description, children } = props

//     const [count, setCount] = useState(1)

//     return (
//         <section className="flex flex-col items-center w-40 h-52 justify-end">
//             <img></img>
//             <h1 className="text-red-300">{children}</h1>
//             <h2 className="text-red-400">${price}</h2>
//             <h3 className="text-red-200">{description}</h3>
//             <div className="flex p-2">
//                 <Button onClick={() => setCount(count + 1)}> ➕
//                 </Button>
//                 <p>
//                     {count}
//                 </p>
//                 <Button onClick={() => setCount(count - 1)}>
//                     ➖
//                 </Button>
//             </div>


//         </section >
//     )
// }
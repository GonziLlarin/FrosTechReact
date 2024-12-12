import React from "react"
import { useState } from "react"

export default function CartWidget(props) {
    const [count, setCount] = useState(0)

    return (

        <>

            <div className="text-gray-900 bg-red-50 p-5 rounded-full font-semibold">
                🛒{count}
            </div>

        </>

    )
}

export default function Button(props) {

    const { children } = props


    return (
        <button onClick={() => { console.log("hiciste click en un boton") }} className="hover:scale-110 text-red-900 font-semibold italic">
            {children}
        </button>

    )


};
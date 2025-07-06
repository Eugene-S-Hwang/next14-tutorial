//Solutions to Hydration Errors


//1:

// "use client"

// import {useEffect, useState} from "react";


// const HydrationTest = () => {

//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     const a = Math.random()

//     console.log(a);

//     return (
//         <div>
//             {isClient && a}
//         </div>
//     )
// }

// export default Hydration Test



// 2:

// const HydrationTestNoSSR = dynamic(()=>"@/components/hydrationTest", {ssr: false}) // --> this jsx file must have "use client"

// const HydrationTest = () => {


//     return (
//         <div>
//             <HydrationTestNoSSR/>
//         </div>
//     )
// }

// export default HydrationTest



// #3
const HydrationTest = () => {

    const a = Math.random()

    console.log(a);

    return (
        <div suppressHydrationWarning>
            a
        </div>
    )
}

export default HydrationTest
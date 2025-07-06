"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

    //CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const query = useSearchParams()

    const q = query.get("q")

    const handClick = ()=>{
        console.log(q)
        // router.push("/") //performs a client side navigation
        // router.replace("/") //does not add another entry into browser history
        router.refresh() //refreshes current page
        // router.back() // previous page
        // router.forward() // next page
    }

    return (
        <div>
            <Link href="/" prefetch={false}>Click Here</Link>
            <button onClick={handClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTestPage
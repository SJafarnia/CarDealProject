import Link from "next/link";
import { useRouter } from "next/router"

const dic = { "cars": "خودرو ها" }

function filtrer(segment) {
    let x = null
    Object.keys(dic).forEach(value => {
        // const index = segments.indexOf(value);
        if (value == segment) {
            // console.log(dic[value])
            x = dic[value]
        }
    });
    if (x) {
        return x
    } else {
        return segment
    }
}


export default function Breadcrumb() {
    const router = useRouter()
    const pathSegments = router.asPath.split('/').filter((segment) => segment);;


    return (
        <div className="brdcrumb p-6 text-sm">
            <nav className="w-full rounded-md">
                <ol className="list-reset flex">
                    <li className="brdcrmitem">
                        <Link
                            href="/"
                            className="mx-1 transition duration-150 ease-in-out text-neutral-500 dark:text-neutral-400"
                        >خانه </Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const x = filtrer(segment)
                        if (index + 1 == pathSegments.length) {
                            return (
                                <li className="brdcrmitem" key={index}>
                                    <Link className="mx-1 transition duration-150 ease-in-out text-primary-500 dark:text-theme-blue"
                                        href={`/${pathSegments.slice(0, index + 1).join('/')}`}>/ {x}</Link>
                                </li>
                            )
                        }
                        return (
                            <li className="brdcrmitem" key={index}>
                                <Link className="mx-1 transition duration-150 ease-in-out text-neutral-500 dark:text-neutral-400"
                                    href={`/${pathSegments.slice(0, index + 1).join('/')}`}>/ {x}</Link>
                            </li>
                        )
                    })}

                </ol>
            </nav>
        </div>
    )
}

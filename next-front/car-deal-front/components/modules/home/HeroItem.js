import Link from 'next/link'
import Image from 'next/image'

function HeroItem({ href, img, title, alt }) {
    return (
        <div className="lg:w-[20%] md:w-[27%] sm:w-[30%] px-4 py-3 text-white">
            <Link href={href}>
                <div className="inner">
                    <div className="info">
                        <div className="icon rounded-lg text-center bg-[#4AAEE7] h-24">
                            <Image className="m-auto p-2" src={img} alt={alt} width="70" height="70" />
                            <h4 className="title">
                                {title}
                            </h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HeroItem
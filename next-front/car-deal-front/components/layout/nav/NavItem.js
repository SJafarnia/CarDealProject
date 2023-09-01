import Link from 'next/link';

function NavItem({ title, href }) {
    return (
        <li className="inline-block hover:transition-transform hover:scale-110 ease-in-out duration-150 focus:transition-transform focus:scale-110 whitespace-nowrap align-top mr-6 relative p-2 border-b-[1px] border-solid">
            <Link href={href} className="inline-block">
                {title}
            </Link>
            <ul className="dropdown-menu"></ul>
        </li>
    )
}

export default NavItem
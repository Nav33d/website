export const SocialLinks: React.FC = () => {
    const links = [
        { label: 'Twitter', link: 'https://twitter.com/naveedziarab' },
        { label: 'LinkedIn', link: 'https://twitter.com/naveedziarab' },
        { label: 'YouTube', link: 'https://twitter.com/naveedziarab' }
    ]
    return (
        <ul className="flex">
            {
                links.map( ( item, index ) => (
                    <li className="px-2" key={index}>
                        <a
                            className="text-sm border-b-2 border-white transition duration-300 ease-in-out hover:border-black focus:border-black"
                            href={item.link}
                        >
                            {item.label}
                        </a>
                    </li>
                ) )
            }
        </ul>
    )
}

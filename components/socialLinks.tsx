export const SocialLinks: React.FC = () => {
    const links = [
        { label: 'Twitter', link: 'https://twitter.com/naveedziarab' },
        { label: 'LinkedIn', link: 'https://www.linkedin.com/in/naveed-ziarab-b4498353' },
        { label: 'YouTube', link: 'https://www.youtube.com/channel/UCIzPhZKIYoXBYxuN3t4TU2g' }
    ]
    return (
        <ul className="flex">
            {
                links.map( ( item, index ) => (
                    <li className="px-2" key={index}>
                        <a
                            className="text-sm border-b-2 border-white transition duration-300 ease-in-out hover:border-black focus:border-black"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {item.label}
                        </a>
                    </li>
                ) )
            }
        </ul>
    )
}

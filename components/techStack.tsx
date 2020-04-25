export const TechStack: React.FC = () => {
    const stack = [
        { label: 'React', link: 'https://reactjs.org' },
        { label: 'React Native', link: 'https://reactnative.dev' },
        { label: 'Next.js', link: 'https://nextjs.org' },
        { label: 'Tailwind CSS', link: 'https://tailwindcss.com' },
        { label: 'Laravel PHP', link: 'https://laravel.com' },
    ]
    return (
        <ul className="flex flex-wrap justify-center mb-8">
            {
                stack.map( ( item, index ) => (
                    <li className="px-2" key={index}>
                        <a
                            className="inline-block text-base sm:text-xl text-gray-700 font-bold transition duration-100 ease-in-out transform hover:text-black hover:scale-105 focus:text-black"
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

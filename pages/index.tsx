/**
 * Import components.
 */
import { Layout, SocialLinks, TechStack } from '../components'

const Index: React.FC = () => {
    return (
        <Layout>
            <section className="h-screen flex flex-col justify-center items-center p-2">
                <h1 className="font-black text-4xl sm:text-6xl tracking-wide mb-2">
                    Hi, it&apos;s Naveed
                </h1>
                <p className="intro-text text-base sm:text-xl text-center max-w-full mb-6 sm:px-2">
                    I&apos;m a software engineer based in Birmingham, UK. I work with the following technologies:
                </p>
                <TechStack />
                <SocialLinks />
            </section>
        </Layout>
    )
}

export default Index

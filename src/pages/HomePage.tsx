import { Link } from "react-router-dom";
import Layout from "../Components/Layout";
import { useTranslation } from 'react-i18next';
import githubIcon from '../assets/github-logo.png'
import linkedInIcon from '../assets/linkedin.png'
export default function HomePage() {
    const { t } = useTranslation()
    return (
        <Layout>

            <section className="w-full min-h-[90%] flex flex-col justify-center items-center gap-4">
                <h1 className=" text-white"> {t('home.description')} </h1>
                <h1 className=" text-white"> {t('home.description2')}   <span className="underline">felipefortescastro@gmail.com.</span></h1>
                <ul className="flex gap-4">
                    <Link target="_blank" to={'https://github.com/Luiz-Felipe-Castro-dev'}> <img className="w-16" src={githubIcon} alt="" /> </Link>
                    <Link target="_blank" to={'https://www.linkedin.com/in/devluizcastro'}> <img className="w-16" src={linkedInIcon} alt="" /> </Link>

                </ul>
            </section>
        </Layout>
    );
}
import { useTranslation } from 'react-i18next';
import englishFlag from '../assets/ukflag.svg'
import spanishFlag from '../assets/esflag.svg'
import brazilianFlag from '../assets/brflag.svg'
import LinkComponent from './Link';


export default function NavBar() {
  const { t, i18n } = useTranslation()
  return (
    <nav className='w-full min-h-[90px] h-[10%] md:h-[10vh] flex justify-between items-center bg-[#222222] px-5'>
      <h1 className='w-[400px] ' ></h1>
      <ul className='w-full flex  justify-center items-center gap-6 '>
        <li>
          <LinkComponent text={t("navbar.home")} link='/' />
        </li>
        <li>
          <LinkComponent text={t("navbar.about")} link="/about" />
        </li>
        <li>
          <LinkComponent text={t("navbar.projects")} link="/projects" />
        </li>
      </ul>
      <div className='flex w-[400px] gap-5'>

        <button type="submit" onClick={() => i18n.changeLanguage("en")}>
          <img className='w-12 h-9' src={englishFlag} alt="" />
        </button>
        <button type="submit" onClick={() => i18n.changeLanguage("es")}>
          <img className='w-12 h-9' src={spanishFlag} alt="" />

        </button>
        <button type="submit" onClick={() => i18n.changeLanguage("pt")}>
          <img className='w-12 h-9' src={brazilianFlag} alt="" />

        </button>

      </div>

    </nav>
  );
}
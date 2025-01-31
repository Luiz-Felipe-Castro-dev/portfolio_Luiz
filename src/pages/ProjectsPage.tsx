import { useTranslation } from "react-i18next";
import Layout from "../Components/Layout";
import customCountdown from '../assets/custom-countdown.png'
import spaceCream from '../assets/spacecream.png'
import timer from '../assets/timer.png'
import rocketFood from '../assets/rocket_food.png'

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <Layout>

      <div className="flex flex-col  md:grid md:grid-cols-2 gap-24">

        <Card image={timer} title="Timer" description={t("projects.timerDescription")} link={"https://github.com/Luiz-Felipe-Castro-dev/timer"} />
        <Card image={rocketFood} title="Rocket Food" description={t("projects.rocketFoodDescription")}  link={"https://github.com/Luiz-Felipe-Castro-dev/Rocket_food"}/>
        <Card image={customCountdown} title="Custom Countdown" description={t("projects.customCountdownDescription")}  link={"https://github.com/Luiz-Felipe-Castro-dev/Awesome-Countdown"} />
        <Card image={spaceCream} title="Space Cream" description={t("projects.spaceCreamDescription")}   link={"https://github.com/Luiz-Felipe-Castro-dev/Space-Cream"}/>
      </div>

    </Layout>
  );
}

function Card({ image, title, description, link }: { image: string, title: string, description: string, link: string }) {
  return (
    <section className="flex flex-col gap-4 justify-center items-center w-[300px] md:w-[300px] h-[300px]">
      <h1 className="text-3xl text-white"> {title} </h1>
      <div className="w-[300px]  md:w-[300px]">
        <a target="_blank" href={link}>

          <img className="object-cover" src={image} alt="" />
        </a>
      </div>
      <p className="max-w-[200px] h-[120px]  text-white"> {description} </p>
    </section>
  )
}
import { useTranslation } from "react-i18next";
import Layout from "../Components/Layout";

export default function AboutPage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <h1 className="px-4 max-w-[600px]  text-white">
        {t("aboutMe.description")}
        <br /><br />
        {t("aboutMe.description2")}
      </h1>
    </Layout>
  );
}
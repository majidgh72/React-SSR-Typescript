import { useTranslation } from "hooks/useTranslation";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("HOME")}</h1>
      <Link to="/about">{t("ABOUT")}</Link>
    </div>
  );
};

export default Home;

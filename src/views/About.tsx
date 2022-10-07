import { Link } from 'react-router-dom';
import { useTranslation } from 'hooks/useTranslation';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('ABOUT')}</h1>
      <Link to="/">{t('HOME')}</Link>
    </div>
  );
};

export default About;

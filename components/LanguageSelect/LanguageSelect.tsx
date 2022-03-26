import styles from './LanguageSelect.module.css';
import { useRouter } from 'next/router';
import Select from '../Select';
import { FranceFlag, UKFlag } from './Flags';

const LanguageSelect = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  return (
    <Select
      className={styles.select}
      legend="Choose language"
      defaultValue={locale || 'en-UK'}
      onChange={(nextLocale) => router.push({ pathname, query }, asPath, { locale: nextLocale, scroll: false })}
    >
      <Select.Option
        id="lang-en-UK"
        name="language-preference"
        value="en-UK"
        role="link"
        displayValue={<UKFlag className={styles.svg} />}
        secondaryValue="en"
      />
      <Select.Option id="lang-fr" name="language-preference" value="fr" role="link" displayValue={<FranceFlag className={styles.svg} />} secondaryValue="fr" />
    </Select>
  );
};

export default LanguageSelect;

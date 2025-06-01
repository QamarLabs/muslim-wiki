import { useEffect } from "react";
import ResponsiveContainer from './common/ResponsiveContainer';
import { FlexBlock, FlexItem, Flex, ExternalLink, CardDivider } from "@wordpress/components";
import { useTranslation } from 'react-i18next';
import Autocomplete from './common/Autocomplete';
import { observer } from 'mobx-react-lite';
import { useStore } from './store/index';
import { useNavigate, useParams } from 'react-router';
import i18n from "./i18n";


export default observer(function HomePage() {
  const { 
    t, 
    // i18n 
  } = useTranslation("common");
  const navigate = useNavigate();
  const { lang } = useParams();
  const { searchStore } = useStore();
  const {  } = searchStore;

  useEffect(() => {
    if(lang) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage('en');
      navigate('/en', { replace: true });
    }
  }, [lang]);
  // const [name, setName] = useState("");
  // const [response, setResponse] = useState("");

  // async function sayHello() {
  //   const url = import.meta.env.VITE_API_URL_NESTJS;
  //   const res = await fetch(`${url}/hello?name=${name}`);
  //   const data = await res.json();
  //   setResponse(data.message);
  // }
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  //   // Optionally load additional namespaces
  //   i18n.loadNamespaces(['common']);
  // };

  return (
    <>
      {/* <div> */}
      <ResponsiveContainer>
        <Flex className='globeContainer'>
          <FlexBlock>
            <Flex direction='column' align="center">

              <h2 className="mw-text mw-header">Muslim Wiki</h2>
              <h5 className="mw-text mw-subheader">The Free Encyclopedia</h5>
              <img
                src="muslimwiki-globe.svg"
                className="logo genezio light"
                alt="Genezio Logo"
              />
            </Flex>
          </FlexBlock>
          <FlexItem className='autocompleteContainer'>
            <Autocomplete 
              placeholder={t("searchPlaceholder")}
              options={["Test", "test 2", "ABCD"]} 
            />
          </FlexItem>
        </Flex>
        <CardDivider />
        <Flex justify='space-between' className="w-100" wrap={true}>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/es">{t("links.es")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/en">{t("links.en")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/ar">{t("links.ar")}</ExternalLink>
          </FlexItem>
          {/* <FlexItem className="lng-item"><ExternalLink href="/ba">{t("links.ba")}</ExternalLink></FlexItem> */}
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/tr">{t("links.tr")}</ExternalLink>
          </FlexItem>
          {/* <FlexItem className="lng-item"><ExternalLink href="/al">{t("links.al")}</ExternalLink></FlexItem> */}
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/fr">{t("links.fr")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/ur">{t("links.ur")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/fa">{t("links.fr")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/cn">{t("links.cn")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/ru">{t("links.ru")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/de">{t("links.de")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/jp">{t("links.jp")}</ExternalLink>
          </FlexItem>
          <FlexItem className="lng-item">
            <ExternalLink className="mw-body mw-link" href="/hi">{t("links.hi")}</ExternalLink>
          </FlexItem>
        </Flex>
        {/* <FlexItem style={{backgroundColor: 'orange'}}>TEST3</FlexItem> */}
        {/* <FlexItem><button>{t('buttons.submit')}</button></FlexItem> */}
      </ResponsiveContainer>
      {/* <a href="https://genezio.com" target="_blank">
          <img
            src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/Logo_Genezio_White.svg"
            className="logo genezio light"
            alt="Genezio Logo"
          />
          <img
            src="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/Logo_Genezio_Black.svg"
            className="logo genezio dark"
            alt="Genezio Logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Genezio + React = ❤️</h1>
      <div className="card">
        <input
          type="text"
          className="input-box"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <br />

        <button onClick={() => sayHello()}>Say Hello</button>
        <p className="read-the-docs">{response}</p> */}
      {/* </div> */}
    </>
  );
})

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../store/index";
import { useTranslation } from "react-i18next";
import { Card, CardBody, CardHeader } from '@wordpress/components';
import { __experimentalHeading as Heading } from '@wordpress/components';

export default observer(function ServerError() {
  const { commonStore } = useStore();
  const { t } = useTranslation(["common", "errors"]);

  useEffect(() => {
    document.title = t("server", { ns: "errors" })
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Heading level={1}>{t("server", { ns: "errors" })}</Heading>
      <Heading level={2} style={{ color: '#cc1818' }}>
        {t(`${commonStore.error?.message}`)}
      </Heading>
      
      {commonStore.error && (
        <Card>
          <CardHeader>
            <Heading level={3} style={{ color: '#00a0d2' }}>
              {t("stack_trace", { ns: "errors" })}
            </Heading>
          </CardHeader>
          <CardBody>
            <pre style={{ 
              marginTop: "10px",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word"
            }}>
              {`${t(`${commonStore.error.stack?.toString()}`)} `}
            </pre>
          </CardBody>
        </Card>
      )}
    </div>
  );
});
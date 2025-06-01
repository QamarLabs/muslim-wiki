import { useEffect } from "react";
import { Card, CardBody, CardHeader, Flex, FlexItem, Icon } from "@wordpress/components";
import { useTranslation } from "react-i18next";
import { LinkButton } from "../common/Buttons";

export default function AccessDenied() {
  const { t } = useTranslation(["common", "errors"]);

  useEffect(() => {
    document.title = t("accessDenied", { ns: "errors" })
  }, []);

  return (
    <Card>
      <CardHeader>
        <Flex align="flex-start">
          <FlexItem>
            <Icon icon="shield" />
          </FlexItem>
          <FlexItem>
            <h1 className="modal-text-color" style={{ textAlign: "left" }}>
              {t("accessDenied", { ns: "errors" })}
            </h1>
          </FlexItem>
        </Flex>
      </CardHeader>
      <CardBody>
        <div style={{ marginBottom: '16px' }}>
          You are the Droid we are looking for! <br/>
          <LinkButton to="/">
            {t("return", { ns: "common" })}
          </LinkButton>
        </div>
      </CardBody>
    </Card>
  );
}
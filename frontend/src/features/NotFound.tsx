import { useEffect } from "react";
import {  Flex, FlexItem, Icon, CardDivider } from "@wordpress/components";
import { useTranslation } from "react-i18next";
import { LinkButton } from "../common/Buttons";

export default function NotFound() {
  const { t } = useTranslation(["common", "errors"]);

  useEffect(() => {
    document.title = t("not_found", { ns: "errors" });
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" style={{ minHeight: "100vh" }}>
      <FlexItem>
        <Icon icon="search" size={48} />
        <CardDivider />
        <h2>{t("not_found", { ns: "errors" })}</h2>
      </FlexItem>
      <FlexItem>
        <LinkButton to="/">
          {t("return", { ns: "common" })}
        </LinkButton>
      </FlexItem>
    </Flex>
  );
}
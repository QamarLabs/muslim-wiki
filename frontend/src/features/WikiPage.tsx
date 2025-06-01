import { useEffect } from "react";
import { Flex, FlexItem } from "@wordpress/components";
import { useTranslation } from "react-i18next";

export default function WikiPage() {
  const { t } = useTranslation(["common", "errors"]);

  useEffect(() => {
    document.title = t("not_found", { ns: "errors" });
  }, []);

  return (
    <Flex direction="column" align="center" justify="center" style={{ minHeight: "100vh" }}>
      <FlexItem>
        WikiPage
      </FlexItem>
    </Flex>
  );
}
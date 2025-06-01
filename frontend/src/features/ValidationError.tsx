import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Notice } from "@wordpress/components";

interface Props {
  errors: any;
}

export default observer(function ValidationErrors({ errors }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [errors]);

  return (
    <Notice status="error" isDismissible={false}>
      {errors && (
        <ul style={{ margin: "0", paddingLeft: "1rem" }}>
          {errors.map((err: any, i: number) => (
            <li key={`error.${i}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: err,
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </Notice>
  );
});
import { isString } from "@nily/utils";
import clsx from "clsx";

export const Text = ({
  type: _type,
  as: Tag = "span",
  className,
  color,
  children,
  ...restProps
}) => {
  console.assert(isString(children), "Text children only accepts plain text");

  return (
    <Tag
      className={clsx("earlybird-text", className)}
      style={{
        color,
      }}
      {...restProps}
    >
      {children}
    </Tag>
  );
};

export const $Text = ({ type: _type, as: Tag = "span", className, html, ...restProps }) => {
  return (
    <Tag className={clsx("earlybird-text", className)} {...restProps}>
      {html}
    </Tag>
  );
};

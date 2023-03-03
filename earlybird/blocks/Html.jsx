import { isEmpty } from "@nily/utils";
import clsx from "clsx";
import { renderToStaticMarkup } from "react-dom/server";
import sanitizeHtml from "sanitize-html";

export const Html = ({
  for: $for,
  type,
  as: Tag = "div",
  className,
  color,
  children,
  ...restProps
}) => {
  const html = renderToStaticMarkup(children);

  return (
    <Tag
      className={clsx(`earlybird-${type}`, className)}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(html),
      }}
      style={{
        color,
      }}
      {...restProps}
    />
  );
};

export const $Html = ({ type, as: Tag = "div", className, html, ...restProps }) => {
  return (
    <Tag
      className={clsx(`earlybird-${type}`, className)}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(html),
      }}
      {...restProps}
    />
  );
};

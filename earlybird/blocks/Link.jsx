import clsx from "clsx";

export const Link = ({
  type: _type,
  title,
  href,
  appearance = "plain",
  isInNewTab,
  className,
  // style
  color,
  background,
  children,
  ...restProps
}) => {
  return (
    <a
      className={clsx("earlybird-link", className)}
      title={title}
      href={href}
      target={isInNewTab ? "_blank" : undefined}
      rel={isInNewTab ? "noreferrer" : undefined}
      {...restProps}
      style={{
        color,
        background,
      }}
    >
      {children}
    </a>
  );
};

export const $Link = ({
  type: _type,
  title,
  href,
  // TODO
  appearance = "plain",
  isInNewTab,
  className,
  children,
  style,
}) => {
  return (
    <a
      className={clsx("earlybird-link", className)}
      title={title}
      href={href}
      target={isInNewTab ? "_blank" : undefined}
      rel={isInNewTab ? "noreferrer" : undefined}
      style={style}
    >
      {children}
    </a>
  );
};

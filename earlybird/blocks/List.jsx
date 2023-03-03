import clsx from "clsx";

export const List = ({ as: Tag = "ul", className, children, ...restProps }) => {
  return (
    <Tag className={clsx("earlybird-list", className)} {...restProps}>
      {children}
    </Tag>
  );
};

export const $List = List;

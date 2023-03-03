import clsx from "clsx";

export const Group = ({ as: Tag = "div", className, children, ...restProps }) => {
  return (
    <Tag className={clsx("earlybird-group", className)} {...restProps}>
      {children}
    </Tag>
  );
};

export const $Group = Group;

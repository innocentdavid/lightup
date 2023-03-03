import clsx from "clsx";
import { Html, $Html } from "./Html";

export const Heading = ({ as = "h2", className, ...restProps }) => {
  return <Html as={as} className={clsx("earlybird-heading", className)} {...restProps} />;
};

export const H1 = ({ className, ...restProps }) => {
  return <Heading as="h1" className={clsx("earlybird-h1", className)} {...restProps} />;
};

export const H2 = ({ className, ...restProps }) => {
  return <Heading as="h2" className={clsx("earlybird-h2", className)} {...restProps} />;
};

export const H3 = ({ className, ...restProps }) => {
  return <Heading as="h3" className={clsx("earlybird-h3", className)} {...restProps} />;
};

export const H4 = ({ className, ...restProps }) => {
  return <Heading as="h4" className={clsx("earlybird-h4", className)} {...restProps} />;
};

export const H5 = ({ className, ...restProps }) => {
  return <Heading as="h5" className={clsx("earlybird-h5", className)} {...restProps} />;
};

export const H6 = ({ className, ...restProps }) => {
  return <Heading as="h6" className={clsx("earlybird-h6", className)} {...restProps} />;
};

export const $Heading = ({ as = "h2", className, ...restProps }) => {
  return <$Html as={as} className={clsx("earlybird-heading", className)} {...restProps} />;
};

export const $H1 = ({ className, ...restProps }) => {
  return <$Heading as="h1" className={clsx("earlybird-h1", className)} {...restProps} />;
};

export const $H2 = ({ className, ...restProps }) => {
  return <$Heading as="h2" className={clsx("earlybird-h2", className)} {...restProps} />;
};

export const $H3 = ({ className, ...restProps }) => {
  return <$Heading as="h3" className={clsx("earlybird-h3", className)} {...restProps} />;
};

export const $H4 = ({ className, ...restProps }) => {
  return <$Heading as="h4" className={clsx("earlybird-h4", className)} {...restProps} />;
};

export const $H5 = ({ className, ...restProps }) => {
  return <$Heading as="h5" className={clsx("earlybird-h5", className)} {...restProps} />;
};

export const $H6 = ({ className, ...restProps }) => {
  return <$Heading as="h6" className={clsx("earlybird-h6", className)} {...restProps} />;
};

import clsx from "clsx";
import NextImage from "next/image";

export const Image = ({
  type: _type,
  src,
  alt = "",
  width,
  height,
  quality = 95,
  className,
  ...restProps
}) => {
  return (
    <NextImage
      className={clsx("earlybird-image", className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      {...restProps}
    />
  );
};

export const $Image = Image;

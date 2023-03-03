import { Image } from "./Image";
import { Icon as EarlyBirdIcon } from "@earlybirdim/icons";
import clsx from "clsx";

// @ts-ignore
export const Icon = ({
  type,
  // Image icons
  src,
  alt,
  // Emoji icons
  text,
  // SVG icons
  name,
  className,
  width,
  height,
  color,
  background,
  ...restProps
}) => {
  return (
    <div
      className={clsx(`earlybird-icon earlybird-icon-${type}`, className)}
      style={{
        color,
        background,
      }}
      {...restProps}
    >
      {(() => {
        switch (type) {
          case "image":
            return (
              <Image
                className={className}
                src={src}
                alt={alt}
                width={width}
                height={height}
                {...restProps}
              />
            );

          case "emoji":
            return <span>{text}</span>;

          case "svg":
            return <EarlyBirdIcon name={name} width={width} height={height} {...restProps} />;
        }
      })()}
    </div>
  );
};

export const $Icon = Icon;

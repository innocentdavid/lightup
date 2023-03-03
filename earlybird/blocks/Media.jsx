import { Image } from "./Image";
import { Video } from "./Video";

export const Media = ({ type, ...restProps }) => {
  return type === "image" ? (
    <Image className="earlybird-media" {...restProps} />
  ) : (
    <Video className="earlybird-media" {...restProps} />
  );
};

export const $Media = Media;

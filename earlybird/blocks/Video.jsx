import clsx from "clsx";
import { useMemo } from "react";

const VIDEO_RULES = [
  {
    regex: /^https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-z0-9_-]+)/i,
    handler: (matches) => {
      return `https://www.youtube.com/embed/${matches[2]}`;
    },
  },
  {
    regex: /^https?:\/\/youtu\.be\/([a-z0-9_-]+)/i,
    handler: (matches) => {
      return `https://www.youtube.com/embed/${matches[1]}`;
    },
  },
  {
    regex: /^https?:\/\/www\.youtube\.com\/embed\/([a-z0-9_-]+)/i,
    handler: (matches) => {
      return `https://www.youtube.com/embed/${matches[1]}`;
    },
  },
  {
    regex: /^https?:\/\/vimeo\.com\/(\d+)/i,
    handler: (matches) => {
      return `https://player.vimeo.com/video/${matches[1]}`;
    },
  },
];

export const Video = ({ type: _type, src: rawSrc, alt, className, ...restProps }) => {
  const src = useMemo(() => {
    for (const rule of VIDEO_RULES) {
      const matches = rawSrc.match(rule.regex);

      if (matches) {
        return rule.handler(matches);
      }
    }

    return rawSrc;
  }, [rawSrc]);

  return (
    <iframe
      className={clsx("earlybird-video", className)}
      src={src}
      title={alt}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...restProps}
    />
  );
};

export const $Video = Video;

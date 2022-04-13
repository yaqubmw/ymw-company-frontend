import { getStrapiMedia } from "../lib/media";

const Image = ({ image, className }) => {
  const { alternativeText } = image.data
    ? image.data.attributes
    : "";

  return (
    <img
      className={className}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;

/** @format */

interface ImageProps {
  src: string;
  alt?: string;
}

const Image = ({ ...props }: ImageProps) => {
  return <img className="max-h-[50px]" {...props} />;
};
export default Image;

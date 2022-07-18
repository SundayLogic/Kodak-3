import { Movies, Series } from "../../typings";
import ContentThumbnail from "../molecules/ContentThumbnail";

interface ContentProps {
  contentResults: [Movies] | [Series];
  contentTitle: string;
  contentType: string;
}
const Content = ({
  contentResults,
  contentTitle,
  contentType,
}: ContentProps) => {
  return (
    <section className="px-10">
      <h1 className="text-xl">{contentTitle}</h1>
      <div className="flex space-x-3">
        <ContentThumbnail />
        <ContentThumbnail />
      </div>
    </section>
  );
};
export default Content;

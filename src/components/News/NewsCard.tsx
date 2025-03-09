import moment from 'moment';

interface IProps {
  item: IArticleItem;
}

function NewsCard({ item }: IProps) {
  return (
    <div className="border-b border-gray-200 py-4 lg:flex max-w-100 lg:max-w-[unset] gap-4">
      <div className="">
        <img
          src={item.bannerUrl}
          alt={item.title}
          className="w-full lg:w-40 aspect-[4/3] rounded"
        />
      </div>
      <div className="flex-1 inline-flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-sm">{item.source}</p>
            <p className="text-sm capitalize">{item.category}</p>
          </div>
          <h3 className="font-bold leading-tight text-lg md:text-xl lg:text-xl">
            {item.title}
          </h3>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <p className="mb-0">{moment(item.publishedAt).fromNow()}</p>
          <div className="bg-gray-600 h-2 w-2 rounded-full" />
          <p>By {item.author}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

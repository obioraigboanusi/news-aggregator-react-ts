import { IArticleItem } from '@/utils/querytypes';
import moment from 'moment';

interface IProps {
  item: IArticleItem;
}

function NewsCard({ item }: IProps) {
  return (
    <div className="py-4 md:flex gap-4 w-full">
      <div className="">
        <img
          src={item.bannerUrl}
          alt={item.title}
          loading="lazy"
          className="w-full md:w-40 aspect-[4/3] rounded"
        />
      </div>
      <div className="flex-1 inline-flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-sm">{item.source}</p>
            {/* <p className="text-sm capitalize">{item.category}</p> */}
          </div>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <h3 className="font-bold leading-tight text-lg md:text-xl md:text-xl hover:text-purple-500">
              {item.title}
            </h3>
          </a>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <p className="mb-0">{moment(item.publishedAt).fromNow()}</p>
          {item.author && (
            <>
              <div className="bg-gray-600 h-2 w-2 rounded-full" />
              <p>
                {item.author?.includes('By')
                  ? item.author
                  : 'By ' + item.author}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

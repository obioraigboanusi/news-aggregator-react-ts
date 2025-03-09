import axios from 'axios';
import { snakeCase } from 'lodash';

interface IApiResponse {
  totalArticles: number;
  articles: IArticleItem[];
}

interface IArticleResponse {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

function transformArticle(item: typeof a): IArticleItem {
  return {
    id: item._id,
    title: item.headline.main,
    // description: item.lead_paragraph,
    publishedAt: item.pub_date,
    source: 'New York Times',
    category: 'general',
    bannerUrl:
      'https://www.nytimes.com/' +
        item.multimedia.find((media) => media.subtype === 'googleFourByThree')
          ?.url || '',
    author: item.byline.original,
    url: item.web_url,
    // content: '',
  };
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_NYTIMES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface IArticleItem {
  id: string;
  title: string;
  description?: string;
  publishedAt: string;
  source: string;
  category: string;
  bannerUrl: string;
  author: string;
  url: string;
  content?: string;
}
const a = {
  abstract:
    'Right-wing populism thrives on scarcity. The answer is abundance. But a politics of abundance will work only if Democrats confront where their approach has failed.',
  web_url:
    'https://www.nytimes.com/2025/03/09/opinion/musk-trump-doge-abundance-agenda.html',
  snippet:
    'Right-wing populism thrives on scarcity. The answer is abundance. But a politics of abundance will work only if Democrats confront where their approach has failed.',
  lead_paragraph:
    'I keep seeing Democrats say the resistance failed. On these pages, James Carville counseled Democrats to “roll over and play dead” until the Trump administration collapses beneath its own weight. Assuming corpse pose, Carville said, would be “a wiser approach than we pursued in the first Trump administration, when Democrats tried and failed at the art of resistance politics.”',
  print_section: 'SR',
  print_page: '8',
  source: 'The New York Times',
  multimedia: [
    {
      rank: 0,
      subtype: 'xlarge',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-articleLarge.jpg',
      height: 401,
      width: 600,
      legacy: {
        xlarge: 'images/2025/03/09/opinion/09klein/09klein-articleLarge.jpg',
        xlargewidth: 600,
        xlargeheight: 401,
      },
      subType: 'xlarge',
      crop_name: 'articleLarge',
    },
    {
      rank: 0,
      subtype: 'popup',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-popup.jpg',
      height: 434,
      width: 650,
      legacy: {},
      subType: 'popup',
      crop_name: 'popup',
    },
    {
      rank: 0,
      subtype: 'blog480',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-blog480.jpg',
      height: 321,
      width: 480,
      legacy: {},
      subType: 'blog480',
      crop_name: 'blog480',
    },
    {
      rank: 0,
      subtype: 'blog533',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-blog533.jpg',
      height: 356,
      width: 533,
      legacy: {},
      subType: 'blog533',
      crop_name: 'blog533',
    },
    {
      rank: 0,
      subtype: 'blog427',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-blog427.jpg',
      height: 285,
      width: 427,
      legacy: {},
      subType: 'blog427',
      crop_name: 'blog427',
    },
    {
      rank: 0,
      subtype: 'tmagSF',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-tmagSF.jpg',
      height: 242,
      width: 362,
      legacy: {},
      subType: 'tmagSF',
      crop_name: 'tmagSF',
    },
    {
      rank: 0,
      subtype: 'tmagArticle',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-tmagArticle.jpg',
      height: 396,
      width: 592,
      legacy: {},
      subType: 'tmagArticle',
      crop_name: 'tmagArticle',
    },
    {
      rank: 0,
      subtype: 'slide',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-slide.jpg',
      height: 401,
      width: 600,
      legacy: {},
      subType: 'slide',
      crop_name: 'slide',
    },
    {
      rank: 0,
      subtype: 'jumbo',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-jumbo.jpg',
      height: 684,
      width: 1024,
      legacy: {},
      subType: 'jumbo',
      crop_name: 'jumbo',
    },
    {
      rank: 0,
      subtype: 'superJumbo',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-superJumbo.jpg',
      height: 1369,
      width: 2048,
      legacy: {},
      subType: 'superJumbo',
      crop_name: 'superJumbo',
    },
    {
      rank: 0,
      subtype: 'blog225',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-blog225.jpg',
      height: 150,
      width: 225,
      legacy: {},
      subType: 'blog225',
      crop_name: 'blog225',
    },
    {
      rank: 0,
      subtype: 'master1050',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-master1050.jpg',
      height: 702,
      width: 1050,
      legacy: {},
      subType: 'master1050',
      crop_name: 'master1050',
    },
    {
      rank: 0,
      subtype: 'master675',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-master675.jpg',
      height: 451,
      width: 675,
      legacy: {},
      subType: 'master675',
      crop_name: 'master675',
    },
    {
      rank: 0,
      subtype: 'master495',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-master495.jpg',
      height: 331,
      width: 495,
      legacy: {},
      subType: 'master495',
      crop_name: 'master495',
    },
    {
      rank: 0,
      subtype: 'master180',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-master180.jpg',
      height: 120,
      width: 180,
      legacy: {},
      subType: 'master180',
      crop_name: 'master180',
    },
    {
      rank: 0,
      subtype: 'master315',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-master315.jpg',
      height: 211,
      width: 315,
      legacy: {},
      subType: 'master315',
      crop_name: 'master315',
    },
    {
      rank: 0,
      subtype: 'master768',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-master768.jpg',
      height: 513,
      width: 768,
      legacy: {},
      subType: 'master768',
      crop_name: 'master768',
    },
    {
      rank: 0,
      subtype: 'thumbnail',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-thumbStandard.jpg',
      height: 75,
      width: 75,
      legacy: {
        thumbnail:
          'images/2025/03/09/opinion/09klein/09klein-thumbStandard.jpg',
        thumbnailwidth: 75,
        thumbnailheight: 75,
      },
      subType: 'thumbnail',
      crop_name: 'thumbStandard',
    },
    {
      rank: 0,
      subtype: 'blogSmallThumb',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-blogSmallThumb.jpg',
      height: 50,
      width: 50,
      legacy: {},
      subType: 'blogSmallThumb',
      crop_name: 'blogSmallThumb',
    },
    {
      rank: 0,
      subtype: 'thumbLarge',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-thumbLarge.jpg',
      height: 150,
      width: 150,
      legacy: {},
      subType: 'thumbLarge',
      crop_name: 'thumbLarge',
    },
    {
      rank: 0,
      subtype: 'smallSquare168',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-smallSquare168.jpg',
      height: 168,
      width: 168,
      legacy: {},
      subType: 'smallSquare168',
      crop_name: 'smallSquare168',
    },
    {
      rank: 0,
      subtype: 'smallSquare252',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-smallSquare252.jpg',
      height: 252,
      width: 252,
      legacy: {},
      subType: 'smallSquare252',
      crop_name: 'smallSquare252',
    },
    {
      rank: 0,
      subtype: 'square320',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-square320.jpg',
      height: 320,
      width: 320,
      legacy: {},
      subType: 'square320',
      crop_name: 'square320',
    },
    {
      rank: 0,
      subtype: 'moth',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-moth.jpg',
      height: 151,
      width: 151,
      legacy: {},
      subType: 'moth',
      crop_name: 'moth',
    },
    {
      rank: 0,
      subtype: 'filmstrip',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-filmstrip.jpg',
      height: 190,
      width: 190,
      legacy: {},
      subType: 'filmstrip',
      crop_name: 'filmstrip',
    },
    {
      rank: 0,
      subtype: 'square640',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-square640.jpg',
      height: 640,
      width: 640,
      legacy: {},
      subType: 'square640',
      crop_name: 'square640',
    },
    {
      rank: 0,
      subtype: 'mediumSquare149',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumSquare149.jpg',
      height: 149,
      width: 149,
      legacy: {},
      subType: 'mediumSquare149',
      crop_name: 'mediumSquare149',
    },
    {
      rank: 0,
      subtype: 'mediumSquareAt3X',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumSquareAt3X.jpg',
      height: 1801,
      width: 1800,
      legacy: {},
      subType: 'mediumSquareAt3X',
      crop_name: 'mediumSquareAt3X',
    },
    {
      rank: 0,
      subtype: 'sfSpan',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-sfSpan.jpg',
      height: 263,
      width: 395,
      legacy: {},
      subType: 'sfSpan',
      crop_name: 'sfSpan',
    },
    {
      rank: 0,
      subtype: 'largeHorizontal375',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-largeHorizontal375.jpg',
      height: 250,
      width: 375,
      legacy: {},
      subType: 'largeHorizontal375',
      crop_name: 'largeHorizontal375',
    },
    {
      rank: 0,
      subtype: 'largeHorizontalJumbo',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-largeHorizontalJumbo.jpg',
      height: 683,
      width: 1024,
      legacy: {},
      subType: 'largeHorizontalJumbo',
      crop_name: 'largeHorizontalJumbo',
    },
    {
      rank: 0,
      subtype: 'horizontalMediumAt2X',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-horizontalMediumAt2X.jpg',
      height: 3736,
      width: 5601,
      legacy: {},
      subType: 'horizontalMediumAt2X',
      crop_name: 'horizontalMediumAt2X',
    },
    {
      rank: 0,
      subtype: 'hpLarge',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-hpLarge.jpg',
      height: 288,
      width: 511,
      legacy: {},
      subType: 'hpLarge',
      crop_name: 'hpLarge',
    },
    {
      rank: 0,
      subtype: 'largeWidescreen573',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-largeWidescreen573.jpg',
      height: 322,
      width: 573,
      legacy: {},
      subType: 'largeWidescreen573',
      crop_name: 'largeWidescreen573',
    },
    {
      rank: 0,
      subtype: 'largeWidescreen1050',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-largeWidescreen1050.jpg',
      height: 591,
      width: 1050,
      legacy: {},
      subType: 'largeWidescreen1050',
      crop_name: 'largeWidescreen1050',
    },
    {
      rank: 0,
      subtype: 'wide',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-thumbWide.jpg',
      height: 126,
      width: 190,
      legacy: {
        widewidth: 190,
        wideheight: 126,
        wide: 'images/2025/03/09/opinion/09klein/09klein-thumbWide.jpg',
      },
      subType: 'wide',
      crop_name: 'thumbWide',
    },
    {
      rank: 0,
      subtype: 'videoThumb',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoThumb.jpg',
      height: 50,
      width: 75,
      legacy: {},
      subType: 'videoThumb',
      crop_name: 'videoThumb',
    },
    {
      rank: 0,
      subtype: 'videoLarge',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoLarge.jpg',
      height: 507,
      width: 768,
      legacy: {},
      subType: 'videoLarge',
      crop_name: 'videoLarge',
    },
    {
      rank: 0,
      subtype: 'mediumThreeByTwo210',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumThreeByTwo210.jpg',
      height: 140,
      width: 210,
      legacy: {},
      subType: 'mediumThreeByTwo210',
      crop_name: 'mediumThreeByTwo210',
    },
    {
      rank: 0,
      subtype: 'mediumThreeByTwo225',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumThreeByTwo225.jpg',
      height: 150,
      width: 225,
      legacy: {},
      subType: 'mediumThreeByTwo225',
      crop_name: 'mediumThreeByTwo225',
    },
    {
      rank: 0,
      subtype: 'mediumThreeByTwo440',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumThreeByTwo440.jpg',
      height: 293,
      width: 440,
      legacy: {},
      subType: 'mediumThreeByTwo440',
      crop_name: 'mediumThreeByTwo440',
    },
    {
      rank: 0,
      subtype: 'mediumThreeByTwo252',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumThreeByTwo252.jpg',
      height: 168,
      width: 252,
      legacy: {},
      subType: 'mediumThreeByTwo252',
      crop_name: 'mediumThreeByTwo252',
    },
    {
      rank: 0,
      subtype: 'mediumThreeByTwo378',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumThreeByTwo378.jpg',
      height: 252,
      width: 378,
      legacy: {},
      subType: 'mediumThreeByTwo378',
      crop_name: 'mediumThreeByTwo378',
    },
    {
      rank: 0,
      subtype: 'threeByTwoLargeAt2X',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-threeByTwoLargeAt2X.jpg',
      height: 3736,
      width: 5601,
      legacy: {},
      subType: 'threeByTwoLargeAt2X',
      crop_name: 'threeByTwoLargeAt2X',
    },
    {
      rank: 0,
      subtype: 'threeByTwoMediumAt2X',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-threeByTwoMediumAt2X.jpg',
      height: 1001,
      width: 1500,
      legacy: {},
      subType: 'threeByTwoMediumAt2X',
      crop_name: 'threeByTwoMediumAt2X',
    },
    {
      rank: 0,
      subtype: 'threeByTwoSmallAt2X',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-threeByTwoSmallAt2X.jpg',
      height: 400,
      width: 600,
      legacy: {},
      subType: 'threeByTwoSmallAt2X',
      crop_name: 'threeByTwoSmallAt2X',
    },
    {
      rank: 0,
      subtype: 'articleInline',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-articleInline.jpg',
      height: 127,
      width: 190,
      legacy: {},
      subType: 'articleInline',
      crop_name: 'articleInline',
    },
    {
      rank: 0,
      subtype: 'hpSmall',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-hpSmall.jpg',
      height: 109,
      width: 163,
      legacy: {},
      subType: 'hpSmall',
      crop_name: 'hpSmall',
    },
    {
      rank: 0,
      subtype: 'blogSmallInline',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-blogSmallInline.jpg',
      height: 101,
      width: 151,
      legacy: {},
      subType: 'blogSmallInline',
      crop_name: 'blogSmallInline',
    },
    {
      rank: 0,
      subtype: 'mediumFlexible177',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mediumFlexible177.jpg',
      height: 118,
      width: 177,
      legacy: {},
      subType: 'mediumFlexible177',
      crop_name: 'mediumFlexible177',
    },
    {
      rank: 0,
      subtype: 'videoSmall',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSmall.jpg',
      height: 281,
      width: 500,
      legacy: {},
      subType: 'videoSmall',
      crop_name: 'videoSmall',
    },
    {
      rank: 0,
      subtype: 'videoHpMedium',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoHpMedium.jpg',
      height: 211,
      width: 375,
      legacy: {},
      subType: 'videoHpMedium',
      crop_name: 'videoHpMedium',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine600',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine600.jpg',
      height: 338,
      width: 600,
      legacy: {},
      subType: 'videoSixteenByNine600',
      crop_name: 'videoSixteenByNine600',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine540',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine540.jpg',
      height: 304,
      width: 540,
      legacy: {},
      subType: 'videoSixteenByNine540',
      crop_name: 'videoSixteenByNine540',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine495',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine495.jpg',
      height: 278,
      width: 495,
      legacy: {},
      subType: 'videoSixteenByNine495',
      crop_name: 'videoSixteenByNine495',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine390',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine390.jpg',
      height: 219,
      width: 390,
      legacy: {},
      subType: 'videoSixteenByNine390',
      crop_name: 'videoSixteenByNine390',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine1050',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine1050.jpg',
      height: 591,
      width: 1050,
      legacy: {},
      subType: 'videoSixteenByNine1050',
      crop_name: 'videoSixteenByNine1050',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine480',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine480.jpg',
      height: 270,
      width: 480,
      legacy: {},
      subType: 'videoSixteenByNine480',
      crop_name: 'videoSixteenByNine480',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine310',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine310.jpg',
      height: 174,
      width: 310,
      legacy: {},
      subType: 'videoSixteenByNine310',
      crop_name: 'videoSixteenByNine310',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine225',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine225.jpg',
      height: 126,
      width: 225,
      legacy: {},
      subType: 'videoSixteenByNine225',
      crop_name: 'videoSixteenByNine225',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine96',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine96.jpg',
      height: 54,
      width: 96,
      legacy: {},
      subType: 'videoSixteenByNine96',
      crop_name: 'videoSixteenByNine96',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine3000',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine3000.jpg',
      height: 1688,
      width: 3000,
      legacy: {},
      subType: 'videoSixteenByNine3000',
      crop_name: 'videoSixteenByNine3000',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine768',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine768.jpg',
      height: 432,
      width: 768,
      legacy: {},
      subType: 'videoSixteenByNine768',
      crop_name: 'videoSixteenByNine768',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNine150',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNine150.jpg',
      height: 84,
      width: 150,
      legacy: {},
      subType: 'videoSixteenByNine150',
      crop_name: 'videoSixteenByNine150',
    },
    {
      rank: 0,
      subtype: 'videoSixteenByNineJumbo1600',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoSixteenByNineJumbo1600.jpg',
      height: 900,
      width: 1600,
      legacy: {},
      subType: 'videoSixteenByNineJumbo1600',
      crop_name: 'videoSixteenByNineJumbo1600',
    },
    {
      rank: 0,
      subtype: 'miniMoth',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-miniMoth.jpg',
      height: 70,
      width: 151,
      legacy: {},
      subType: 'miniMoth',
      crop_name: 'miniMoth',
    },
    {
      rank: 0,
      subtype: 'windowsTile336H',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-windowsTile336H.jpg',
      height: 336,
      width: 694,
      legacy: {},
      subType: 'windowsTile336H',
      crop_name: 'windowsTile336H',
    },
    {
      rank: 0,
      subtype: 'videoFifteenBySeven1305',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoFifteenBySeven1305.jpg',
      height: 609,
      width: 1305,
      legacy: {},
      subType: 'videoFifteenBySeven1305',
      crop_name: 'videoFifteenBySeven1305',
    },
    {
      rank: 0,
      subtype: 'videoFifteenBySeven2610',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-videoFifteenBySeven2610.jpg',
      height: 1218,
      width: 2610,
      legacy: {},
      subType: 'videoFifteenBySeven2610',
      crop_name: 'videoFifteenBySeven2610',
    },
    {
      rank: 0,
      subtype: 'facebookJumbo',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-facebookJumbo.jpg',
      height: 550,
      width: 1050,
      legacy: {},
      subType: 'facebookJumbo',
      crop_name: 'facebookJumbo',
    },
    {
      rank: 0,
      subtype: 'watch308',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-watch308.jpg',
      height: 348,
      width: 312,
      legacy: {},
      subType: 'watch308',
      crop_name: 'watch308',
    },
    {
      rank: 0,
      subtype: 'watch268',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-watch268.jpg',
      height: 304,
      width: 272,
      legacy: {},
      subType: 'watch268',
      crop_name: 'watch268',
    },
    {
      rank: 0,
      subtype: 'verticalTwoByThree735',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-verticalTwoByThree735.jpg',
      height: 1103,
      width: 735,
      legacy: {},
      subType: 'verticalTwoByThree735',
      crop_name: 'verticalTwoByThree735',
    },
    {
      rank: 0,
      subtype: 'mobileMasterAt3x',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-mobileMasterAt3x.jpg',
      height: 1801,
      width: 1800,
      legacy: {},
      subType: 'mobileMasterAt3x',
      crop_name: 'mobileMasterAt3x',
    },
    {
      rank: 0,
      subtype: 'googleFourByThree',
      caption: null,
      credit: null,
      type: 'image',
      url: 'images/2025/03/09/opinion/09klein/09klein-googleFourByThree.jpg',
      height: 600,
      width: 800,
      legacy: {},
      subType: 'googleFourByThree',
      crop_name: 'googleFourByThree',
    },
  ],
  headline: {
    main: 'There Is a Liberal Answer to Elon Musk',
    kicker: 'Ezra Klein',
    content_kicker: null,
    print_headline: 'There Is a Liberal Answer To the Trump-Musk Alliance',
    name: null,
    seo: null,
    sub: null,
  },
  keywords: [
    {
      name: 'subject',
      value: 'United States Politics and Government',
      rank: 1,
      major: 'N',
    },
    {
      name: 'subject',
      value: 'High-Speed Rail Projects',
      rank: 2,
      major: 'N',
    },
    {
      name: 'subject',
      value: 'Presidential Election of 2024',
      rank: 3,
      major: 'N',
    },
    {
      name: 'subject',
      value: 'Zoning',
      rank: 4,
      major: 'N',
    },
    {
      name: 'subject',
      value: 'Transit Systems',
      rank: 5,
      major: 'N',
    },
    {
      name: 'subject',
      value: 'Federal-State Relations (US)',
      rank: 6,
      major: 'N',
    },
    {
      name: 'organizations',
      value: 'California High-Speed Rail Authority',
      rank: 7,
      major: 'N',
    },
    {
      name: 'organizations',
      value: 'Government Efficiency Department (US)',
      rank: 8,
      major: 'N',
    },
    {
      name: 'organizations',
      value: 'Republican Party',
      rank: 9,
      major: 'N',
    },
    {
      name: 'organizations',
      value: 'Democratic Party',
      rank: 10,
      major: 'N',
    },
    {
      name: 'persons',
      value: 'Biden, Joseph R Jr',
      rank: 11,
      major: 'N',
    },
    {
      name: 'persons',
      value: 'Brown, Edmund G Jr',
      rank: 12,
      major: 'N',
    },
    {
      name: 'persons',
      value: 'Newsom, Gavin',
      rank: 13,
      major: 'N',
    },
    {
      name: 'persons',
      value: 'Musk, Elon',
      rank: 14,
      major: 'N',
    },
    {
      name: 'persons',
      value: 'Trump, Donald J',
      rank: 15,
      major: 'N',
    },
    {
      name: 'persons',
      value: 'Vance, J D',
      rank: 16,
      major: 'N',
    },
    {
      name: 'glocations',
      value: 'California',
      rank: 17,
      major: 'N',
    },
  ],
  pub_date: '2025-03-09T06:00:20+0000',
  document_type: 'article',
  news_desk: 'OpEd',
  section_name: 'Opinion',
  byline: {
    original: 'By Ezra Klein',
    person: [
      {
        firstname: 'Ezra',
        middlename: null,
        lastname: 'Klein',
        qualifier: null,
        title: null,
        role: 'reported',
        organization: '',
        rank: 1,
      },
    ],
    organization: null,
  },
  type_of_material: 'Op-Ed',
  _id: 'nyt://article/14780ced-fadc-5ce0-9f36-29cccf91b0f2',
  word_count: 2893,
  uri: 'nyt://article/14780ced-fadc-5ce0-9f36-29cccf91b0f2',
};

interface IMeta {
  hits: number;
  offset: number;
  time: number;
}

axiosInstance.interceptors.response.use(
  ({ data }) => {
    const articles = data?.response?.docs.map((item: typeof a) =>
      transformArticle(item)
    );

    return { ...data?.response.meta, articles };
  },
  (error) => {
    return Promise.reject(
      error.response?.data || { message: 'Something went wrong' }
    );
  }
);

export async function getFromNYTimes(params?: {
  query?: string;
  startDate?: string;
  endDate?: string;
  size?: number;
  page?: number;
  category?: string;
}) {
  const {
    //     query: q,
    //     startDate: from,
    //     endDate: to,
    //     size: max,
    //     page,
    //     category,
  } = params || {};
  //   console.log({ key: import.meta.env.VITE_GNEWS_API_KEY });
  const res = await axiosInstance.get<IApiResponse>('', {
    params: {
      'api-key': import.meta.env.VITE_NYTIMES_API_KEY,
      //       lang: 'en',
      //       category,
      //       //       sortBy: 'popularity',
      //       //       sources: 'bbc-news',
      //       from,
      //       to,
      //       q,
      //       page,
      //       max,
    },
  });

  return res as unknown as IApiResponse;
}

import ArticleResult from "./ArticleResult";
import { useEffect, useState } from "react";
import { getApi } from "../../services/api";
const Article = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await getApi("content/news");
      setNews(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="font-bold mb-8 md:p-10 block p-6 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h2 className="text-3xl mb-5" href="/">
          관련 뉴스
        </h2>
      </div>
      <div>
        <ArticleResult items={news} />
      </div>
    </div>
  );
};

export default Article;

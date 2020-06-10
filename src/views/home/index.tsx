import React, { useState, useEffect } from 'react';
import { ArticleLine } from 'zanext';
import { ArticleOutputData } from '../../model/article';
import getArticlesAxios from '../../service/article';
import './index.scss';


const Home = () => {
  const [articleListData, setArticleListData] = useState<ArticleOutputData[]>([]);

  const loadArticleList = async () => {
    const { data } = await getArticlesAxios();
    setArticleListData(data);
  }

  useEffect(() => {
    loadArticleList()
  }, []);

  return (
    <ArticleLine list={articleListData as []} />
  )
}

export default Home;
import React, { useState, useEffect } from 'react';
import { ArticleLine } from 'zanext';
import { ArticleOutputData } from '../../model/article';
import { IArticleLineItemProps } from 'zanext/dist/components/article-line/Item';
import getArticlesAxios from '../../service/article';
import './index.scss';

interface ArticleList {
  id: number;
  title: string;
  createTime?: string;
  cover?: string;
  intro?: string;
}

const Home = () => {
  const [articleListData, setArticleListData] = useState<IArticleLineItemProps[]>([]);

  const loadArticleList = async () => {
    const { data } = await getArticlesAxios();
    console.log(data)
    // setArticleListData(data );
  }

  useEffect(() => {
    loadArticleList()
  }, []);

  return (
    <section>
      <ArticleLine list={articleListData} />
    </section >
  )
}

export default Home;
import http from '../api/http';
import ApiUrl from '../api/url';
import { ArticleOutputData } from '../model/article';
import { IResponse } from '../model/response';

const getArticlesAxios = () => {
  return http.get<IResponse<ArticleOutputData[]>>(ApiUrl.Article);
}

export default getArticlesAxios;
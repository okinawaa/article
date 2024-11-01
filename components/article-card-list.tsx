import { Article } from "@/types/article"

import { ArticleCard } from "./ui/article-card"

export interface IArticleProps {
  articles: Article[]
}

export const ArticleCardList = ({ articles }: IArticleProps) => {
  return (
    <div className="mt-4 flex flex-col gap-1">
      {articles.map((article, i) => (
        <ArticleCard article={article} index={i} key={article.title} />
      ))}
    </div>
  )
}

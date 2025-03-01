// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

const MyArticlePage = ({ id }) => {
  return (
    <>
      <Metadata title="MyArticle" description="MyArticle page" />

      <ArticleCell id={id} />
    </>
  )
}

export default MyArticlePage

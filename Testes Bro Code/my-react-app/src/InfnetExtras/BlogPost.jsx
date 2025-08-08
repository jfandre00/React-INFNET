import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";

function BlogPost({post}) {

    return (
        <article>
            <ArticleHeader title={post.title} />
            <ArticleContent content={post.content} />
        </article>
    );
}

export default BlogPost;
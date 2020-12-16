import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const PostSeo = ({ title, description, publishedAt, author, heroImage, url }) => {
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: heroImage.url,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Self Sourced Man`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName={author.name}
        dateModified={date}
        datePublished={date}
        description={description}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={author.name}
        title={title}
        url={url}
      />
    </>
  );
};

export default PostSeo;

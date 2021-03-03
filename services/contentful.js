import { createClient } from 'contentful';

export const CONTENT_TYPE_BLOGPOST = 'blogPost';
export const CONTENT_TYPE_PERSON = 'author';
export const CONTENT_TYPE_TAGS = 'tag';

const Space = process.env.CONTENTFUL_SPACE;
const Token = process.env.CONTENTFUL_TOKEN;

export class ContentfulService {
  client = createClient({
    space: Space,
    accessToken: Token
  });

  /**
   * Maps the items fetched by contentful
   * @param entries
   */
  mapBlogPost(entries) {
    return entries.map(({ sys, fields }) => ({
        id: sys.id,
        title: fields.title,
        description: fields.description,
        heroImage: fields.heroImage.fields.file.url,
        slug: fields.slug,
        tags: null,
        publishedAt: fields.publishedAt
          ? new Date(fields.publishedAt).toISOString()
          : new Date(sys.createdAt).toISOString()
      })
    );
  }

  async fetchPostBySlug(slug) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug': slug
    });
  }

  async fetchPodcastBySlug(slug) {
    return await this.client.getEntries({
      content_type: CONTENT_TYPE_PODCAST,
      'fields.slug': slug
    });
  }

  /**
   * Get all tags
   */
  async getAllTags() {
    const content = await this.client.getEntries({
      content_type: CONTENT_TYPE_TAGS
    });

    const tags = content.items.map(
      ({ sys, fields }) => ({
        id: sys.id,
        name: fields.name
      })
    );

    return { tags };
  }

  async getBlogPostEntries(
    { limit, skip, tag } = {
      limit: 5,
      skip: 0,
      tag: ''
    }
  ) {
    try {
      const contents = await this.client.getEntries({
        include: 1,
        limit,
        skip,
        order: 'fields.publishedAt',
        content_type: CONTENT_TYPE_BLOGPOST
      });

      const entries = this.mapBlogPost(contents.items);

      const total = contents.total;

      return { entries, total, limit, skip };
    } catch (error) {
      console.log(error);
    }
  }

  async getPostBySlug(slug) {
    try {
      const content = await this.fetchPostBySlug(slug);

      const entry = content.items[0];

      const author = {
        name: entry.fields.author.fields.name,
        profilePhoto: {
          url: entry.fields.author.fields.profilePhoto.fields.file.url,
        },
        shortBio: entry.fields.author.fields.shortBio
      };

      return {
        id: entry.sys.id,
        slug: entry.fields.slug,
        body: entry.fields.mainBody,
        title: entry.fields.title,
        spotifyEmbedUri: entry.fields.spotifyEmbedUri,
        description: entry.fields.description,
        tags: null,
        heroImage: { url: entry.fields.heroImage.fields.file.url },
        author: { ...author, id: entry.fields.author.sys.id },
        publishedAt: entry.fields.publishedAt
          ? new Date(entry.fields.publishedAt).toISOString()
          : new Date(entry.sys.createdAt).toISOString()
      };
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSuggestions(tags, currentArticleSlug) {
    const limit = 3;
    let entries = [];

    const initialOptions = {
      content_type: CONTENT_TYPE_BLOGPOST,
      limit,
      // find at least one matching tag, else undefined properties are not copied
      // 'fields.tags.sys.id[in]': tags.length ? tags.join(',') : undefined,
      'fields.slug[ne]': currentArticleSlug // exclude current article
    };

    try {
      const suggestionsByTags = await this.client.getEntries(initialOptions);

      entries = suggestionsByTags.items;
      // number of suggestions by tag is less than the limit
      if (suggestionsByTags.total < limit) {
        // exclude already picked slugs
        const slugsToExclude = [
          ...suggestionsByTags.items,
          { fields: { slug: currentArticleSlug } }
        ]
          .map((item) => item.fields.slug)
          .join(',');

        // fetch random suggestions
        const randomSuggestions = await this.client.getEntries({
          content_type: CONTENT_TYPE_BLOGPOST,
          limit: limit - suggestionsByTags.total,
          'fields.slug[nin]': slugsToExclude // exclude slugs already fetched
        });

        entries = [...entries, ...randomSuggestions.items];
      }

      entries = this.mapBlogPost(entries);

      return entries;
    } catch (error) {
      console.error(error);
    }
  }
}

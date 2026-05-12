import Link from 'next/link';
import { blogPosts, getBlogBySlug, getRelatedPosts, formatBlogDate } from '@/data/blogs';
import BlogDetailClient from './BlogDetailClient';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO metadata per blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found — Xerodirt Blog',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} — Xerodirt Blog`,
    description: post.metaDescription,
    keywords: post.metaKeywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <span className="section-label">404</span>
            <h1>Post Not Found</h1>
            <p>The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          </div>
        </section>
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <Link href="/blog" className="btn btn-primary">← Back to Blog</Link>
          </div>
        </section>
      </>
    );
  }

  const relatedPosts = getRelatedPosts(slug, 2);

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Xerodirt',
      logo: {
        '@type': 'ImageObject',
        url: '/xerodirt-favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://xerodirt.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ====== HERO ====== */}
      <section className="blog-post-hero">
        <div className="blog-post-hero-bg" />
        <div className="container">
          {/* Breadcrumbs */}
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="blog-breadcrumb-sep">/</span>
            <Link href="/blog">Blog</Link>
            <span className="blog-breadcrumb-sep">/</span>
            <span className="blog-breadcrumb-current">{post.title}</span>
          </nav>

          <div className="blog-post-hero-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-post-hero-tag">{tag}</span>
            ))}
          </div>

          <h1 className="blog-post-hero-title">{post.title}</h1>

          <div className="blog-post-hero-meta">
            <div className="blog-post-hero-author">
              <div className="blog-card-avatar">{post.author.avatarInitial}</div>
              <div>
                <div className="blog-post-hero-author-name">{post.author.name}</div>
                <div className="blog-post-hero-author-role">{post.author.role}</div>
              </div>
            </div>
            <div className="blog-post-hero-details">
              <time dateTime={post.date}>📅 {formatBlogDate(post.date)}</time>
              <span>⏱️ {post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== COVER IMAGE ====== */}
      <div className="blog-post-cover-wrapper">
        <div className="container">
          <img
            src={post.coverImage}
            alt={post.title}
            className="blog-post-cover-image"
          />
        </div>
      </div>

      {/* ====== ARTICLE CONTENT ====== */}
      <article className="blog-post-article" id="blog-article">
        <div className="container">
          <div className="blog-post-layout">
            <div className="blog-post-content">
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Card */}
              <div className="blog-author-card" id="blog-author-card">
                <div className="blog-author-card-avatar">{post.author.avatarInitial}</div>
                <div className="blog-author-card-info">
                  <h4>Written by {post.author.name}</h4>
                  <p>{post.author.role}</p>
                  <p className="blog-author-card-desc">
                    Pune&apos;s most trusted cleaning service. 5000+ homes cleaned, 4.9★ Google rating, 50+ trained professionals.
                  </p>
                </div>
              </div>

              {/* Share Buttons */}
              <BlogDetailClient post={post} />
            </div>

            {/* Sidebar */}
            <aside className="blog-post-sidebar">
              <div className="blog-sidebar-card blog-sidebar-toc">
                <h4>📌 Quick Links</h4>
                <div className="blog-sidebar-links">
                  <Link href="/book" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                    Book a Service →
                  </Link>
                  <a
                    href="https://wa.me/917559337336?text=Hi%20Xerodirt!%20I%20read%20your%20blog%20and%20need%20help."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="blog-sidebar-card">
                <h4>🏷️ Tags</h4>
                <div className="blog-sidebar-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-sidebar-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* ====== RELATED POSTS ====== */}
      {relatedPosts.length > 0 && (
        <section className="section section-light" id="related-posts">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-label">Keep Reading</span>
              <h2 className="section-title">Related Articles</h2>
              <p className="section-subtitle">More expert tips and guides from our cleaning professionals.</p>
            </div>
            <div className="blog-grid blog-grid-2">
              {relatedPosts.map((rp, i) => (
                <Link
                  href={`/blog/${rp.slug}`}
                  key={rp.slug}
                  className="blog-card reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="blog-card-image-wrapper">
                    <img
                      src={rp.coverImage}
                      alt={rp.title}
                      className="blog-card-image"
                      loading="lazy"
                    />
                    <div className="blog-card-tags">
                      {rp.tags.map((tag) => (
                        <span key={tag} className="blog-card-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <time dateTime={rp.date}>{formatBlogDate(rp.date)}</time>
                      <span className="blog-card-meta-dot">·</span>
                      <span>{rp.readingTime} min read</span>
                    </div>
                    <h2 className="blog-card-title">{rp.title}</h2>
                    <p className="blog-card-excerpt">{rp.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <div className="blog-card-avatar">{rp.author.avatarInitial}</div>
                        <span className="blog-card-author-name">{rp.author.name}</span>
                      </div>
                      <span className="blog-card-read-more">Read Article →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

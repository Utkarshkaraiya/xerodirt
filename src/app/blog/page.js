'use client';
import { useState } from 'react';
import Link from 'next/link';
import { blogPosts, getAllTags, formatBlogDate } from '@/data/blogs';

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All');
  const tags = getAllTags();

  const filteredPosts =
    activeTag === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(activeTag));

  return (
    <>
      {/* ====== HERO ====== */}
      <section className="page-hero">
        <div className="page-hero-bg-dots" />
        <div className="container">
          <span className="section-label">📝 Our Blog</span>
          <h1>Cleaning Tips, Guides &amp; News</h1>
          <p>Expert advice from Pune&apos;s trusted cleaning professionals. Stay informed, stay clean.</p>
        </div>
      </section>

      {/* ====== TAG FILTERS ====== */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="blog-tag-filters" id="blog-tag-filters">
            {tags.map((tag) => (
              <button
                key={tag}
                className={`blog-tag-pill ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
                id={`blog-filter-${tag.toLowerCase()}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BLOG GRID ====== */}
      <section className="section blog-listing-section" id="blog-listing">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="blog-empty-state">
              <span className="blog-empty-icon">📭</span>
              <h3>No posts found</h3>
              <p>No articles match this filter yet. Check back soon!</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map((post, i) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="blog-card reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                  id={`blog-card-${post.slug}`}
                >
                  <div className="blog-card-image-wrapper">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="blog-card-image"
                      loading="lazy"
                    />
                    <div className="blog-card-tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="blog-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                      <span className="blog-card-meta-dot">·</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <div className="blog-card-avatar">{post.author.avatarInitial}</div>
                        <span className="blog-card-author-name">{post.author.name}</span>
                      </div>
                      <span className="blog-card-read-more">Read Article →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="cta-section" id="blog-cta">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Need Professional Cleaning?</h2>
            <p>Put these tips into practice — or let our experts handle it for you.</p>
            <div className="cta-buttons">
              <Link href="/book" className="btn btn-primary btn-lg">Book Now →</Link>
              <a
                href="https://wa.me/917559337336?text=Hi%20Xerodirt!%20I%20read%20your%20blog%20and%20would%20like%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

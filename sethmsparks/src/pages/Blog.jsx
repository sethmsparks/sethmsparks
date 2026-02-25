import './Blog.css'

const posts = [
  {
    title: 'How We Get Merit and Common Sense Wrong',
    date: 'Jan 26, 2025',
    slug: '2025/01/26/how-we-get-merit-and-common-sense-wrong',
  },
  {
    title: 'The Best Books I Read in 2024',
    date: 'Jan 2, 2025',
    slug: '2025/01/02/the-best-books-i-read-in-2024',
  },
  {
    title: 'The Best Movies and TV I Watched in 2024',
    date: 'Dec 31, 2024',
    slug: '2024/12/31/the-best-movies-and-tv-i-watched-in-2024',
  },
  {
    title: 'Gifts I Can Recommend',
    date: 'Dec 13, 2024',
    slug: '2024/12/13/gifts-i-can-recommend',
  },
  {
    title: "You're Getting Screwed by Ads",
    date: 'Oct 8, 2024',
    slug: '2024/10/08/youre-getting-screwed-by-ads',
  },
  {
    title: 'About "Play Nice" — the Blizzard Entertainment Book',
    date: 'Oct 7, 2024',
    slug: '2024/10/07/about-the-play-nice-the-book-about-blizzard-entertainment',
  },
  {
    title: 'The Four Most Basic Leadership Fundamentals',
    date: 'Aug 23, 2024',
    slug: '2024/08/23/the-four-most-basic-leadership-fundamentals',
  },
  {
    title: 'Does Modern Church Need More Sunshine and Less Spotlight?',
    date: 'Oct 1, 2023',
    slug: '2023/10/01/does-church-need-more-sunshine-and-less-spotlight',
  },
]

export default function Blog() {
  return (
    <main className="page">
      <div className="container">
        <span className="section-label">Writing</span>
        <h1 className="page-title">Blog</h1>
        <p className="page-subtitle">
          Thoughts on design, marketing, leadership, and the occasional book or movie.
        </p>

        <div className="blog__list">
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`https://sethmsparks.com/${p.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="blog__post"
            >
              <span className="blog__date">{p.date}</span>
              <h2>{p.title}</h2>
              <span className="blog__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

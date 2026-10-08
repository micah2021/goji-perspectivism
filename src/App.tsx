import { useMemo, useState } from 'react'
import { BookOpen, Search, Sparkles } from 'lucide-react'
import { languages, phrases, type Language } from './data/phrases'
import './index.css'

function App() {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('All')
  const [selectedLanguage, setSelectedLanguage] = useState<Language | 'All'>('All')

  const topics = ['All', ...new Set(phrases.map((phrase) => phrase.topic))]
  const filteredPhrases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return phrases.filter((phrase) => {
      const matchesTopic = topic === 'All' || phrase.topic === topic
      const matchesLanguage = selectedLanguage === 'All' || selectedLanguage in phrase.translations
      const searchableText = [
        phrase.topic,
        phrase.english,
        phrase.context,
        ...Object.values(phrase.translations),
      ].join(' ').toLowerCase()

      return matchesTopic && matchesLanguage && searchableText.includes(normalizedQuery)
    })
  }, [query, selectedLanguage, topic])

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow"><Sparkles size={16} /> Language is a way of seeing</p>
          <h1>Goji <span>Perspectivism</span></h1>
          <p className="hero-copy">
            Compare Nigerian Hausa, Yoruba, Igbo, and Nigerian Pidgin through expressions,
            context, and the perspectives carried by each language.
          </p>
        </div>
      </section>

      <section className="workspace">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><BookOpen size={16} /> Phrase atlas</p>
            <h2>See more than one perspective</h2>
          </div>
          <p className="note">Starter entries are prompts for community review, not a substitute for fluent-speaker guidance.</p>
        </div>

        <div className="filters" aria-label="Phrase filters">
          <label className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search expressions or meanings"
              aria-label="Search expressions or meanings"
            />
          </label>
          <select value={topic} onChange={(event) => setTopic(event.target.value)} aria-label="Filter by topic">
            {topics.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={selectedLanguage} onChange={(event) => setSelectedLanguage(event.target.value as Language | 'All')} aria-label="Filter by language">
            <option value="All">All languages</option>
            {languages.map((language) => <option key={language}>{language}</option>)}
          </select>
        </div>

        <div className="language-key">
          {languages.map((language) => <span key={language}><i className={`dot ${language.toLowerCase().replaceAll(' ', '-')}`} />{language}</span>)}
        </div>

        <div className="phrase-grid">
          {filteredPhrases.map((phrase) => (
            <article className="phrase-card" key={phrase.id}>
              <div className="card-topline"><span>{phrase.topic}</span><span>English anchor</span></div>
              <h3>{phrase.english}</h3>
              <p className="context">{phrase.context}</p>
              <div className="translations">
                {languages.map((language) => (
                  <div className={`translation ${selectedLanguage !== 'All' && selectedLanguage !== language ? 'muted' : ''}`} key={language}>
                    <span>{language}</span>
                    <strong>{phrase.translations[language]}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredPhrases.length === 0 && <p className="empty">No entries match those filters yet.</p>}
      </section>
    </main>
  )
}

export default App

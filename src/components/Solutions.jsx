import { useMemo, useState } from "react";
import Editor from "@monaco-editor/react";

const DIFFICULTY_FILTERS = ["All", "Easy", "Medium", "Hard"];

function difficultyClass(difficulty) {
  return `difficulty-${difficulty.toLowerCase()}`;
}

export default function Solutions({ problems, completedIds, onPractice }) {
  const [difficulty, setDifficulty] = useState("All");
  const [pattern, setPattern] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const completed = new Set(completedIds);

  const patterns = useMemo(() => {
    const counts = new Map();
    for (const p of problems) {
      if (difficulty !== "All" && p.difficulty !== difficulty) continue;
      counts.set(p.pattern, (counts.get(p.pattern) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [problems, difficulty]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return problems.filter(
      (p) =>
        (difficulty === "All" || p.difficulty === difficulty) &&
        (pattern === "All" || p.pattern === pattern) &&
        (!query || p.title.toLowerCase().includes(query) || String(p.number).includes(query))
    );
  }, [problems, difficulty, pattern, search]);

  const selected =
    filtered.find((p) => p.id === selectedId) ?? filtered[0] ?? null;

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-header">
          <input
            className="search-input"
            type="search"
            placeholder="Search solutions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="difficulty-filters">
            {DIFFICULTY_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-btn ${difficulty === filter ? "active" : ""} ${
                  filter !== "All" ? difficultyClass(filter) : ""
                }`}
                onClick={() => setDifficulty(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <select
            className="pattern-select"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
          >
            <option value="All">All concepts / patterns</option>
            {patterns.map(([name, count]) => (
              <option key={name} value={name}>
                {name} ({count})
              </option>
            ))}
          </select>
        </div>

        <div className="problem-list">
          {filtered.length === 0 ? (
            <div className="empty-list">No solutions match your filters.</div>
          ) : (
            filtered.map((problem) => (
              <button
                key={problem.id}
                type="button"
                className={`problem-item ${selected?.id === problem.id ? "selected" : ""} ${
                  completed.has(problem.id) ? "completed" : ""
                }`}
                onClick={() => setSelectedId(problem.id)}
              >
                <span className="problem-number">
                  {completed.has(problem.id) ? "✓" : problem.number}
                </span>
                <span className="problem-title">{problem.title}</span>
                <span className={`problem-badge ${difficultyClass(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
              </button>
            ))
          )}
        </div>
      </aside>

      <main className="solution-panel">
        {selected ? (
          <>
            <div className="solution-header">
              <div>
                <h1 className="problem-heading">
                  {selected.number}. {selected.title}
                </h1>
                <span className={`difficulty-pill ${difficultyClass(selected.difficulty)}`}>
                  {selected.difficulty}
                </span>
                <span className="pattern-tag">{selected.pattern}</span>
              </div>
              <div className="editor-actions">
                {selected.url && (
                  <a className="leetcode-link" href={selected.url} target="_blank" rel="noreferrer">
                    Open on LeetCode
                  </a>
                )}
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => onPractice(selected.id)}
                >
                  Practice this
                </button>
              </div>
            </div>
            <div className="monaco-wrapper">
              <Editor
                height="100%"
                language="javascript"
                theme="vs-dark"
                path={`solution-${selected.id}.js`}
                value={selected.solution || "// No solution file found for this problem."}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  wordWrap: "on",
                  padding: { top: 12 },
                }}
              />
            </div>
          </>
        ) : (
          <div className="app-state">Select a solution to view.</div>
        )}
      </main>
    </>
  );
}

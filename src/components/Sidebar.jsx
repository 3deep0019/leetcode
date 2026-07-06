const FILTERS = ["All", "Easy", "Medium", "Hard"];

function difficultyClass(difficulty) {
  return `difficulty-${difficulty.toLowerCase()}`;
}

export default function Sidebar({
  problems,
  selectedId,
  difficulty,
  search,
  onDifficultyChange,
  onSearchChange,
  onSelect,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <input
          className="search-input"
          type="search"
          placeholder="Search problems..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div className="difficulty-filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${difficulty === filter ? "active" : ""} ${
                filter !== "All" ? difficultyClass(filter) : ""
              }`}
              onClick={() => onDifficultyChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="problem-list">
        {problems.length === 0 ? (
          <div className="empty-list">No problems match your filters.</div>
        ) : (
          problems.map((problem) => (
            <button
              key={problem.id}
              type="button"
              className={`problem-item ${selectedId === problem.id ? "selected" : ""}`}
              onClick={() => onSelect(problem.id)}
            >
              <span className="problem-number">{problem.number}</span>
              <span className="problem-title">{problem.title}</span>
              <span className={`problem-badge ${difficultyClass(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}

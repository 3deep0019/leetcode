import { DIFFICULTIES, getProgressStats } from "../lib/progress.js";

function difficultyClass(difficulty) {
  return `difficulty-${difficulty.toLowerCase()}`;
}

function ProgressBar({ label, solved, total, difficulty }) {
  const percent = total === 0 ? 0 : Math.round((solved / total) * 100);

  return (
    <div className="progress-card">
      <div className="progress-card-header">
        <span className={`difficulty-pill ${difficulty ? difficultyClass(difficulty) : ""}`}>
          {label}
        </span>
        <span className="progress-count">
          {solved}/{total} solved ({percent}%)
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default function Dashboard({
  username,
  problems,
  completedIds,
  onResetAll,
  onResetDifficulty,
  onChangeUser,
  onSelectProblem,
}) {
  const stats = getProgressStats(problems, completedIds);
  const completedSet = new Set(completedIds);

  const solvedProblems = problems.filter((p) => completedSet.has(p.id));

  function handleResetAll() {
    if (window.confirm("Reset all progress and saved code for every problem?")) {
      onResetAll();
    }
  }

  function handleResetDifficulty(difficulty) {
    const { solved, total } = stats.byDifficulty[difficulty];
    if (
      window.confirm(
        `Reset all ${difficulty} progress (${solved}/${total} solved) and clear saved code for those problems?`
      )
    ) {
      onResetDifficulty(difficulty);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p className="dashboard-greeting">
            Hi <strong>{username}</strong> — here's your progress
          </p>
        </div>
        <button type="button" className="btn btn-ghost" onClick={onChangeUser}>
          Change user
        </button>
      </div>

      <section className="dashboard-section">
        <h2>Overall</h2>
        <ProgressBar label="All Problems" solved={stats.solved} total={stats.total} />
      </section>

      <section className="dashboard-section">
        <h2>By Difficulty</h2>
        <div className="progress-grid">
          {DIFFICULTIES.map((difficulty) => (
            <ProgressBar
              key={difficulty}
              label={difficulty}
              difficulty={difficulty}
              solved={stats.byDifficulty[difficulty].solved}
              total={stats.byDifficulty[difficulty].total}
            />
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Reset Progress</h2>
        <p className="dashboard-note">
          Resetting clears completion status and saved code for the selected problems.
        </p>
        <div className="reset-actions">
          <button type="button" className="btn btn-danger" onClick={handleResetAll}>
            Reset All
          </button>
          {DIFFICULTIES.map((difficulty) => (
            <button
              key={difficulty}
              type="button"
              className={`btn btn-ghost reset-difficulty-btn ${difficultyClass(difficulty)}`}
              onClick={() => handleResetDifficulty(difficulty)}
            >
              Reset {difficulty}
            </button>
          ))}
        </div>
      </section>

      {solvedProblems.length > 0 && (
        <section className="dashboard-section">
          <h2>Solved ({solvedProblems.length})</h2>
          <div className="solved-list">
            {solvedProblems.map((problem) => (
              <button
                key={problem.id}
                type="button"
                className="solved-item"
                onClick={() => onSelectProblem(problem.id)}
              >
                <span className="problem-number">{problem.number}</span>
                <span>{problem.title}</span>
                <span className={`problem-badge ${difficultyClass(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

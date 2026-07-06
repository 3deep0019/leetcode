import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ProblemDescription from "./components/ProblemDescription.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import TestResults from "./components/TestResults.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UsernameModal from "./components/UsernameModal.jsx";
import { getStarterCode, runProblemTests } from "./lib/runner.js";
import {
  loadCode,
  loadProgress,
  loadUsername,
  saveCode,
  saveUsername,
} from "./lib/storage.js";
import {
  markProblemComplete,
  resetByDifficulty,
  resetEverything,
} from "./lib/progress.js";

export default function App() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(() => loadUsername());
  const [completedIds, setCompletedIds] = useState([]);
  const [view, setView] = useState("practice");
  const [difficulty, setDifficulty] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [code, setCode] = useState("");
  const [runState, setRunState] = useState(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}problems.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Run npm run problems to generate problems.json");
        return res.json();
      })
      .then((data) => {
        setProblems(data.problems);
        if (data.problems.length > 0) {
          setSelectedId(data.problems[0].id);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (username) {
      setCompletedIds(loadProgress(username));
    } else {
      setCompletedIds([]);
    }
  }, [username]);

  const selectedProblem = useMemo(
    () => problems.find((p) => p.id === selectedId) ?? null,
    [problems, selectedId]
  );

  useEffect(() => {
    if (!selectedProblem || !username) return;
    const starter = getStarterCode(selectedProblem);
    setCode(loadCode(username, selectedProblem.id, starter));
    setRunState(null);
  }, [selectedProblem, username]);

  const filteredProblems = useMemo(() => {
    const query = search.trim().toLowerCase();
    return problems.filter((problem) => {
      const matchesDifficulty =
        difficulty === "All" || problem.difficulty === difficulty;
      const matchesSearch =
        !query ||
        problem.title.toLowerCase().includes(query) ||
        String(problem.number).includes(query) ||
        problem.id.toLowerCase().includes(query);
      return matchesDifficulty && matchesSearch;
    });
  }, [problems, difficulty, search]);

  const solvedCount = completedIds.length;

  function handleUsernameSubmit(name) {
    saveUsername(name);
    setUsername(name);
    setCompletedIds(loadProgress(name));
  }

  function handleChangeUser() {
    saveUsername("");
    setUsername("");
    setCompletedIds([]);
    setView("practice");
  }

  function handleCodeChange(value) {
    setCode(value);
    if (selectedProblem && username) {
      saveCode(username, selectedProblem.id, value);
    }
  }

  function handleReset() {
    if (!selectedProblem || !username) return;
    const starter = getStarterCode(selectedProblem);
    setCode(starter);
    saveCode(username, selectedProblem.id, starter);
    setRunState(null);
  }

  async function handleRun() {
    if (!selectedProblem || !username || running) return;
    setRunning(true);
    setRunState(null);
    await new Promise((resolve) => setTimeout(resolve, 0));
    const result = runProblemTests(code, selectedProblem);
    setRunState(result);
    if (result.ok) {
      setCompletedIds(markProblemComplete(username, selectedProblem.id));
    }
    setRunning(false);
  }

  function handleResetAll() {
    const next = resetEverything(username);
    setCompletedIds(next);
    if (selectedProblem) {
      const starter = getStarterCode(selectedProblem);
      setCode(starter);
      setRunState(null);
    }
  }

  function handleResetDifficulty(difficultyLevel) {
    const next = resetByDifficulty(username, problems, difficultyLevel);
    setCompletedIds(next);
    if (selectedProblem?.difficulty === difficultyLevel) {
      const starter = getStarterCode(selectedProblem);
      setCode(starter);
      setRunState(null);
    }
  }

  function handleSelectProblem(problemId) {
    setSelectedId(problemId);
    setView("practice");
  }

  const runShortcut = navigator.platform.includes("Mac") ? "⌘↵" : "Ctrl+↵";

  if (loading) {
    return <div className="app-state">Loading problems...</div>;
  }

  if (error) {
    return <div className="app-state app-state-error">{error}</div>;
  }

  if (!username) {
    return <UsernameModal onSubmit={handleUsernameSubmit} />;
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-left">
          <div className="brand">LeetCode Practice</div>
          <nav className="topbar-nav">
            <button
              type="button"
              className={`nav-btn ${view === "practice" ? "active" : ""}`}
              onClick={() => setView("practice")}
            >
              Practice
            </button>
            <button
              type="button"
              className={`nav-btn ${view === "dashboard" ? "active" : ""}`}
              onClick={() => setView("dashboard")}
            >
              Dashboard
            </button>
          </nav>
        </div>
        <div className="topbar-meta">
          <span className="topbar-user">{username}</span>
          <span className="topbar-progress">
            {solvedCount}/{problems.length} solved
          </span>
        </div>
      </header>

      <div className={`workspace ${view === "dashboard" ? "workspace-dashboard" : ""}`}>
        {view === "practice" ? (
          <>
            <Sidebar
              problems={filteredProblems}
              selectedId={selectedId}
              difficulty={difficulty}
              search={search}
              completedIds={completedIds}
              onDifficultyChange={setDifficulty}
              onSearchChange={setSearch}
              onSelect={setSelectedId}
            />

            <main className="main-panel">
              {selectedProblem ? (
                <>
                  <ProblemDescription problem={selectedProblem} />
                  <div className="editor-section">
                    <div className="editor-toolbar">
                      <span className="editor-label">Code</span>
                      <div className="editor-actions">
                        <button type="button" className="btn btn-ghost" onClick={handleReset}>
                          Reset code
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleRun}
                          disabled={running}
                          title={`Run (${runShortcut})`}
                        >
                          {running ? "Running..." : `Run ${runShortcut}`}
                        </button>
                      </div>
                    </div>
                    <CodeEditor value={code} onChange={handleCodeChange} onRun={handleRun} />
                    <TestResults runState={runState} />
                  </div>
                </>
              ) : (
                <div className="app-state">Select a problem to start practicing.</div>
              )}
            </main>
          </>
        ) : (
          <main className="dashboard-panel">
            <Dashboard
              username={username}
              problems={problems}
              completedIds={completedIds}
              onResetAll={handleResetAll}
              onResetDifficulty={handleResetDifficulty}
              onChangeUser={handleChangeUser}
              onSelectProblem={handleSelectProblem}
            />
          </main>
        )}
      </div>
    </div>
  );
}

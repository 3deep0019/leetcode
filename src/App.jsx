import { useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ProblemDescription from "./components/ProblemDescription.jsx";
import CodeEditor from "./components/CodeEditor.jsx";
import TestResults from "./components/TestResults.jsx";
import { getStarterCode, runProblemTests } from "./lib/runner.js";
import { loadCode, saveCode } from "./lib/storage.js";

export default function App() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const selectedProblem = useMemo(
    () => problems.find((p) => p.id === selectedId) ?? null,
    [problems, selectedId]
  );

  useEffect(() => {
    if (!selectedProblem) return;
    const starter = getStarterCode(selectedProblem);
    setCode(loadCode(selectedProblem.id, starter));
    setRunState(null);
  }, [selectedProblem]);

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

  function handleCodeChange(value) {
    setCode(value);
    if (selectedProblem) {
      saveCode(selectedProblem.id, value);
    }
  }

  function handleReset() {
    if (!selectedProblem) return;
    const starter = getStarterCode(selectedProblem);
    setCode(starter);
    saveCode(selectedProblem.id, starter);
    setRunState(null);
  }

  async function handleRun() {
    if (!selectedProblem) return;
    setRunning(true);
    setRunState(null);
    await new Promise((resolve) => setTimeout(resolve, 0));
    const result = runProblemTests(code, selectedProblem);
    setRunState(result);
    setRunning(false);
  }

  if (loading) {
    return <div className="app-state">Loading problems...</div>;
  }

  if (error) {
    return <div className="app-state app-state-error">{error}</div>;
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">LeetCode Practice</div>
        <div className="topbar-meta">
          {problems.length} problems · JavaScript
        </div>
      </header>

      <div className="workspace">
        <Sidebar
          problems={filteredProblems}
          selectedId={selectedId}
          difficulty={difficulty}
          search={search}
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
                      Reset
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRun}
                      disabled={running}
                    >
                      {running ? "Running..." : "Run"}
                    </button>
                  </div>
                </div>
                <CodeEditor value={code} onChange={handleCodeChange} />
                <TestResults runState={runState} />
              </div>
            </>
          ) : (
            <div className="app-state">Select a problem to start practicing.</div>
          )}
        </main>
      </div>
    </div>
  );
}

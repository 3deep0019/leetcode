function formatValue(value) {
  return JSON.stringify(value);
}

export default function TestResults({ runState }) {
  if (!runState) {
    return (
      <div className="test-results empty">
        Click <strong>Run</strong> to execute your code against sample test cases.
      </div>
    );
  }

  if (runState.error && runState.results.length === 0) {
    return (
      <div className="test-results">
        <div className="test-summary error">{runState.error}</div>
      </div>
    );
  }

  return (
    <div className="test-results">
      <div className={`test-summary ${runState.ok ? "success" : "error"}`}>
        {runState.summary ?? runState.error}
      </div>

      <div className="test-case-list">
        {runState.results.map((result) => (
          <div
            key={result.label}
            className={`test-case ${result.passed ? "passed" : "failed"}`}
          >
            <div className="test-case-header">
              <span className="test-case-status">{result.passed ? "Accepted" : "Wrong Answer"}</span>
              <span className="test-case-label">{result.label}</span>
            </div>
            <div className="test-case-detail">
              <div>
                <span className="detail-label">Input</span>
                <code>{formatValue(result.input)}</code>
              </div>
              <div>
                <span className="detail-label">Expected</span>
                <code>{formatValue(result.expected)}</code>
              </div>
              {!result.passed && (
                <div>
                  <span className="detail-label">{result.error ? "Error" : "Got"}</span>
                  <code>{result.error ?? formatValue(result.actual)}</code>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

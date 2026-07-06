function renderDescription(text) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={index} className="inline-code">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function difficultyClass(difficulty) {
  return `difficulty-${difficulty.toLowerCase()}`;
}

export default function ProblemDescription({ problem }) {
  const blocks = problem.description.split("\n\n");

  return (
    <section className="description-panel">
      <div className="description-header">
        <div>
          <h1 className="problem-heading">
            {problem.number}. {problem.title}
          </h1>
          <span className={`difficulty-pill ${difficultyClass(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
        </div>
        {problem.url && (
          <a className="leetcode-link" href={problem.url} target="_blank" rel="noreferrer">
            Open on LeetCode
          </a>
        )}
      </div>

      <div className="description-body">
        {blocks.map((block, index) => {
          const trimmed = block.trim();
          if (!trimmed) return null;

          const isExample =
            trimmed.startsWith("Input:") ||
            trimmed.startsWith("Output:") ||
            trimmed.startsWith("Explanation:") ||
            /^Example \d+:/.test(trimmed);

          if (isExample || trimmed.includes("Input:")) {
            return (
              <pre key={index} className="example-block">
                {renderDescription(trimmed)}
              </pre>
            );
          }

          return (
            <p key={index} className="description-paragraph">
              {renderDescription(trimmed)}
            </p>
          );
        })}
      </div>
    </section>
  );
}

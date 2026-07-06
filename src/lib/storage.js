const PREFIX = "leetcode-practice-code:";

export function loadCode(problemId, fallback) {
  try {
    return localStorage.getItem(PREFIX + problemId) ?? fallback;
  } catch {
    return fallback;
  }
}

export function saveCode(problemId, code) {
  try {
    localStorage.setItem(PREFIX + problemId, code);
  } catch {
    // ignore quota errors
  }
}

export function clearCode(problemId) {
  try {
    localStorage.removeItem(PREFIX + problemId);
  } catch {
    // ignore
  }
}

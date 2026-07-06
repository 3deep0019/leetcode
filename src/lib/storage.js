const USER_KEY = "leetcode-practice:user";
const PROGRESS_PREFIX = "leetcode-practice:progress:";
const CODE_PREFIX = "leetcode-practice:code:";

export function loadUsername() {
  try {
    return localStorage.getItem(USER_KEY) ?? "";
  } catch {
    return "";
  }
}

export function saveUsername(username) {
  try {
    localStorage.setItem(USER_KEY, username);
  } catch {
    // ignore
  }
}

function progressKey(username) {
  return PROGRESS_PREFIX + username;
}

function codeKey(username, problemId) {
  return `${CODE_PREFIX}${username}:${problemId}`;
}

export function loadProgress(username) {
  if (!username) return [];
  try {
    const raw = localStorage.getItem(progressKey(username));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveProgress(username, completedIds) {
  if (!username) return;
  try {
    localStorage.setItem(progressKey(username), JSON.stringify(completedIds));
  } catch {
    // ignore
  }
}

export function loadCode(username, problemId, fallback) {
  if (!username) return fallback;
  try {
    return localStorage.getItem(codeKey(username, problemId)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function saveCode(username, problemId, code) {
  if (!username) return;
  try {
    localStorage.setItem(codeKey(username, problemId), code);
  } catch {
    // ignore
  }
}

export function clearCode(username, problemId) {
  if (!username) return;
  try {
    localStorage.removeItem(codeKey(username, problemId));
  } catch {
    // ignore
  }
}

export function clearCodesForProblems(username, problemIds) {
  for (const problemId of problemIds) {
    clearCode(username, problemId);
  }
}

export function resetProgress(username, problemIds) {
  if (!username) return;

  const completed = new Set(loadProgress(username));
  for (const problemId of problemIds) {
    completed.delete(problemId);
    clearCode(username, problemId);
  }
  saveProgress(username, [...completed]);
}

export function resetAllProgress(username) {
  if (!username) return;
  try {
    localStorage.removeItem(progressKey(username));
    const prefix = `${CODE_PREFIX}${username}:`;
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix)) keysToRemove.push(key);
    }
    for (const key of keysToRemove) {
      localStorage.removeItem(key);
    }
  } catch {
    // ignore
  }
}

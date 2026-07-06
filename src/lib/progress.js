import {
  loadProgress,
  resetAllProgress,
  resetProgress,
  saveProgress,
} from "./storage.js";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export function getProgressStats(problems, completedIds) {
  const completed = new Set(completedIds);
  const total = problems.length;
  const solved = problems.filter((p) => completed.has(p.id)).length;

  const byDifficulty = Object.fromEntries(
    DIFFICULTIES.map((difficulty) => {
      const group = problems.filter((p) => p.difficulty === difficulty);
      const solvedCount = group.filter((p) => completed.has(p.id)).length;
      return [difficulty, { solved: solvedCount, total: group.length }];
    })
  );

  return {
    total,
    solved,
    percent: total === 0 ? 0 : Math.round((solved / total) * 100),
    byDifficulty,
  };
}

export function markProblemComplete(username, problemId) {
  const completed = loadProgress(username);
  if (completed.includes(problemId)) return completed;
  const next = [...completed, problemId];
  saveProgress(username, next);
  return next;
}

export function isProblemComplete(completedIds, problemId) {
  return completedIds.includes(problemId);
}

export function resetByDifficulty(username, problems, difficulty) {
  const problemIds = problems
    .filter((p) => p.difficulty === difficulty)
    .map((p) => p.id);
  resetProgress(username, problemIds);
  return loadProgress(username);
}

export function resetEverything(username) {
  resetAllProgress(username);
  return [];
}

export { DIFFICULTIES };

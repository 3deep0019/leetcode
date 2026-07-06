import { useState } from "react";

export default function UsernameModal({ onSubmit }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Welcome to LeetCode Practice</h2>
        <p>Enter a username to track your progress across sessions.</p>
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            maxLength={32}
          />
          <button type="submit" className="btn btn-primary modal-submit" disabled={!name.trim()}>
            Start Practicing
          </button>
        </form>
      </div>
    </div>
  );
}

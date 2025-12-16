
import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
export default async function({ user, weight = 1 }) {
  const id = "q-git-branch-recovery";
  const title = "Git Branch Recovery & Soft Reset";
  const question = html`<div class="mb-3"><h4>Git Workflow: Accidental Commit Recovery</h4><p>Scenario: You committed to main (a1b2c3d4) instead of a feature branch. Undo but KEEP changes in working directory.</p><p><strong>Q:</strong> Which git command preserves changes while moving HEAD?</p><label for="${id}" class="form-label">Answer:</label><input class="form-control" id="${id}" name="${id}" type="text" placeholder="git reset --soft ..." /></div>`;
  const answer = async (ans) => {
    const cmd = (ans || "").toLowerCase();
    if (!cmd.includes("reset") || !cmd.includes("soft")) throw new Error("Must use 'git reset --soft' to preserve changes");
    return true;
  };
  return { id, title, weight, question, answer };
}

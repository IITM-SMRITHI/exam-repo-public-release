import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
export default async function({ user, weight = 0.75 }) {
const id = "q-jupyter-environment-isolation";
const title = "Virtual Env";
const question = html`<div class="mb-3"><h4>Setup ds-project</h4><p>Create and activate:</p><label for="${id}">Answer:</label><textarea class="form-control" id="${id}" name="${id}" rows="2"></textarea></div>`;
const answer = async (ans) => {
const t = (ans || "").toLowerCase();
if (!t.includes("venv") || !t.includes("ds-project") || (!t.includes("source") && !t.includes("activate"))) throw new Error("venv + activate needed");
return true;
};
return { id, title, weight, question, answer };
}

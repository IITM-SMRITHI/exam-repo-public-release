import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
export default async function({ user, weight = 1.25 }) {
const id = "q-fastapi-pydantic-validation";
const title = "FastAPI Validation";
const question = html`<div class="mb-3"><h4>Pydantic Field</h4><p>Email 5-100 chars validation:</p><label for="${id}">Answer:</label><textarea class="form-control" id="${id}" name="${id}" rows="2"></textarea></div>`;
const answer = async (ans) => {
const l = (ans || "").toLowerCase();
if (!l.includes("field") || !l.includes("min_length") || !l.includes("max_length")) throw new Error("Use Field with constraints");
return true;
};
return { id, title, weight, question, answer };
}

import { html } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
export default async function({ user, weight = 1 }) {
const id = "q-docker-compose-networking";
const title = "Docker Networking";
const question = html`<div class="mb-3"><h4>Docker Compose</h4><p>Scenario: Web and db services. What hostname does web use to reach db?</p><label for="${id}">Answer:</label><input class="form-control" id="${id}" name="${id}" type="text" /></div>`;
const answer = async (ans) => {
if ((ans || "").toLowerCase() !== "db") throw new Error("Answer is db");
return true;
};
return { id, title, weight, question, answer };
}

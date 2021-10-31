import { api } from "../utils/api";

export async function getTodos() {
  return api.get("/todos");
}

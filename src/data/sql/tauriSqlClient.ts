import Database from "@tauri-apps/plugin-sql";
import type { SqlClient } from "../../domain/types";

export async function createTauriSqlClient(
  path = "sqlite:app.db",
): Promise<SqlClient> {
  const database = await Database.load(path);

  return {
    execute(query: string, bindValues?: unknown[]) {
      return database.execute(query, bindValues);
    },
    async select<T>(query: string, bindValues?: unknown[]) {
      return database.select<T[]>(query, bindValues);
    },
    async close() {
      await database.close();
    },
  };
}

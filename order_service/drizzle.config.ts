import {defineConfig} from "drizzle-kit";
import {DB_URL} from "./src/config";

export default defineConfig({
    schema: "./src/db/schema/*",
    out: "./src/db/migrations",
    driver: "pg",
    dbCredential: {
        commonString: DB_URL,
    },
    verbose: true,
    strict: true,
})
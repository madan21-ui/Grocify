import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";
import * as schema from "./schema"; //-> means import everything from the schema file and put it in an object called schema. This allows us to access the tables defined in the schema file using schema.tableName.

const databaseUrl = process.env.DATABASE_URL;
//const db = drizzle(neon(databaseUrl), {schema});

if(!databaseUrl) {
    throw new Error("NEON_DATABASE_URL is not defined");
}

const sql = neon(databaseUrl); 

export const db = drizzle({client:sql, schema });   
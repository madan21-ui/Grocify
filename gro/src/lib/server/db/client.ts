import {neon} from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";


const schema={}

const databaseUrl = process.env.NEON_DATABASE_URL;
//const db = drizzle(neon(databaseUrl), {schema});

if(!databaseUrl) {
    throw new Error("NEON_DATABASE_URL is not defined");
}

const sql = neon(databaseUrl); 

export const db = drizzle({client:sql, schema });   
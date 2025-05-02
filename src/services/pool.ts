import pg from "pg";

const pool = new pg.Pool({
  connectionString:
    "postgresql://postgres:4loczn6v@localhost:5432/next_planets_app",
  // connectionString: 'postgresql://root:4loczn6v@127.0.0.1:5432/next_planets_app'
});

export {pool}
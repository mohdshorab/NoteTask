import SQLite from 'react-native-sqlite-storage';

SQLite.DEBUG(true);
SQLite.enablePromise(true);

let db: SQLite.SQLiteDatabase | null = null;

export const initDB = async (): Promise<SQLite.SQLiteDatabase> => {
  try {
    if (db) {
      console.log('Database already initialized');
      return db;
    }

    db = await SQLite.openDatabase({
      name: 'TaskDB.db',
      location: 'default',
    });

    console.log('Database opened successfully!');

    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      priority TEXT DEFAULT 'Medium',
      due_date DATETIME,
      category TEXT
      );`, [], () => console.log('Table created or already exists'),
      (error: Error) => console.log('Table creation error:', error),
    );


    return db;
  } catch (error) {
    console.log('Database error:', error);
    throw error;
  }
};

export const getDB = (): SQLite.SQLiteDatabase => {
  if (!db) throw new Error('Database not initialized. Call initDB() first.');
  return db;
};

import { Connection, createConnection, getConnectionOptions } from 'typeorm';

async function create(): Promise<Connection> {
	const defaultOptions = await getConnectionOptions();

	return createConnection(
		Object.assign(defaultOptions, {
			database:
				process.env.NODE_ENV === 'test'
					? './src/database/database.tests.sqlite'
					: defaultOptions.database,
		})
	);
}

export { create };

import 'reflect-metadata';
import { create } from './database';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import { AppError } from './errors/AppError';

create();

const app = express();

app
	// Enable JSON
	.use(express.json())
	// API Routes
	.use('/api', routes)
	// Error Handler
	.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return res.status(err.code).json({
				code: err.code,
				message: err.message,
			});
		}

		return res.status(500).json({
			code: 500,
			message: `Internal server error: ${err.message}`,
		});
	});

export { app };

import dotenv from 'dotenv';
dotenv.config();

export const server = {
	port: process.env.PORT || 3333,
	baseUrl:
		process.env.BASE_URL ||
		`http://localhost:${process.env.PORT || 3333}/api`,
	emailUrl:
		process.env.EMAIL_URL ||
		`http://localhost:${process.env.PORT || 3333}/api/answers`,
};

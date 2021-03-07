import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';

class SendMailService {
	private transporter: Transporter;

	constructor() {
		nodemailer
			.createTestAccount()
			.then((account) => {
				this.transporter = nodemailer.createTransport({
					host: account.smtp.host,
					port: account.smtp.port,
					secure: account.smtp.secure,
					auth: {
						user: account.user,
						pass: account.pass,
					},
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async execute(
		to: string,
		subject: string,
		variables: object,
		path: string
	) {
		const templateContent = fs.readFileSync(path).toString('utf-8');

		const mailTemplateParse = handlebars.compile(templateContent);

		const html = mailTemplateParse(variables);

		const message = await this.transporter.sendMail({
			from: `NPS <noreplay@nps.test>`,
			to,
			subject,
			html: html,
		});

		console.log(nodemailer.getTestMessageUrl(message)); // To see email in Ethereal
	}
}

export default new SendMailService();

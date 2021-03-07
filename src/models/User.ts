import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	Unique,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
@Unique(['email'])
class User {
	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@CreateDateColumn()
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { User };

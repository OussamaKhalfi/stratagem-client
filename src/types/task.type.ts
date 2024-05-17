import { _Document } from './shared.type';

export interface ITask extends _Document {
	title: string;
	description: string;
	status: string;
}

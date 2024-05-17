export interface _Document {
	_id: string;

	createdAt: number | null;
	updatedAt: number | null;
	deletedAt: number | null;
}

export type Create<T> = Omit<T, keyof _Document>;
export type Update<T> = Partial<T>;

import { IInMemoryDbEntity } from '@codesign/shared/interfaces';

export class InMemoryDb<T extends IInMemoryDbEntity> {
    private _db: T[] = [];

    constructor(data?: T[]) {
        this._db = [...(data || [])];
    }

    getAll(): T[] {
        return [...this._db];
    }

    getById(id: string): T {
        const item = this._db.find(item => item.id === id);

        if (!item) {
            throw new Error(`Item with id ${id} not found!`);
        }

        return { ...item };
    }

    getOneByKey(key: keyof T, value: any): T {
        const item = this._db.find(item => item[key] === value);

        if (!item) {
            throw new Error(`Item with ${String(key)} ${value} not found!`);
        }

        return { ...item };
    }

    getAllByKey(key: keyof T, value: any): T[] {
        return [...this._db.filter(item => item[key] === value)];
    }

    create(id: string, item: T): void {
        if (this._db.some(item => item.id === id)) {
            throw new Error(`Item with id ${id} already exists!`);
        }

        this._db.push({ ...item });
    }

    update(id: string, item: Partial<T>): void {
        const index = this._db.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error(`Item with id ${id} not found!`);
        }

        this._db[index] = { ...this._db[index], ...item };
    }

    delete(id: string): void {
        const index = this._db.findIndex(item => item.id === id);

        if (index === -1) {
            throw new Error(`Item with id ${id} not found!`);
        }

        this._db.splice(index, 1);
    }
}

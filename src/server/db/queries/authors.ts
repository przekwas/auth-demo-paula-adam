import { Query } from '../'

const one = (id: number) => Query('SELECT * FROM authors WHERE id = ?', [id]);
const insert = (newAuthor: any) => Query('INSERT INTO authors SET ?', newAuthor);
const find = (column: string, value: number | string) => Query('SELECT * FROM authors WHERE ?? = ?', [column, value]);

export default {
    one,
    insert,
    find
}
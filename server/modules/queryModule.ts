import * as mysql from 'mysql';
import * as Promise from 'bluebird';

import { Configuration } from '../config/config';
import { connect } from 'http2';

export const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: Configuration.host,
    user: Configuration.user,
    password: Configuration.password,
    database: Configuration.database
});

export class QueryManager {

    public static closeAllConnesctions(): Promise<void> {
        return new Promise<void>((resolve) => {
            connectionPool.end((err) => {
                if (err) {
                    throw err;
                }
                console.log('All connections closed.');
                resolve();
            });
        });
    }

    public static getAllUsers(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            connectionPool.query(`select * from users where ? = ?;`, ['test', 'test'],
            (err: mysql.MysqlError, results: any) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

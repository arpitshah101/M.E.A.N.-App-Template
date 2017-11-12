import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import * as bodyParser from 'body-parser';

import * as readline from 'readline';

import { } from './modules';

import { } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req: express.Request, res: express.Response, next: () => void) => {
    // Security: no one should know what software is running backend
    res.removeHeader('X-Powered-By');
    next();
});

app.use('/static', express.static(path.join(__dirname, 'public')));

// Add routing to each of the different subroute modules
// app.use('/api/');

app.get('/', (req: express.Request, res: express.Response) => {
    res.redirect('/static');
});

const port = process.env.NODE_APP_PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Application running on localhost:${port}`));

// =========================================================

// if (process.platform === 'win32') {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.on('SIGINT', () => {
//         process.emit('SIGINT');
//     });
// }

// process.on('SIGINT', () => {
//     console.log('\nSIGINT detected!');
//     // Close all connections then exit process

//     // process.exit();
// });

import log from './utils/log';

import { io, Socket } from 'socket.io-client';

const createBot = async (id: number) => {
    const socket: Socket = io(`https://throwdown.tv`);

    socket.emit(`connectToChat`, undefined, undefined, `lightwarp`);

    socket.on(`handshake`, () => {
        log(`magenta`, `[${id}] Bot connected.`);
    });

    socket.on(`close`, () => {
        log(`red`, `[${id}] Bot disconnected`);
    });

    return socket;
};

export default createBot;

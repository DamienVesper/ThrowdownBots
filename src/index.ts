import createBot from './bot';
import log from './utils/log';

const boot = async () => { 
    log(`green`, `Creating bots...`);

    // Create the bots.
    for (let i = 0; i < 2500; i++) createBot(i);

    log(`cyan`, `Bots created.`);
};

boot();

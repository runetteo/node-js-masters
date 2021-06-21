const chalk = require('chalk');
const EventEmtter = require('events');

class TerranGhost extends EventEmtter {

    nuclearStrike = () => {
        const nuclearLaunchTime = 10;

        let currentCountdown = nuclearLaunchTime;

        this.emit('start');

        const timer = setInterval(() => {
            currentCountdown--;

            this.emit('tick', currentCountdown);

            if (currentCountdown === 0) {
                clearInterval(timer);
                this.emit('end');
            }

            if (currentCountdown === 5) {
                this.emit('end-soon');
            }

        }, 1000);
    };

}


const ghost1 = new TerranGhost();

ghost1.on('start', () => {
    console.log(chalk.green(`Nuclear launch detected...`));
});

ghost1.on('tick', (currentCountdown) => {
    console.log(chalk.cyan(`${currentCountdown}...`));
});

ghost1.on('end-soon', () => {
    console.log(chalk.yellow(`They'll never know what hit them...`));
});

ghost1.on('end', () => {
    console.log(chalk.red(`Boom!`));
});

ghost1.nuclearStrike();
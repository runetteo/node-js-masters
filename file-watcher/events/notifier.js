const EventEmitter = require('events');
const FileWatcher = require('./filewatcher');

class Notifier extends EventEmitter {

    notifyUser = (path, name) => {

        const f = new FileWatcher(path);

        f.on('nameFoundOnFile', (fileName) => { 
            let mesage = `Your name was mentioned on file: ${fileName}!`;
            
            this.emit('openToastNotification', mesage);
            this.emit('printToConsole', mesage);

        });
        
        f.watchFile(name);

    }

}

module.exports = Notifier;
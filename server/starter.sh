#!/bin/sh

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
forever start -l dsm.log --append -o dsmOut.log -e dsmError.log /www/dominikwilkowski/dsm/index.js >> /home/deploy/.forever/dsm-apiRestart.log 2>&1

const app = require('./back/server');
const sequelizeConnection = require('./back/db');
const environmentVariables = require('./back/env');

app.listen(environmentVariables.PORT, () => console.log('Listening on port ' + environmentVariables.PORT));

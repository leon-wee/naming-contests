const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = function(message) {
    console.info('**************');
    console.info(message);
    console.info('**************');
};

//this way it will bind to all the IPs on the machine so we can test on other machines
export default {
    mongodbUri: 'mongodb://localhost:27017/test',
    port: env.PORT || 8080,
    host: env.HOST || '0.0.0.0',
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }
};

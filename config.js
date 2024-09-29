require('dotenv').config(); 

module.exports = {
    VERSION: require('./package.json').version,
    OWNER: process.env.OWNER ||'FAMOUS-TECH',
    DEEPAI_KEY: '7f831cb9-aa30-4270-bfa6-0a5d4d03afac',
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://dybyt073:<db_password>@cluster0.s5is4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    PREFIX: process.env.PREFIX || '.',
    antilink: {},
    SESSION_ID: process.env.SESSION_ID || '',
    BRAINSHOP_PRIVATE: process.env.BRAINSHOP_PRIVATE || 'false', //true
    MODE: process.env.MODE || 'private', // public
    MODS: process.env.MODS ? JSON.parse(process.env.MODS) : ['50943782508@s.whatsapp.net']
};

const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.BOT_SERVER || 'xxAll.aternos.me',
    port: Number(process.env.BOT_PORT) || 58774,
    username: process.env.BOT_USERNAME || 'Salamibrot',
    version: process.env.BOT_VERSION || '1.16.4'
  });

  bot.on('spawn', () => {
    console.log('✅ Salamibrot ist auf dem Server!');
  });

  bot.on('error', (err) => {
    console.error('❌ Fehler:', err);
  });

  bot.on('end', () => {
    console.log('🔄 Bot getrennt. Neustart wird vorbereitet...');
    setTimeout(createBot, 5000);
  });
}

createBot();

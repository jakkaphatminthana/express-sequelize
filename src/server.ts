import app from '@/app';
import config from '@/config';

import sequelize from '@/lib/sequelize';

(async () => {
  try {
    app.listen(config.PORT, () => {
      console.log(`✅ Server running on port: ${config.PORT}`);
    });
    await sequelize.sync();
  } catch (error) {
    console.error('💥 Failed to start the server', error);
    if (config.NODE_ENV === 'production') {
      process.exit(1);
    }
  }
})();

const handleServerShutdown = async () => {
  try {
    console.log('🚫 Server SHUTDOWN');
    process.exit(0);
  } catch (error) {
    console.log('💥 Error during server shutdown:', error);
  }
};

// Shutdown by kill command
process.on('SIGTERM', handleServerShutdown);
// Shutdown by Ctrl+C
process.on('SIGINT', handleServerShutdown);

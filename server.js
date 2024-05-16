import app from "./API/app.js";

const startServer = async () => {
  try {
    await app.listen(5000);
    app.log.info(`Server listening on ${app.server.address().port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();

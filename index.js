const CoinHive = require('coin-hive');

(async () =>{
    const miner = await CoinHive('dpQi9LfJQ6jPwU1zNeNAJYEdxsFhs01w');
    await miner.start();
    miner.on('found',() => console.log('Found!'));
    miner.on('acceptep',() => console.log('Accepted!'));
    miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();
const http = require('http');
// const WebSocket = require('ws');

// const hostname = 'pre.bootcamp.tk.sg';
// const port = 9002;

const sendRequest = (path, method, params) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: hostname,
      port: port,
      path: `${path}?${new URLSearchParams(params).toString()}`,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
 
    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
};

// const subscribeClient = (ws) => {
//   const subscribeRequest = {
//     game_id: gameId,
//     player_key: playerKey,
//     player_id: playerId,
//   };
//   ws.send(JSON.stringify(subscribeRequest));
// };

// const handleMessage = (ws, message) => {
//   const msg = JSON.parse(message);

//   if (Array.isArray(msg.bot_updates)) {
//     msg.bot_updates.forEach((bot) => {
//       if (bot.variant === 'kFactoryBot') {
//         factoryPosition = bot.position;
//         factoryId = bot.id;
//       } else if (bot.variant === 'kMiningBot') {
//         if (!miningBots.some(existingBot => existingBot.id === bot.id)) {
//           miningBots.push(bot);
//         }
//         console.log(`Mining bot ${bot.id} is at position ${bot.position}`);
//       }
//     });
//   } else {
//     console.error('Unexpected message structure:', msg);
//   }
// };

// const performMove = async (ws, gameId, playerId, playerKey, botId, targetPosition) => {
//   const moveRequest = {
//     game_id: gameId,
//     player_id: playerId,
//     player_key: playerKey,
//     bot_id: botId,
//     target_position: targetPosition,
//   };
//   try {
//     const response = await sendRequest('/move', 'POST', { request: JSON.stringify(moveRequest) });
//     console.log('Move response:', response);
//     performMine(ws, botId);
//   } catch (error) {
//     console.error('Move error:', error);
//   }
// };

// const performMine = async (ws, gameId, playerId, playerKey, botId, targetPosition, targetChunk) => {
//   const mineRequest = {
//     game_id: gameId,
//     player_id: playerId,
//     player_key: playerKey,
//     bot_id: botId,
//     target_position: targetPosition,
//     target_chunk: targetChunk
//   };
//   try {
//     const response = await sendRequest('/mine', 'POST', { request: JSON.stringify(mineRequest) });
//     console.log('Mine response:', response);
//     buildBot(ws);
//   } catch (error) {
//     console.error('Mine error:', error);
//   }
// };

// const performScan = async (ws, gameId, playerId, playerKey, botId, targetPosition) => {
//   const scanRequest = {
//     game_id: gameId,
//     player_id: playerId,
//     player_key: playerKey,
//     bot_id: botId,
//     target_position: targetPosition
//   };
//   try {
//     const response = await sendRequest('/scan', 'POST', { request: JSON.stringify(scanRequest)});
//     console.log('Scan response: ', response);
//   }
//   catch (error) {
//     console.error('Scan error: ', error);
//   }
// };

// const buildBot = async (ws, gameId, playerId, playerKey, factoryId) => {
//   const buildBotRequest = {
//     game_id: gameId,
//     player_id: playerId,
//     player_key: playerKey,
//     bot_id: factoryId
//   };
//   try {
//     const response = await sendRequest('/build_bot', 'POST', { request: JSON.stringify(buildBotRequest) });
//     console.log('Build bot response:', response);
//   } catch (error) {
//     console.error('Build bot error:', error);
//   }
// };

const main = async () => {
  const playerKey = 716811849;
  var playerId;
  var gameId;
  var factoryPosition;
  var factoryId;
  const miningBots = [];
  try{   
    // Fetch game information
    let response = await sendRequest('/games', 'GET', {});
    const games = response;
    console.log('Games:', games);

    //gameId = games.find(game => game.game_status === 'kNotStarted' || game.game_status === 'kOpen').game_id;
    // console.log('Found game ID:', gameId);

    // // Join the game
    // const joinGameRequest = {
    //     game_id: gameId,
    //     player_name: 'Player',
    //     player_key: playerId,
    // };
    // response = await sendRequest('/join_game', 'PUT', { request: JSON.stringify(joinGameRequest) });
    // playerId = response;
    // console.log('Joined game with player ID:', playerId);

    // Connect to WebSocket
  //   const ws = new WebSocket(`ws://${hostname}:${port}/update`);

  //   ws.on('open', () => {
  //     console.log('Connected to WebSocket');
  //     subscribeClient(ws);
  //   });

  //   ws.on('message', (message) => {
  //     handleMessage(ws, message);
  //   });

  //   ws.on('error', (error) => {
  //     console.error('WebSocket error:', error);
  //   });

  //   ws.on('close', () => {
  //     console.log('WebSocket connection closed');
  //   });

  //   testBot1 = miningBots[0];
  //   testBot2 = miningBots[1];

  //   await performScan(ws, testBot1.bot_id, {x: 3, y: 7});
  //   await performScan(ws, testBot2.bot_id, {x: 4, y: 7});

  //   await performMove(ws, testBot1.bot_id, {x: 3, y: 7});
  //   await performMove(ws, testBot2.bot_id, {x: 4, y: 7});
  //  // await performMine(ws, testBot1.bot_id, targetPosition, targetChunk);
  //   await buildBot(ws);
  //   await buildBot(ws);

  //   testBot3 = miningBots[2];
  //   testBot4 = miningBots[3];

  //   await performScan(ws, testBot3.bot_id, {x: 2, y: 5});
  //   await performScan(ws, testBot4.bot_id, {x: 1, y: 6});

  //   await performMove(ws, testBot3.bot_id, {x: 2, y: 5});
  //   await performMove(ws, testBot4.bot_id, {x: 1, y: 6});

  } catch (error) {
    console.error('Error in main:', error);
  }
};

main();
/*It’s hard to objectively compare robots by just letting them solve a few scenarios. Maybe one robot just happened to get easier tasks or the kind of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.

For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.*/

function calcSteps(state, robot, memory){
  for (let turn = 0;; turn++){
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const measurements = 100;
  let totalSteps1 = 0, totalSteps2 = 0;
  for (let test = 0; test < measurements; test++){
    let state = VillageState.random();
    totalSteps1 += calcSteps(state, robot1, memory1);
    totalSteps2 += calcSteps(state, robot2, memory2);
  }
  console.log(`Robot 1 avg. steps per task ${Math.floor(totalSteps1/measurements)}`);
  console.log(`Robot 2 avg. steps per task ${Math.floor(totalSteps2/measurements)}`);
}  

compareRobots(routeRobot, [], goalOrientedRobot, []);

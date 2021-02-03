export const genChar = {health: 99, armor: 1, defense: 51, strength: 51, attack: 2}

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const healthToZero = changeState("health")(-100);
export const arrowToGut = changeState("health")(-50);
export const arrowToKnee = changeState("health")(-25);

export const healthPotion = changeState("health")(50);
export const bigHealthPotion = changeState("health")(100);

export const arrowHitsShield = changeState("armor")(-10);
export const equipShield = changeState("armor")(25);


export const Bob = storeState(genChar);



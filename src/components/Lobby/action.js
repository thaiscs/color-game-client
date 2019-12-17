export const ALL_GAMEROOMS = "ALL_GAMEROOMS";

export function allGamerooms(gamerooms) {
  return {
    type: ALL_GAMEROOMS,
    payload: gamerooms
  };
}


export default function(state, action) {
  if (state === undefined) {
    return [{id: "3o7btNEQOGZiEaOAus"},{id: "Qf4IHEeF47utq"},{id: "7A804lET0evSgNzEVH"},{id: "3o84U4LHgf4EarfzXO"},{id: "NI74bE9R5Ovtu"},{id: "HvAyOr3ye3JTO"},{id: "xTiTnEHBh7qapyuvwQ"},{id: "26BkNItrjPoIhB4Bi"},{id: "Y1IwApAIudWne"},{id: "hPPx8yk3Bmqys"},{id: "l0MYSRT9csGI39OSY"}];
  }

  switch (action.type) {
    case 'GIF_LIST':
      return action.payload;
    default:
      return state; 
  }
}

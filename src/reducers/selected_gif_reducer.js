export default function(state, action) {
  if (state === undefined) {
    return 'vFKqnCdLPNOKc';
  }

  switch (action.type) {
    case 'SET_GIF':
      return action.payload;
    default:
      return state; 
  }
}

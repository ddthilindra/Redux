import { FETCH_BUTTON_CLICKED } from "../Actions/Types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_BUTTON_CLICKED:
      return action.payload;
      break;
  }
  return state;
}












// const initialState={
//   products:[
//       {
//           id:1,
//           title:"dd",
//           category:"Programmer",
//       },
//   ],
// };
// export default function (state = initialState, {type,payload}) {
//   switch (type) {
//     case FETCH_BUTTON_CLICKED:
//       return state;
//     default:
//       return state;
//   }
  
// }


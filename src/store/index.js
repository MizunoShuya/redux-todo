import { useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = {
  lists: [
    {
      name: "ブログを確認",
      complete: false,
    },
    {
      name: "メールの返信",
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
    //typeを受け取って内容で条件分岐
    switch (action.type) {
        //追加
        case "ADD_LIST":
            return {
                lists: [...state.lists, action.payload],
            };
        //下げる
        case "DONE_LIST":
            return {
            lists: state.lists.map((list) => {
                if (list.name !== action.payload) return list;
                return {
                    ...list,
                    complete: true,
                };
            }),
        };
    //削除
      case "DELETE_LIST":
        return {
          lists: state.lists.filter((list) => list.name !== action.payload),
        };
  
      default:
        return state;
    }
  };

const store = createStore(reducer);

export default store;
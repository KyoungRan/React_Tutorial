import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  //axios("https://somurl.com/somedataendpoint").then((data) => {
  //  console.log("got the data!", data);
  //})
  dispatcher.dispatch({ type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 84848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 62626262,
          text: "Pay Water Bills",
        complete: true
      },
    ]});

    //if(false){
    //  dispatcher.dispatch({type: "FETCH_TODOS_ERROR"});
    //}
  }, 1000);
}

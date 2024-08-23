import React from "react";
import Todo from "./Todo";
import Next7Days from "./Next7Days";

function Todos(){

  return(
    <div className="Todos">
      Todos
			<Todo/>
			<Next7Days/>
    </div>
  )
}

export default Todos
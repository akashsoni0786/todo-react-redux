import { add_todo_action, complete_todo_action, delete_comp_todo_action, delete_inc_todo_action, edit_todo_action, undo_comp_todo_action, update_todo_action } from "./Action"

export const mappropstostate=(state)=>{
    return {...state}
}
export const mappropstodispatch=(dispatch)=>{
    return {
        addtodo:(e)=>dispatch(add_todo_action(e)),
        completedtask:(e)=>dispatch(complete_todo_action(e)),
        editTasks:(e)=>dispatch(edit_todo_action(e)),
        updatetask:(e)=>dispatch(update_todo_action(e)),
        deleteinctodo:(e)=>dispatch(delete_inc_todo_action(e)),
        deletecomptodo:(e)=>dispatch(delete_comp_todo_action(e)),
        undotask:(e)=>dispatch(undo_comp_todo_action(e))

    }
}

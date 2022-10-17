import { CHECKED, DELETE_COMP, DELETE_INC, EDIT, TODO, UNDOTASK, UPDATE } from "./Constiner"

export const add_todo_action=(e)=>{
    return{
        type:TODO,
        payload:e
    }
}
export const complete_todo_action=(e)=>{
   
    return{
        type:CHECKED,
        payload:e
    }
}
export const edit_todo_action=(e)=>{
    return{
        type:EDIT,
        payload:e
    }
}

export const update_todo_action=(e)=>{
    return{
        type:UPDATE,
        payload:e
    }
}

export const delete_inc_todo_action=(e)=>{
    return{
        type:DELETE_INC,
        payload:e
    }
}

export const delete_comp_todo_action=(e)=>{
    return{
        type:DELETE_COMP,
        payload:e
    }
}
export const undo_comp_todo_action=(e)=>{
    return{
        type:UNDOTASK,
        payload:e
    }
}

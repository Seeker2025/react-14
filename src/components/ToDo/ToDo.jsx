import css from './ToDo.module.css';

const ToDo = ({ todo, handleCheckCompleted, handleDelete })=>{
    return (
        <li className={css.listGroupItem}>
            <div className={css.row}>
                <div className={css.col10}>

                </div>

                <div>
                    <input
                     className={css.formCheck}
                     type="checkbox"
                     checked={todo.completed}
                     onChange={()=>handleCheckCompleted(todo.id)}
                     />
                    {todo.title}
                </div>

                <div className={css.col}>
                    <button
                    type="button"
                    className={css.btnClose}
                    arial-label ="Close"
                    onClick={()=>handleDelete(todo.id)}
                    >&#10006;</button>
                </div>    
            </div>
        </li>
    )
}

export default ToDo;
import './index.css'

const TodoItem = props => {
  const {eachtodo, deleteTodo} = props
  const {title, id} = eachtodo

  const deleteItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item">
      <p className="description">{title}</p>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem

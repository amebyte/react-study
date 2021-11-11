import FieldContext from './FieldContext'
import useForm from './useForm'

export default function Form({ children, form, onFinish, onFinishFailed }) {
  const [formInstance] = useForm(form)
  formInstance.setCallbacks({ onFinish, onFinishFailed })
  return (
    <form onSubmit={
        (e) => {
            e.preventDefault()
            formInstance.submit()
        }
    }>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}

import FieldContext from "./FieldContext"
import useForm from "./useForm"

export default function Form({children, form}) {
    const [formInstance] = useForm(form)
    return (
        <FieldContext.Provider value={formInstance}>
            {children}
        </FieldContext.Provider>
    )
}
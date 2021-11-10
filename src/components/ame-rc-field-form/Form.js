import useForm from "./useForm"

export default function Form({children, form}) {
    const [formInstance] = useForm(form)
    return children
}
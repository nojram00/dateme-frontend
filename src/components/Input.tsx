export default function Input({ placeholder, type, value, name, disabled } : {
    placeholder: string,
    name: string
    type?: string,
    value?: string,
    disabled?: boolean
}) {
    return (
        <input disabled={disabled} type={type} placeholder={placeholder} value={value} name={name} className="p-2 w-auto rounded-lg border border-gray-300"/>
    )
}

export default function Input({ placeholder, type, value, name } : {
    placeholder: string,
    name: string
    type?: string,
    value?: string,
}) {
    return (
        <input type={type} placeholder={placeholder} value={value} name={name} className="p-2 rounded-lg border border-gray-300"/>
    )
}

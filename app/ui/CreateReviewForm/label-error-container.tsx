import { useFormikContext } from "formik"

export default function LabelErrorContainer({
    label,
    name
}: {
    label: string
    name: string
}) {

    const { errors, touched } = useFormikContext<any>()
    return(
        <div  className="w-full flex justify-start items-center gap-3">
            <label
            htmlFor={name}
            className="text-sm text-lightFont">
                {label}
            </label>

            {errors?.[name] && touched?.[name] && (<p className="text-red-500 text-xs">{errors?.[name] as string}</p>)}
        </div>
    )
}
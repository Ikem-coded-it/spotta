import { useFormikContext } from "formik"

export default function AnonymousCheckbox() {
    const { handleChange, handleBlur } = useFormikContext<any>()
    return(
        <div className="flex justify-start gap-1 w-full">
            <input
            type="checkbox"
            name="anonymous"
            id="anonymous"
            onChange={handleChange}
            onBlur={handleBlur}
            className="cursor-pointer"
            />

            <label
            htmlFor="anonymous"
            className="text-[#484851] text-sm">
                Post as anonymous
            </label>    
        </div>
    )
}
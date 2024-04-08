import { useFormikContext } from "formik";
import LabelErrorContainer from "./label-error-container";

export default function ReviewBodyInput() {
    const { values, handleChange, handleBlur, errors, touched } = useFormikContext<any>()
    return(
        <div className="w-full flex flex-col items-start gap-4">
            <LabelErrorContainer
            label="Write Review"
            name="body"
            />
            
            <textarea
            name="body"
            id="body"
            className="outline-0 min-h-[173px] max-h-[173px] min-w-full max-w-full p-3 bg-[#FBFAFC] border-[1px] border-gray text-sm text-darkFont rounded-md"
            value={values?.body}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="placeholder"
            />
        </div>
    )
}
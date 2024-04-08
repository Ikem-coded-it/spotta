'use client'
import { IoIosStar } from "react-icons/io";
import { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import LabelErrorContainer from "./label-error-container";

export default function StarRatingInput() {
    const [rating, setRating] = useState<number>(0);
    const { setFieldValue, errors, touched, getFieldProps } = useFormikContext<any>();

    useEffect(() => {
        setFieldValue('starReview', rating)
    }, [rating])

    return(
        <div className="w-full h-[55px] flex flex-col items-start justify-between">
            <LabelErrorContainer
            label="Rate Location"
            name="starReview"
            />
            
            <div className="flex gap-1 h-fit">
                {
                    Array.from({length: 5}, (_, i) => {
                        const starValue = i + 1
                        return(
                            <div key={i} className="h-fit w-fit">
                                <label
                                onClick={() => setRating(starValue)}
                                className="cursor-pointer"
                                >
                                    <IoIosStar 
                                    size="20px"
                                    color={
                                        starValue <= rating ? "#FFC70066" : "#D4DCF1"
                                    }/>
                                </label>

                                <input
                                className="hidden"
                                {...getFieldProps('starReview')}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
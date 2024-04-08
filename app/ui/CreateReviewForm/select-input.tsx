'use client'
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { FormikHelpers, useFormikContext } from "formik";
import { reviewFormAmenities } from "@/app/lib/store/review";
import React from "react";
import LabelErrorContainer from "./label-error-container";

export default function CustomSelectInput() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
    const { setFieldValue } = useFormikContext<any>()

    useEffect(() => {
        setFieldValue('amenities', selectedAmenities)
    }, [selectedAmenities])

    const updateAmenities = (e:React.ChangeEvent, amenity: string) => {
        if (e.target instanceof HTMLInputElement) {
            const isChecked = e.target.checked;
            if (isChecked == true) 
                setSelectedAmenities(prev => [...prev, amenity])
            else
                setSelectedAmenities(prev => prev.filter(a => a !== amenity))
        }
    }

    return(
        <div className="relative bg-lightBlue w-full">
            <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="h-[50px] rounded-[6px] w-full bg-inherit p-2 flex items-center justify-between">
                <LabelErrorContainer
                label="Select Amenities"
                name="amenities"
                />
                <IoIosArrowDown size="20px"/>
            </button>

            <div className={clsx(
                "h-[164px] w-full p-2 rounded-b-md grid grid-cols-2 gap-y-2 gap-x-6 bg-lightBlue absolute bottom-[-164px] border-[1px] border-gray z-10 duration-[.2s]",
                {
                    "opacity-0 pointer-events-none": isOpen == false,
                    "opacity-100 pointer-events-auto": isOpen == true,
                }
            )}>
                {
                    reviewFormAmenities.map((amenity, i) => {
                        return (
                            <div 
                            key={i}
                            className="flex gap-3 justify-start items-center"
                            >
                                <input
                                type="checkbox"
                                name="amenities"
                                id={`amenities_${i}`}
                                onChange={(e) => updateAmenities(e, amenity)}
                                className="cursor-pointer"
                                />

                                <label
                                htmlFor={`amenities_${i}`}
                                className="text-sm text-lightFont"
                                >
                                    {amenity}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
'use client';

import Main from "@/app/ui/components/main-tag";
import React from "react";
import { Formik } from "formik";
import { initialReviewValues } from "@/app/lib/store/review";
import ReviewSchema from "@/app/lib/schemas/review";
import CustomSelectInput from "@/app/ui/CreateReviewForm/select-input";
import StarRatingInput from "@/app/ui/CreateReviewForm/star-rating";
import { Review } from "@/app/lib/definitions";
import ReviewBodyInput from "@/app/ui/CreateReviewForm/review-body-input";
import AnonymousCheckbox from "@/app/ui/CreateReviewForm/anonymous-checkbox";
import BottomButtons from "@/app/ui/CreateReviewForm/bottom-buttons";

export default function CreateReviewPage() {

    const handleUploadReview = (
        values: Review,
        { setSubmitting }: any
    ) => {
        setSubmitting(true)
        console.log(values)
    }
    return (
        <Main className="bg-[#1D3045] justify-center items-center">
            <Formik
            initialValues={initialReviewValues as Review}
            onSubmit={handleUploadReview}
            validationSchema={ReviewSchema}>
                {({ handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col justify-start items-center gap-6 p-[16px] w-[320px] md:w-[450px] lg:w-[695px] min-h-[587px] max-h-fit rounded-[6px] border-[1px] border-[#D4DCF1] bg-[#FAFCFD]">
                        <div className="w-full h-[80px] flex flex-col gap-4">
                            <h1 className="w-full text-center text-[18px] font-[500] text-lightFont">
                                Review Location
                            </h1>
                            <h2 className="text-left w-full text-[17px] md:text-[20px] font-[500]">
                                {initialReviewValues.address}
                            </h2>
                        </div>

                        <CustomSelectInput/>
                        <StarRatingInput/>
                        <ReviewBodyInput/>
                        <AnonymousCheckbox/>
                        <BottomButtons/>
                    </form>
                )}
            </Formik>
        </Main>
    )
}
import * as yup from 'yup';

const ReviewSchema = yup.object().shape({
  amenities: yup.array()
    .min(1, '*Required'),
  starReview: yup.number()
    .min(1, "*Required")
    .required('*Required'),
  body: yup.string()
    .min(3, "too short")
    .max(150, "too big")
    .required('*Required'),
  reviewerName:  yup.string()
    .required('Reviewer name is required'),
  address: yup.string()
    .required('Location address is required'),
  time: yup.date().nullable(),
  likes: yup.number(),
  dislikes: yup.number(),
  comments: yup.number(),
  reviewerImageURL: yup.string(),
  anonymous: yup.boolean().required()
});

export default ReviewSchema;


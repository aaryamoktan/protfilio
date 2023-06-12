import * as Yup from "yup"
export const Signup = Yup.object(
    {
        name:Yup.string().min(2).max(35).required("plz enter your full name"),
        email:Yup.string().email().required("plz enter your email"),
        number:Yup.string().required("plz enter your number"),
        conform_number:Yup.string().required().oneOf([Yup.ref("number"),null],"number must be match")
    }
)
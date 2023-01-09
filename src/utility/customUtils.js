import Swal from "sweetalert2"
import {Auth} from "aws-amplify"

//Use this to fire success alerts
export const fireAlertMessage = (msg) => {
    Swal.fire(
        "Hmm...",
        msg,
        "error"
    )
}

//Use this to fire custom dynamic alerts
export const fireAlertCustom = (title, msg, icon) => {
    Swal.fire(
        title,
        msg,
        icon
    )
}


//Use this to fire error alerts
export const fireAlertError = (title, msg) => {

    Swal.fire(
        title,
        msg,
        "error"
    )
}

//Use this to fire success alerts
export const fireAlertSuccess = (title, msg) => {

    Swal.fire(
        title,
        msg,
        "success"
    )
}

//Use this to convert json to form data
export const jsonToFormData = (obj) => {
    const formData = new FormData()
    Object.keys(obj).map(async e => {

        if (Array.isArray(obj[e])) { //Check whether the property is an array or not
            obj[e].map(async (res, index) => {
                await formData.append(`${e}[${index}]`, res)
            })
        } else await formData.append(e, obj[e])
    })
    return formData
}

//Use this to get the cognito id token\
export const getIDToken = async () => {
    return Auth.currentSession().then((res) => res.getIdToken().getJwtToken())
}

//Use this to delete object attr
export const deleteAttrFromObject = (obj, attr) => {
    delete obj[attr]
    return obj
}

//Use this to check string typed boolean
export const checkBool = (dis) => {
    return dis === "true"
}

//Use this to populate the react dropdown
export const dropdownPopulate = (data, name, value) => {
    return data?.map((e, index) => {
        return {
            index,
            label: e[name.toString()],
            value: e[value.toString()]
        }
    })
}

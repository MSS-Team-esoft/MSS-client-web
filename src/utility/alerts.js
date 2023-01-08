import Swal from "sweetalert2"

export function successMessage(message) {
  Swal.fire(
    'Success!',
    message,
    'success'
  )
}

export function errorMessage(message) {
  Swal.fire(
    'Error!',
    message,
    'error'
  )
}
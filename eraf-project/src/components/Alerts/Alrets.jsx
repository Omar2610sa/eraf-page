import Swal from "sweetalert2";

import iconImage from "../../assets/images/icons/badge-check.png"
export const showSuccessAlert = (title, text = "", onConfirm) => {
    return Swal.fire({
        title,
        text,
        imageUrl: iconImage,
        confirmButtonText: "العودة للرئيسية",
        customClass: {
            confirmButton: "primary-btn"
        }
    }).then((result) => {
        if (result.isConfirmed && onConfirm) {
            onConfirm();
        }
    });
};
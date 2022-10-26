export default function copy() {
  Swal.fire({
    icon: "success",
    title: "Text copied to clipboard",
    text: copy,
    showConfirmButton: false,
    timer: 3000,
  });
}

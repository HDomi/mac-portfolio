import { toast, type ToastContainerOptions } from "vue3-toastify";
import CustomToast from "@/components/custom-components/CustomToast.vue";
const useToast: any = toast;
const getTypeClass = (type: string) => {
  return `type-${type}`;
};
export default function makeToast(
  title: string,
  message: string,
  type: string
) {
  const toastOption = {
    autoClose: 2000,
    type: type === "warn" ? "warning" : type,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: false,
    containerClassName: "toast-class-wrap",
    toastClassName: `toast-class ${getTypeClass(type)}`,
    bodyClassName: "toast-body-class",
    progressClassName: `toast-progress-class//${title}//${message}`,
  } as ToastContainerOptions;
  // type: success, error, warn, info
  useToast(CustomToast, toastOption);
}

import { toast } from "@zerodevx/svelte-toast"

type ToastTypes = 'success' | 'error' | 'info' | 'warning'

export class ToastService {
  static show = (config: { message: string, type: ToastTypes }) => {
    const toastBackgrounds = {
      success: '#4caf50',
      error: '#f44336',
      info: '#2196f3',
      warning: '#ff9800'
    }

    toast.push(config.message, {
      theme: {
        '--toastBackground': toastBackgrounds[config.type],
        '--toastColor': '#fff',
        '--toastBarBackground': toastBackgrounds[config.type],
      },
      duration: 1500,
    })
  }
}
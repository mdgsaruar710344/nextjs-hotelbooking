"use client"

import { useRouter } from "next/navigation"
import { useCallback, useRef, useEffect } from "react"

export default function Modal({ children }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick = useCallback(
    e => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )

  const onKeyDown = useCallback(
    e => {
      if (e.key === "Escape") onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed inset-0 z-10 bg-black/50"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6"
      >
        {children}
      </div>
    </div>
  )
}


// const Modal = ({children}) => {
//   return (
//     <div>
//       {children}
//     </div>
//   );
// };

// export default Modal;
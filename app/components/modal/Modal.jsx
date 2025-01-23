"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlayRef = useRef(null);
  const wrapperRef = useRef(null);
  const router = useRouter();

  // Function to handle dismissing the modal
  const onDismiss = () => {
    router.back();
  };

  // Handle clicks outside of the modal
  const handleClickOutside = (e) => {
    if (e.target === overlayRef.current || e.target === wrapperRef.current) {
      onDismiss();
    }
  };

  // Handle pressing the Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onDismiss();
    }
  };

  useEffect(() => {
    // Add event listener for Escape key
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-10 bg-black/50"
      onClick={handleClickOutside}
    >
      <div
        ref={wrapperRef}
        className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6"
      > from Modal
        {children}
      </div>
    </div>
  );
}



// const Modal = ({children}) => {
//   return (
//     <div>
//       {children}
//     </div>
//   );
// };

// export default Modal;
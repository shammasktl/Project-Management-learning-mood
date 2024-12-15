import React, { useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({children,ref}) => {

    const dialog = useRef(null)

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        createPortal(
            <dialog>
                {children}
            </dialog>,
            document.getElementById("modal-root")
        )
    )
}

export default Modal

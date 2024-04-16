import ReactDom from "react-dom"

const MODAL_STYLES = {
    position: 'fixed',
    top:'50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

const Modal = ({open, children, onClose}) => {

    if (!open) return null
    console.log(onClose)
    return ReactDom.createPortal (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES} className="bg-primary-black rounded-lg">
                <div className="flex justify-end items-end mb-5">
                    <button className="text-white font-sans" onClick={onClose}>X</button>
                </div>
                <div className="text-white">
                    {children}
                </div>
            </div>        
        </>,
        document.getElementById('portal')
    )
}

export default Modal
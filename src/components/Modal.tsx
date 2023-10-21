interface Props {
  show: boolean,
  component: React.ReactNode
  width: string
}

const Modal = (props: Props) => {

  if(!props.show) {
    return null
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ${props.width}`}>
            { props.component }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
import { Check } from "./Icons"

interface Props {
  show: boolean,
  component: React.ReactNode
  width: string
}

interface PropsModalTx {
  show: boolean,
  linkTx: string,
  closeModal: MouseEventHandler<HTMLButtonElement> | undefined
}

const Modal = (props: Props) => {

  if (!props.show) {
    return null
  }

  return (
    <div className="relative z-[1000]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ${props.width}`}>
            {props.component}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ModalTx = (props: PropsModalTx) => {
  if(!props.show) {
    return null
  }

  return (
    <div className="relative z-[1000]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
                  <Check className="w-8 h-8 fill-green-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Transaction submitted</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Your transaction has been submitted you can check it on block explorer by click the button bellow</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <a href={props.linkTx} target="_blank" >
                <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">Go to explorer</button>
              </a>
              <button onClick={props.closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
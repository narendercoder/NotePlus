import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Toolbar } from './Toolbar';

const NoteModel = ({isOpen, closeModal}) => {
    
  return (
    <div> 
     <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-[600px] transform overflow-hidden text-white rounded-lg border border-solid border-[#5f6368] bg-[#202124] text-left align-middle shadow-xl transition-all">
              <div className='title'>
              <Dialog.Title
                as="h3"
                className="w-full text-2xl font-normal leading-7 pb-3 pt-4 px-4 min-h-[43px] outline-none"
                contentEditable="true"
                role='textbox'
                aria-multiline='true'
                suppressContentEditableWarning={true}
              >
                Payment successful
              </Dialog.Title>
              </div>
        
              <div className="">
                <div className="text-base tracking-[.00625em] py-3 pt-2 min-h-[46px] px-4 outline-none" 
                    contentEditable="true"
                    role='textbox'
                    aria-multiline='true'
                    suppressContentEditableWarning={true} >
                  Your payment has been successfully submitted. We've sent
                  you an email with all of the details of your order.
                </div>
              </div>

              <div className="px-3 py-1 flex justify-end">
               <div className='text-xs font-normal tracking-wide'>Edited 20:57</div>
              </div>

              <div className="flex justify-between items-center my-1">
               <Toolbar/>
               <button type="button" onClick={closeModal} className='mx-2 flex justify-center items-center cursor-pointer rounded-lg text-sm hover:bg-gray-700 px-6 py-2 mr-5'>
                close
               </button>
              </div>

            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  </div>
  )
}

export default NoteModel
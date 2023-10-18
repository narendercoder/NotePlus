import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import styled from "styled-components";
import { notesLabel } from "../../config/notesLabels"
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../actions/categoryActions';

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const selectedcategory = useSelector((state) => state.categoryReducer);
    

    const categoryHandler = async(category) => {
        await dispatch(selectCategory(category));
    };

    useEffect(()=>{
        setCategory(selectedcategory);
    }, [selectedcategory, setCategory])

  return (
    // <div className="relative py-3 px-4 my-1 min-h-[30px] mb-4 text-xl h-full">
    //   <div className="text-black dark:text-white mb-2">
    //     Category
    //   </div>
    //   <div className="py-3 px-4 w-fit bg-gray-100 dark:bg-gray-600 rounded-lg">
    //     <select 
    //     className="text-black dark:text-white bg-transparent outline-none text-xl pr-4"
    //     value={category}
    //     onChange={(e) => setCategory(e.target.value)}>
    //         {
    //             notesLabel.map((item)=>{
    //                 return (
    //                     <option
    //                     key={item.name}
    //                     value={item.name}
    //                     className="p-4 cursor-pointer bg-gray-100 dark:bg-gray-600"
    //                     >
    //                     {item.name}
    //                     </option>
    //                 )
    //             })
    //         }
    //     </select>
    //   </div>
    // </div>

    <Wrapper className="relative py-3 px-4 my-1 min-h-[30px] mb-4 text-xl h-full">
      <div className="menu">
        <div className="menu-list-right w-fit bg-gray-100 dark:bg-gray-600 rounded-lg">
          <Menu as="div" className="relative text-left ">
            <div className="flex items-center">
              <Menu.Button className="menu-button capitalize text-black dark:text-white inline-flex justify-center rounded-md  px-4 py-2 text-sm font-medium ">
                {/* {DefaultLanguage} */}
                {selectedcategory}
                {/* <BiChevronDown
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            /> */}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-50 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {
                    notesLabel.map((item)=>{
                      return (
                        <Menu.Item key={item.name} >
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-orange-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={()=>categoryHandler(item.name)}
                      >
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                      )
                 
                    })
                  }
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </Wrapper>
  )
}

export default Category;

const Wrapper = styled.div`
`
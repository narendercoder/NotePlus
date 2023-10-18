import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import { MdLogout } from 'react-icons/md'
import {BsPersonCircle} from "react-icons/bs"
import { BiChevronDown } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const logoutHandler = async() => {
    try {
      await dispatch(logout());
      navigate("/");
      toast.success('Logout Sucessfully');
    } catch (error) {
      toast.error('error');
    }
  };

  useEffect(() => {}, [userInfo]);


  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <div className='relative w-full'>
          <Menu.Button className="flex w-full justify-between items-center rounded-md  bg-opacity-20 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <BsPersonCircle
              className="ml-2 -mr-1 text-2xl"
              aria-hidden="true"
            />
            <div className='ml-4 capitalize'> {`hi! ${userInfo?.name}`}</div>
            <span className='h-full flex justify-center items-center ml-3'>
            <BiChevronDown/>
            </span>
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
          <Menu.Items className="absolute right-0 mt-2 z-30 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white  dark:bg-[#202124] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item onClick={logoutHandler}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900 dark:text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    
                  >
                    {active ? (
                      <MdLogout
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MdLogout
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Profile
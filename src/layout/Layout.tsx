import { Outlet } from 'react-router';
import Sidebar from '../components/shared/Sidebar';
import FomatUser from '../components/shared/FomatUser';

type Props = {};

function Layout({ }: Props) {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar />
      <main className='flex-1 bg-zinc-100'>
        <div className='w-full h-16 bg-white border-b border-gray-200'>
          <div className="flex items-center justify-between w-full px-6 py-3 bg-white border-b border-gray-100">

            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>

              <div className="relative w-72 sm:w-80">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" placeholder="Quick search..." className="block w-full py-2 pl-10 pr-3 text-sm text-gray-700 bg-slate-50 border-none rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="absolute top-0 right-0.5 block w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </button>

              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>

          </div>

        </div>
        <div className='max-w-7xl mx-auto p-8'>
          <Outlet />
        </div>
        <FomatUser />
      </main>

    </div>
  );
}

export default Layout;

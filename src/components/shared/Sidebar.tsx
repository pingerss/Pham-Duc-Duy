import { BarChart, Book, GraduationCap, LayoutDashboard, Presentation, Settings,  Users } from 'lucide-react';
import { useNavigate } from 'react-router';

function Sidebar() {
  const navigate = useNavigate();

  const onMenuToggle = () => {
    navigate('/home');
  };

  return (
    <aside className='w-64 bg-white border-r border-gray-200'>
      <div className='h-16 flex items-center gap-4 px-6 border-b border-gray-200'>
        <button
          className='inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-30 disabled:bg-gray-500 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 rounded-md cursor-pointer'
          onClick={onMenuToggle}>
          <GraduationCap />
        </button>
       <div className='flex flex-col'>
          <h1 className='text-xl font-semibold leading-tight text-blue-900'>EDUManager</h1>
          <span className='text-sm font-medium text-blue-400'>Admin Dashboard</span>
        </div>
      </div>
      <nav className='p-2'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg'>
              <LayoutDashboard className='w-5 h-5' />
              Dashboard
            </a>
          </li>
        </ul>
      </nav>

       <nav className='p-2'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg'>
              <Users className='w-5 h-5' />
              Students
            </a>
          </li>
        </ul>
        
      </nav>
       <nav className='p-2'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg'>
              <Presentation className='w-5 h-5' />
              Teachers
            </a>
          </li>
        </ul>
      </nav>
       <nav className='p-2'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg'>
              <Book className='w-5 h-5' />
             Books
            </a>
          </li>
        </ul>
      </nav>
       <nav className='p-2'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg'>
              <BarChart className='w-5 h-5' />
            Reports
            </a>
          </li>
        </ul>
      </nav>
       <nav className='p-2'>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg'>
              <Settings className='w-5 h-5' />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

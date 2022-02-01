import './sidebar.css';
// import Data from './data';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


const Data = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.HomeIcon />,
		cName: 'nav-text'
	},
	{
		title: 'Reports',
		path: '/reports',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Products',
		path: '/products',
		icon: <FaIcons.FaCartPlus />,
		cName: 'nav-text'
	},
	{
		title: 'Team',
		path: '/team',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text'
	},
	{
		title: 'Messages',
		path: '/messages',
		icon: <FaIcons.FaEnvelopeOpenText />,
		cName: 'nav-text'
	}
];


const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				{Data.map((data, index) => {
					return (
						<li key={index}>
							{/* <div> {data.icon}</div> */}
							<div>
								{data.title}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;

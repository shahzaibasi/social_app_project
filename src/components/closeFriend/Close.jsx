import './Close.css';

export default function Close({ user }) {
    return (

        <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={user.profilePicture} alt='img' />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}

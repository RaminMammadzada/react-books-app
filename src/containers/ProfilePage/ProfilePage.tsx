import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const ProfilePage = () => {
    const { auth } = useSelector((state: RootState) => state);
    const currentUser = auth.user
    return (
        <div>
            <h2>Profile page</h2>
            <div className='d-flex flex-row'>
                <p>Username: &nbsp;</p>
                <p>{currentUser.username}</p>
            </div>
            <div className='d-flex flex-row'>
                <p>Email: &nbsp;</p>
                <p>{currentUser.email}</p>
            </div>
        </div>
    )
}

export default ProfilePage;
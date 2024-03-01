
import React from 'react';

interface ProfileProps {
  name: string;
  age: number;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({ name, age, bio }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="h-1/4 bg-gray-200 p-4">
        <h2>{name}</h2>
        <p>Age: {age}</p>
      </div>
      <div className="h-3/4 bg-gray-100 p-4">
        <p>Bio: {bio}</p>
      </div>
    </div>
  );
};

export default Profile;
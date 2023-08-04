import { GitHubUserData } from "../types";

interface UserCardProps {
	data: GitHubUserData;
	userName: string;
}

const UserCard = ({ data, userName }: UserCardProps) => {

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Username: {userName}</p>
            {data.name && <p className="text-lg">Name: {data.name}</p>}
            <p className="text-blue-500">
              Github Profile:{" "}
              <a
                target="_blank"
                href={`https://github.com/${userName}`}
                className="underline"
              >
                Github
              </a>
            </p>
            {data.bio && <p className="text-sm">Bio: {data.bio}</p>}
            {data.email && <p className="text-sm">Email: {data.email}</p>}
            {data.company && <p className="text-sm">Company: {data.company}</p>}
            <span className="text-lg">Github Profile pic:</span>
            <img
              src={data?.avatar_url}
              alt="profile pic"
              className="h-32 w-32 rounded-full"
            />
          </div>
        </div>
      );
};

export default UserCard;

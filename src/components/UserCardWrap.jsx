import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";

export default function UserCardWrap() {
  const { users } = useLoaderData();
  return (
    <ul className="divide-y divide-gray-100">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}

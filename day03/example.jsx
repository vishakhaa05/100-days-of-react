
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function UserCard({ user }) {

  const updatedUser = { ...user, age: 30 };

  return (
    <p>
      {updatedUser.name}, {updatedUser.age}
    </p>
  );
}

export default function App() {
  const user = { name: "Vishakha", age: 22 };

  return (
    <div>
      <Welcome name="Vishakha" />
      <Welcome name="Rahul" />
      <Welcome name="Priya" />
      <UserCard user={user} />
    </div>
  );
}
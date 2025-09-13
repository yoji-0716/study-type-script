'use client';

import { useState } from "react";

const users = [
  { name: "jack", age: 25, id: 1 },
  { name: "john", age: 25, id: 2 }
];

function MyButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default function MyApp() {
  const [count, setCount] = useState<number>(0);

  const userItems = users.map((user) => (
    <li key={user.id}>{user.name}</li>
  ));

  function buttonClick() {
    alert("clicked me");
    setCount((c: number) => c + 1);
  }

  return (
    <div>
      <h1>Hello!!</h1>
      <ul>{userItems}</ul>
      <MyButton count={count} onClick={buttonClick} />
      <MyButton count={count} onClick={buttonClick} />
    </div>
  );
}

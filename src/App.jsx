/* eslint-disable react/prop-types */
import { useState } from "react";
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />
          <FormAddFriend open={isOpen} />
          <Button onClick={handleClick}>{isOpen ? "Close" : "Add friend"}</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

const FriendList = () => {
  const friends = initialFriends;

  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </>
  );
};

const Friend = ({ friend }) => {
  const { image, name, balance } = friend;

  return (
    <>
      <li>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        {balance < 0 && (
          <p className="red">
            You owe {name} {Math.abs(balance)}e
          </p>
        )}
        {balance > 0 && (
          <p className="green">
            {name} owes you {Math.abs(balance)}e
          </p>
        )}
        {balance === 0 && <p>You and {name} are even</p>}
        <Button>Select</Button>
      </li>
    </>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

const FormAddFriend = ({ open }) => {
  return (
    <>
      {open && (
        <form className="form-add-friend">
          <label htmlFor="name">🤼 Friend name</label>
          <input id="name" type="text"></input>
          <label htmlFor="image">📷 Image url</label>
          <input id="image" type="text"></input>
          <Button>Add</Button>
        </form>
      )}
    </>
  );
};

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with x</h2>
      <label htmlFor="billValue">💲 Bill value</label>
      <input id="billValue" type="text"></input>
      <label htmlFor="expense">🤯 Your expenses</label>
      <input id="expense" type="text"></input>
      <label htmlFor="expenseFriend">👨 X expense</label>
      <input id="expenseFriend" type="text" disabled></input>
      <label htmlFor="whoIs">😎 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

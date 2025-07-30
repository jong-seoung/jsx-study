import "./App.css";
import UserCard from "./components/UserCard";

const userData = [
  {
    name: "jjong",
    job: "Programmer",
    imageSrc: "avatar.webp",
  },
  {
    name: "백종성",
    job: "으얽앍",
    imageSrc: "avatar2.webp",
  },
  {
    name: "가나다",
    job: "작가",
    imageSrc: "avatar3.jpeg",
  },
];

const App = () => {
  return (
    <>
      {userData.map((value, index) => (
        <UserCard
          key={index}
          name={value.name}
          job={value.job}
          imageSrc={value.imageSrc}
        />
      ))}
    </>
  );
};

export default App;

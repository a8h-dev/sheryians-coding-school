import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {

  const users = [
    {
      img: "https://i.pinimg.com/736x/9f/24/cf/9f24cf1ba9a7ed0fe0c107a4f466b102.jpg",
      intro: "",
      color: "royalblue",
      tag: "Satisfied"
    },
    {
      img: "https://i.pinimg.com/1200x/ba/5d/0a/ba5d0a9f32dcd2e1d58d5c44a949af1a.jpg",
      intro: "",
      color: "lightseagreen",
      tag: "Underserved"
    },
    {
      img: "https://i.pinimg.com/736x/cf/9e/52/cf9e525ffdd4e01b2b72ec4e9c03ce4b.jpg",
      intro: "",
      color: "crimson",
      tag: "Underbanked"
    },
    {
      img: "https://i.pinimg.com/736x/3f/3b/cf/3f3bcf436ddca7d6480bf7dd5e642864.jpg",
      intro: "",
      color: "pink",
      tag: "Underwear"
    },
    {
      img: "https://i.pinimg.com/736x/ea/75/4f/ea754f79c7f63bc94c64d319d3d2fe22.jpg",
      intro: "",
      color: "black",
      tag: "Average"
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
}

export default App;
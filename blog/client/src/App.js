import { PostCreate } from "./components/PostCreate";
import { PostsList } from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <PostCreate />
      <hr />
      <PostsList />
    </div>
  );
}

export default App;

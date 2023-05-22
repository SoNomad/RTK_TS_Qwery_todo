import './App.css';
import PostContainer from './components/PostContainer';

function App() {
  // const dispatch = useAppDispatch();
  // const { isLoading, users, error } = useAppSelector((state) => state.userReducer);
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {users.map((user) => (
          <h4> {user.name} </h4>
        ))} */}
      <PostContainer />
    </div>
  );
}

export default App;

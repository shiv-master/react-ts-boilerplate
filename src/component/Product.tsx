import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

type Params = {
  item: string;
};

type LocationParams = {
  username: string;
};

const Product = () => {
  const { item } = useParams<Params>();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const state = location.state as LocationParams;
  const navigate = useNavigate();
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    navigate("/home/about");
  };

  return (
    <main>
      {item}
      <div>{searchParams.get("category")}</div>
      <div>{state.username}</div>
      <button onClick={clickHandler}>Back to About</button>
    </main>
  );
};

export default Product;

import MainPage from '../../pages/main-page/main-page';

type PropsType = {
  placesCount: number;
}

function App({placesCount}: PropsType): JSX.Element {
  return <MainPage placesCount = {placesCount}/>;
}

export default App;

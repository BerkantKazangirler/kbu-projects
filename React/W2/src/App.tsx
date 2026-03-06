import { Hosgeldin } from "./components/hosgeldin";

export const App = () => {
  const isim = "orçun";
  const mevcutYas = 30;
  const kacYasindasin = (yas: number) => yas - 10;
  const yasYazi = (
    <h1>
      {isim} 15 sene yaşlandın, yeni yaşın {kacYasindasin(mevcutYas)}
    </h1>
  );

  return (
    <div>
      {yasYazi}
      <Hosgeldin />
    </div>
  );
};

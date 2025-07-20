import "./App.css";
import Navbar from "./components/Navbar";
import Square from "./components/Square";
import Driver from "./components/Driver";

function App() {
  const drivers = [
    {
      id: 0,
      name: "Lewis Hamilton",
      imgUrl:
        "https://www.virgilio.it/motori/wp-content/uploads/sites/4/2025/03/Lewis-Hamilton-Ferrari-F1.jpg",
      team: "Ferrari",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat.",
      raceWin: 103,
      champion: true,
    },

    {
      id: 1,
      name: "Fernando Alonso",
      imgUrl:
        "https://assets.astonmartinf1.com/public/cms/7nnVwrWQkv8jbcqgrF95GO/fff632110baca444c02c07f8ebb0d753/Fernando_page_header_image.jpg?&h=849&w=1440&fm=jpg&fit=thumb",
      team: "Aston Martin",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat.",
      raceWin: 32,
      champion: true,
    },
    {
      id: 2,
      name: "Max Verstappen",
      imgUrl:
        "https://img.redbull.com/images/c_crop,w_5464,h_2732,x_0,y_1035/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2022/5/5/esxtfazwc5k0xntwv20i/max-verstappen-profile-pic",
      team: "Red Bull Racing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat.",
      raceWin: 65,
      champion: true,
    },
    {
      id: 3,
      name: "George Russel",
      imgUrl:
        "https://sportsbase.io/images/gpfans/copy_1200x800/bbb4d534f6379720ad02d73194e9c2d79de744f2.jpg",
      team: "Mercedes",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat.",
      raceWin: 4,
      champion: false,
    },
  ];
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <h1>F1 driver</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-3">
            <Driver
              name="Lewis Hamilton"
              imgUrl="https://www.virgilio.it/motori/wp-content/uploads/sites/4/2025/03/Lewis-Hamilton-Ferrari-F1.jpg"
              team="Ferrari"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat."
              raceWin={103}
              champion={true}
            />
          </div>
          <div className="col-3">
            <Driver
              name="Fernando Alonso"
              imgUrl="https://assets.astonmartinf1.com/public/cms/7nnVwrWQkv8jbcqgrF95GO/fff632110baca444c02c07f8ebb0d753/Fernando_page_header_image.jpg?&h=849&w=1440&fm=jpg&fit=thumb"
              team="Aston Martin"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat."
              raceWin={32}
              champion={true}
            />
          </div>
          <div className="col-3">
            <Driver
              name="Max Verstappen"
              imgUrl="https://img.redbull.com/images/c_crop,w_5464,h_2732,x_0,y_1035/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2022/5/5/esxtfazwc5k0xntwv20i/max-verstappen-profile-pic"
              team="Red Bull Racing"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat."
              raceWin={65}
              champion={true}
            />
          </div>
          <div className="col-3">
            <Driver
              name="George Russel"
              imgUrl="https://sportsbase.io/images/gpfans/copy_1200x800/bbb4d534f6379720ad02d73194e9c2d79de744f2.jpg"
              team="Mercedes"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, repellat."
              raceWin={4}
              champion={false}
            />
          </div> */}


          {drivers /* .filter((driver) => !driver.champion)  */
          .map((driver) => (
            <div className="col-3">
              <Driver
                key={driver.id}
                name={driver.name}
                imgUrl={driver.imgUrl}
                team={driver.team}
                description={driver.description}
                raceWin={driver.raceWin}
                champion={driver.champion}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

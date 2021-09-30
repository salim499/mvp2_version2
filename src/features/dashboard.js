import React, {useState} from 'react'

// Import icons
import add_portfolio from '../assets/icons/add_portfolio.svg';
import gain from '../assets/icons/gain.svg';

// Import components
import UserProfile from '../components/userProfile'
import ConfidenceLevel from '../components/ConfidenceLevel';

// Import contexts
import { useNavBar } from "../contexts/navbar"
import { useAuth } from "../contexts/user"

const targetsFromBackend = [
  {name:"Target 1", 
   direction:"up", 
   confidenceLevel:30 
  }, 
  {name:"Target 2", 
  direction:"down", 
  confidenceLevel:"70" 
 },
 {name:"Target 3", 
 direction:"up", 
 confidenceLevel:"10" 
}
]

const dataFromBackend =[
    {
        "date": "23.07.2007",
        "US Treasuries": 75.9375,
        "US High Yield": 140.1308,
        "US Equities": 1365.45,
      },
      {
        "US Treasuries": 76.0625,
        "US High Yield": 139.1285,
        "US Equities": 1342.09,
      },
      {
        "US Treasuries": 76.234375,
        "US High Yield": 138.0593,
        "US Equities": 1344.03,
      },
      {
  
        "US Treasuries": 76.90625,
        "US High Yield": 137.1479,
        "US Equities": 1311.59,
      },
      {
        "US Treasuries": 76.8125,
        "US High Yield": 137.1906,
        "US Equities": 1285.23,
      },
      {
        "US Treasuries": 76.6875,
        "US High Yield": 136.824,
        "US Equities": 1305.24,
      },
      {
        "US Treasuries": 76.828125,
        "US High Yield": 135.3339,
        "US Equities": 1288.67,
      },
      {
        "date": "01.08.2007",
        "US Treasuries": 76.859375,
        "US High Yield": 135.7713,
        "US Equities": 1295.72,
      },
      {
        "US Treasuries": 76.859375,
        "US High Yield": 135.7568,
        "US Equities": 1306.12,
      },
      {
        "date": "03.08.2007",
        "US Treasuries": 77.15625,
        "US High Yield": 136.5559,
        "US Equities": 1272.01,
      },
      {
        "US Treasuries": 77.015625,
        "US High Yield": 136.6757,
        "US Equities": 1293.78,
      },
      {
        "date": "07.08.2007",
        "US Treasuries": 76.9375,
        "US High Yield": 136.8472,
        "US Equities": 1306.74,
      },
      {
        "date": "09.08.2007",
        "US Treasuries": 76.796875,
        "US High Yield": 138.2235,
        "US Equities": 1285.14,
      },
      {
        "date": "10.08.2007",
        "US Treasuries": 76.875,
        "US High Yield": 138.3298,
        "US Equities": 1279.06,
      },
      {
        "date": "13.08.2007",
        "US Treasuries": 76.90625,
        "US High Yield": 138.468,
        "US Equities": 1282.68,
      },
      {
        "date": "14.08.2007",
        "US Treasuries": 77.15625,
        "US High Yield": 138.8395,
        "US Equities": 1264.34,
      },
      {
        "date": "15.08.2007",
        "US Treasuries": 77.375,
        "US High Yield": 138.8794,
        "US Equities": 1246.8,
      },
      {
        "date": "17.08.2007",
        "US Treasuries": 77.671875,
        "US High Yield": 138.0627,
        "US Equities": 1278.09,
      },
      {
        "date": "20.08.2007",
        "US Treasuries": 77.796875,
        "US High Yield": 138.1764,
        "US Equities": 1277.39,
      },
      {
        "date": "21.08.2007",
        "US Treasuries": 78.015625,
        "US High Yield": 138.1962,
        "US Equities": 1278.45,
      },
      {
        "US Treasuries": 77.84375,
        "US High Yield": 138.8875,
        "US Equities": 1294.66,
      },
      {
        "US Treasuries": 77.828125,
        "US High Yield": 139.3422,
        "US Equities": 1292.64,
      },
    ]

function Dashboard() {
 
    // useContext
    const { logout } = useAuth()
    const {navBarState} = useNavBar()

    // useState
    const [assetsGraphData, setAssetsGraphData] = useState(dataFromBackend)
    const [direction, setDirection]=useState("down");
    return (
        <div className={navBarState?"container-with-margin ":"container-without-margin"}>
            <UserProfile/>
            <div className="dashboard_header">
                <div className="dashboard_header-text">
                Hi John, Welcome back !<br/><br/>
                <div className="dashboard_header-label">dashboard</div>
                </div>
                <div>
                    <input type="text" placeholder="search" className="dashboard_header-search"/>
                </div>
            </div>
            <div className="portfolios">
                <div className="portfolios-add_portfolio">
                    <div className="portfolios-add_portfolio-label">
                        New Model
                    </div>
                    <div>
                        <img src={add_portfolio}/>
                    </div>
                </div>
                <div className="portfolios-item">
                    <div className="portfolios-item-label"
                    >
                        Model 1
                    </div>
                    <div className="portfolios-item-actions">
                        <div className="portfolios-item-actions-item1">
                        <div>+1D</div>
                        </div>
                        <div className="portfolios-item-actions-duplicate">
                            <div>+3M</div>
                        </div>
                        <div className="portfolios-item-actions-delete">
                            <div>+5Y</div>
                        </div>
                    </div>
                </div>
                <div className="portfolios-item">
                    <div className="portfolios-item-label">
                      Model 2 
                    </div>
                    <div className="portfolios-item-actions">
                        <div className="portfolios-item-actions-item1">
                          <div>+1D</div>
                        </div>
                        <div className="portfolios-item-actions-duplicate">
                            <div>+3M</div>
                        </div>
                        <div className="portfolios-item-actions-delete">
                            <div>+5Y</div>
                        </div>
                    </div>
                </div>
                  <div className="portfolios-item">
                    <div className="portfolios-item-label">
                        Model 3
                    </div>
                    <div className="portfolios-item-actions">
                        <div className="portfolios-item-actions-item1">
                          <div>+1D</div>
                        </div>
                        <div className="portfolios-item-actions-duplicate">
                            <div>+3M</div>
                        </div>
                        <div className="portfolios-item-actions-delete">
                            <div>+5Y</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="targets-section">
            {targetsFromBackend.map((target, index)=>{
              return(   
                <div className="target-box">
                  <div>{target.name}</div>
                {
                  target.direction === "up" ?
                  <img src={gain} alt="gain"/>
                  : target.direction === "down" && 
                  <img style={{transform: "rotate(180deg)"}} src={gain} alt="gain"/>
                }
                <ConfidenceLevel target={target} index={index}/>    
              </div>
              )
            })}
            </div>
        
        </div>
    )
}

export default Dashboard;

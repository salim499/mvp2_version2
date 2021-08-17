// Import from react
import React from 'react'

// Import css files 
import '../css/createPortfolioNavbar.css'

function CreatePortfolioNavbar(props) {
    return (
        <>
            <div className="create_portfolio_navbar">
                <div className="create_portfolio_navbar-filter"
                style={{
                  width:props.width&&props.width
                }}                
                >
                    <div className="create_portfolio_navbar-filter-label">
                        Portfolio V0
                    </div>
                    <div className="create_portfolio_navbar-filter-buttons">
                        <div className="create_portfolio_navbar-filter-buttons-item1">
                          <div className="create_portfolio_navbar-filter-buttons-item1-text">
                              Factor View
                          </div>  
                        </div>
                        <div className="create_portfolio_navbar-filter-buttons-item2">
                          <div className="create_portfolio_navbar-filter-buttons-item2-text">
                            Portfolio View
                          </div>
                        </div>
                        <div className="create_portfolio_navbar-filter-buttons-item3">
                          <div className="create_portfolio_navbar-filter-buttons-item3-text">  
                            Model View
                          </div>
                        </div>
                    </div>
                </div>
                <div className="create_portfolio_navbar-actions"
                style={{
                  width:props.width&&props.width
                }} 
                >
                {props.actions&&props.actions.map((action,index)=>(
                  <div className="create_portfolio_navbar-actions-item">
                    <div className="create_portfolio_navbar-actions-item-text">
                      action
                    </div>
                  </div>
                ))}
                </div>
            </div>          
        </>
    )
}

export default CreatePortfolioNavbar

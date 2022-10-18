import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {["home", "about", "contact", "work", "skills", "contact"].map(
                (item, i) => (
                 
                    <a  
                    key={item + i}
                    href={`#${item}`}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: '#313BAC'}: null}/>
                    
                   
                )
              )}
    </div>
  )
}

export default NavigationDots